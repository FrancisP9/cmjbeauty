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

### 3) Frontend (Vercel)
- Root: `frontend`
- Build (déjà configuré): voir `vercel.json` (CRA/CRACO)
- Output: `frontend/build`
- Env:
  - `REACT_APP_BACKEND_URL=https://<backend_url>`
- SPA: réécritures déjà gérées dans `vercel.json` (toutes les routes → `index.html`).

Déploiement auto via Deploy Hook (sans token)
1. Dans Vercel → Project (frontend) → Settings → Git → Deploy Hooks → Create Hook
   - Branch: `main` (ou votre branche de prod)
   - Copiez l’URL du hook
2. Dans GitHub → Settings → Secrets and variables → Actions → New repository secret
   - Name: `VERCEL_DEPLOY_HOOK_URL`
   - Value: l’URL copiée ci‑dessus
3. Le workflow `.github/workflows/vercel-deploy.yml` déclenchera un déploiement à chaque push sur `main` (ou manuellement via “Run workflow”).

Alternative: Intégration GitHub ↔ Vercel (recommandée)
- Connectez le repo dans Vercel (Git Integration). Vercel build/déploie automatiquement sans hook ni token.

### 4) CORS
- Dans Render (backend), mettre l’URL finale Netlify et ton domaine personnalisé dans `CORS_ORIGINS` (séparés par virgules). Redeployer le backend.

### 5) Vérification
- Backend: `https://<backend>/api/` répond OK.
- Frontend: boutons “Réserver” redirigent vers `https://share.google/RSO9x44LBUl4MIxGb`.
- Évènements: `POST /api/events/booking-click` OK (Mongo Atlas up).

### 6) Domaine personnalisé
- Ajouter votre domaine sur Vercel (ou Netlify si vous l’utilisez), activer HTTPS.
- Rajouter ce domaine dans `CORS_ORIGINS` côté backend, redeployer.

### 7) Alternative Docker
- Voir exemple `docker-compose.yml` (à créer si besoin) pour héberger ensemble sur un VPS.
