#!/usr/bin/env bash
# Run on the server after: docker compose -f docker-compose.db.yml up -d
# and pm2 start ecosystem.config.cjs (and nginx using nginx/nginx.host.conf).
set -euo pipefail

echo "== Backend health (via Nginx) =="
curl -sS -f "http://127.0.0.1/api/health" | head -c 300 || true
echo
echo

echo "== Frontend HTTP status =="
curl -sS -o /dev/null -w "HTTP %{http_code}\n" "http://127.0.0.1/" || true

echo "== PM2 =="
command -v pm2 >/dev/null && pm2 list || echo "pm2 not in PATH"

echo "== Docker DB =="
REPO_ROOT="$(cd "$(dirname "$0")/.." && pwd)"
docker compose -f "$REPO_ROOT/docker-compose.db.yml" ps 2>/dev/null || echo "docker compose not available"
