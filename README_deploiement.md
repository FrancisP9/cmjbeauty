## Déploiement CMJ (FastAPI + React)

### 1) MongoDB Atlas
- Créer un cluster gratuit, utilisateur (read/write), autoriser IP.
- Récupérer `MONGO_URL` (URI mongodb+srv).

### 2) Backend (Render)
- Root: `backend`
- Build: `pip install -r requirements.txt`
- Start: `uvicorn server:app --host 0.0.0.0 --port $PORT`
- Env:
  - `MONGO_URL=<URI Atlas>`
  - `DB_NAME=cmj_prod`
  - `CORS_ORIGINS=https://ton-domaine.com,https://ton-site.netlify.app`

### 3) Frontend (Netlify)
- Root: `frontend`
- Build: `npm ci && npm run build` (ou `yarn install && yarn build`)
- Publish: `frontend/build`
- Env:
  - `REACT_APP_BACKEND_URL=https://<backend_url>`
- Fichiers déjà fournis:
  - `frontend/public/_redirects` (SPA)
  - `netlify.toml` (monorepo: build `frontend`)

### 4) CORS
- Dans Render (backend), mettre l’URL finale Netlify et ton domaine personnalisé dans `CORS_ORIGINS` (séparés par virgules). Redeployer le backend.

### 5) Vérification
- Backend: `https://<backend>/api/` répond OK.
- Frontend: boutons “Réserver” redirigent vers `https://share.google/RSO9x44LBUl4MIxGb`.
- Évènements: `POST /api/events/booking-click` OK (Mongo Atlas up).

### 6) Domaine personnalisé
- Ajouter domaine sur Netlify, activer HTTPS.
- Rajouter ce domaine dans `CORS_ORIGINS` côté backend, redeployer.

### 7) Alternative Docker
- Voir exemple `docker-compose.yml` (à créer si besoin) pour héberger ensemble sur un VPS.
