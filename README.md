# rom-consult Deployment Guide (Hybrid)

This repository supports 2 production approaches:

- Docker for `Postgres` + `Redis` only (both flows)
- PM2 for Node process (`NestJS` API)
- Frontend can run with either:
  - PM2 (`next start`, old flow, requires server build)
  - Docker prebuilt image (recommended, no build on server)
- Nginx on host (not in Docker) for reverse proxy and SSL termination

## 1) Server prerequisites

- Ubuntu/Debian server
- Open ports in security group/firewall:
  - `22` (admin IP only)
  - `80`, `443` (public)
- Docker + Compose plugin
- Node.js 20+ (required for backend build/runtime)
- PM2
- Nginx
- Certbot

Install baseline packages:

```bash
sudo apt-get update
sudo apt-get install -y docker.io docker-compose-plugin nginx certbot python3-certbot-nginx
```

Install Node 20 + Yarn (via corepack):

```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs
sudo corepack enable
corepack prepare yarn@1.22.22 --activate
sudo npm i -g pm2
```

## 2) Clone and prepare env

```bash
git clone <YOUR_REPO_URL> /opt/rom-consult
cd /opt/rom-consult
```

Create backend deploy env:

```bash
cp rom-consult-be/.env.example rom-consult-be/.env
nano rom-consult-be/.env
```

Create frontend deploy env:

```bash
cp rom-consult-fe/.env.example rom-consult-fe/.env
nano rom-consult-fe/.env
```

Important for hybrid mode in `rom-consult-be/.env`:

- `DATABASE_URL` must point to `127.0.0.1:5432`
- `REDIS_HOST=127.0.0.1`
- `REDIS_PASSWORD` is used by Redis container and backend app
- `APP_ENV=production`, `APP_DEBUG=false`
- set real JWT/third-party secrets

Local development convention:

- use `rom-consult-be/.env.local` for local machine values
- keep `rom-consult-be/.env` for deploy/server values
- keep `rom-consult-be/.env.example` as template only
- use `rom-consult-fe/.env.local` for frontend local development
- keep `rom-consult-fe/.env` for deploy/server build values
- keep `rom-consult-fe/.env.example` as frontend template only

## 2.1) Frontend env guide (separate)

Frontend currently reads one public env variable:

- `NEXT_PUBLIC_API_BASE_URL` (used in `rom-consult-fe/src/lib/api-client.ts`)

Recommended values:

- Deploy (Nginx reverse proxy): `NEXT_PUBLIC_API_BASE_URL=/api`
- Local without Nginx: `NEXT_PUBLIC_API_BASE_URL=http://localhost:3001`
- Local with proxy setup: `NEXT_PUBLIC_API_BASE_URL=/api`

Important:

- `NEXT_PUBLIC_*` variables are embedded at build time for Next.js.
- Always set frontend env before running `npm run build`.
- After changing `NEXT_PUBLIC_API_BASE_URL`, rebuild frontend and restart PM2 web process.

## 3) Start Postgres + Redis with Docker

```bash
cd /opt/rom-consult/rom-consult-be
docker compose -f docker-compose.db.yml up -d
docker compose -f docker-compose.db.yml ps
```

This compose binds DB ports to localhost only:

- `127.0.0.1:5432` (Postgres)
- `127.0.0.1:6379` (Redis)

## 4) Build and run app processes (recommended: no frontend build on server)

Backend:

```bash
cd /opt/rom-consult/rom-consult-be
yarn install
yarn prisma generate
yarn build
yarn migrate:prod
```

Start PM2 for API only (from repo root):

```bash
cd /opt/rom-consult
pm2 start ecosystem.api-only.config.cjs
pm2 save
pm2 startup
pm2 list
```

## 4.1) Frontend as prebuilt Docker image (no build on server)

1. Build/push frontend image in GitHub Actions (`.github/workflows/build-fe-image.yml`).
2. On server, set your image tag and pull:

```bash
cd /opt/rom-consult
touch .env
nano .env
```

Add:

```bash
WEB_IMAGE=ghcr.io/<your-org>/rom-consult-fe:latest
```

Then run:

```bash
cd /opt/rom-consult
docker compose -f docker-compose.web.yml --env-file .env pull
docker compose -f docker-compose.web.yml --env-file .env up -d
docker compose -f docker-compose.web.yml ps
```

If your GHCR package is private, login once on server:

```bash
echo <GHCR_PAT> | docker login ghcr.io -u <github-username> --password-stdin
```

## 5) Configure Nginx on host (HTTP + HTTPS)

Create site config:

```bash
sudo nano /etc/nginx/sites-available/rom-consult
```

Paste this config:

```nginx
server {
    listen 80;
    listen [::]:80;
    server_name rom-consult.com www.rom-consult.com;

    location /.well-known/acme-challenge/ {
        root /var/www/certbot;
    }

    location / {
        return 301 https://$host$request_uri;
    }
}

server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name rom-consult.com www.rom-consult.com;

    ssl_certificate     /etc/letsencrypt/live/rom-consult.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/rom-consult.com/privkey.pem;

    client_max_body_size 25m;

    location /api/ {
        proxy_pass http://127.0.0.1:3001/;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_read_timeout 120s;
        proxy_connect_timeout 60s;
        proxy_send_timeout 120s;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
    }

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_read_timeout 120s;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
    }
}
```

Enable site:

```bash
sudo ln -sf /etc/nginx/sites-available/rom-consult /etc/nginx/sites-enabled/rom-consult
sudo rm -f /etc/nginx/sites-enabled/default
sudo nginx -t
sudo systemctl reload nginx
```

## 6) Issue SSL certificate (certbot)

Prepare ACME webroot:

```bash
sudo mkdir -p /var/www/certbot
sudo chown -R www-data:www-data /var/www/certbot
```

Issue cert:

```bash
sudo certbot certonly --webroot \
  --webroot-path /var/www/certbot \
  -d rom-consult.com -d www.rom-consult.com
```

Then reload nginx:

```bash
sudo nginx -t
sudo systemctl reload nginx
```

## 7) Verify

From server:

```bash
curl -sS -o /dev/null -w "%{http_code}\n" http://127.0.0.1:3000/
curl -sS -o /dev/null -w "%{http_code}\n" http://127.0.0.1:3001/health
curl -sS -o /dev/null -w "%{http_code}\n" https://rom-consult.com/
curl -sS -o /dev/null -w "%{http_code}\n" https://rom-consult.com/api/health
```

Project helper:

```bash
yarn verify:hybrid
```

## 8) Routine update flow (no frontend build on server)

```bash
cd /opt/rom-consult
git pull

# DB/Redis (if compose changed)
cd /opt/rom-consult/rom-consult-be
docker compose -f docker-compose.db.yml up -d

# Backend
yarn install
yarn prisma generate
yarn build
yarn migrate:prod

# Reload API PM2 process
cd /opt/rom-consult
pm2 restart ecosystem.api-only.config.cjs
pm2 save

# Pull/restart frontend container
docker compose -f docker-compose.web.yml --env-file .env pull
docker compose -f docker-compose.web.yml --env-file .env up -d
```

## 8.1) Legacy flow (build Next.js on server)

If you still want old behavior, keep using:

```bash
cd /opt/rom-consult/rom-consult-fe
yarn install --frozen-lockfile
yarn build
cd /opt/rom-consult
pm2 restart ecosystem.config.cjs
```

## Notes

- Do not expose `5432`/`6379` publicly.
- Rotate all secrets if any were shared in chat/logs.
- If request timeout persists, inspect:
  - `pm2 logs`
  - `sudo tail -f /var/log/nginx/error.log`
  - server resources (`htop`, memory, CPU credits)
