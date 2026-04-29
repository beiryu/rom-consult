/**
 * PM2: Nest (3001) + Next (3000) on the host. Postgres/Redis via docker-compose.db.yml on 127.0.0.1.
 *
 * Prereqs:
 *   rom-consult-be: yarn install && yarn build && prisma generate (if needed)
 *   rom-consult-fe: npm ci && npm run build  (NEXT_PUBLIC_API_BASE_URL=/api at build time)
 *   rom-consult-be/.env.production — copy from .env.production.example
 *
 * Start: pm2 start ecosystem.config.cjs
 * Save:  pm2 save && pm2 startup
 */
const path = require('path');

const root = __dirname;
const be = path.join(root, 'rom-consult-be');
const fe = path.join(root, 'rom-consult-fe');

module.exports = {
    apps: [
        {
            name: 'romconsult-api',
            cwd: be,
            script: 'dist/main.js',
            interpreter: 'node',
            // Node 20+: load env from file (no extra dotenv dependency)
            node_args: '--env-file=.env.production',
            instances: 1,
            exec_mode: 'fork',
            max_memory_restart: '512M',
        },
        {
            name: 'romconsult-web',
            cwd: fe,
            script: 'node_modules/next/dist/bin/next',
            args: 'start',
            interpreter: 'node',
            instances: 1,
            exec_mode: 'fork',
            max_memory_restart: '512M',
            env: {
                NODE_ENV: 'production',
                PORT: '3000',
            },
        },
    ],
};
