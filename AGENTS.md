# Pars Bozorgmehr — Industrial Lifting Equipment Website

A Persian (RTL) multi-page corporate website for Pars Bozorgmehr, a supplier of
industrial lifting equipment. Built with Vite + React (frontend) and a small
Express API (backend) that stores consultation requests.

## Stack

- **Frontend:** Vite + React 18 + React Router 6, served on port 3000.
- **Backend:** Express, stores consultation requests in a JSON file
  (`/data/consultations.json` inside the `api` container, persisted in the
  `api_data` volume). No database server required.
- Single origin: the Vite dev server proxies `/api` to the `api` service, so the
  whole site is public on port 3000 (no CORS needed).

## Running in the sandbox

```
docker compose -f docker-compose.base44.yml up -d --build
```

- Web entry point: http://localhost:3000
- API health: proxied at `/api/health` (internal port 8000)

Both services use the plain `node:22` image with the source bind-mounted and
dependencies installed on container startup, so edits hot-reload without a
rebuild. File-watch polling is enabled for bind mounts.

## Admin / consultation requests

- The public consultation form posts to `POST /api/consultations`.
- Requests are viewed/managed at the **/admin** route, protected by
  `ADMIN_PASSWORD` (sent as the `x-admin-password` header).
- A development placeholder (`admin12345`) lives in `.env.base44-defaults`.
  Set a strong `ADMIN_PASSWORD` via the dashboard to override it. Until you do,
  the admin panel is reachable with the placeholder — change it before any real
  use.

## Notes / limitations

- No email notifications are configured. Submitting the form stores the request
  in the backend; an admin must check the /admin panel. Do not assume email
  alerts are sent.
- Product category pages describe categories generically; no real product models
  or technical specs are invented. The data structure is ready for real products
  to be added later.
- The company logo is referenced from its provided asset URL; the map is not
  embedded because the exact geographic coordinates are not confirmed — the
  text address is shown instead.
