# Himlay Technologies Platform

This repository contains the enterprise-grade React & FastAPI platform for Himlay Technologies.

## Project Structure
- `frontend/`: Vite + React + TypeScript + Tailwind v4 + Framer Motion
- `backend/`: Python + FastAPI + MongoDB + Langchain Chatbot
- `.github/workflows/`: CI/CD automation for GitHub Actions

## Deployment Guide

### 1. GitHub Actions (CI/CD)
The project comes pre-configured with a continuous integration pipeline (`.github/workflows/ci.yml`). 
Whenever you push code to the `main` branch, GitHub Actions will automatically:
- Install Python dependencies and run syntax checks.
- Install Node.js dependencies and build the frontend to ensure no build errors exist.

No additional setup is required. The action runs automatically on `git push`.

### 2. Deploying the Frontend to Vercel
Vercel is the recommended hosting platform for Vite/React frontends.
1. Create an account on [Vercel](https://vercel.com).
2. Click **Add New Project** and connect your GitHub account.
3. Import the `himlay` repository.
4. **Important**: In the configuration settings, set the **Root Directory** to `frontend`.
5. The default Vite settings (`npm run build` and `dist` output folder) will automatically be detected.
6. Click **Deploy**. Vercel will now automatically redeploy your frontend whenever you push to GitHub!

### 3. Deploying the Backend to Render
Render is the recommended hosting platform for FastAPI backends.
1. Create an account on [Render](https://render.com).
2. Click **New** -> **Web Service**.
3. Connect your GitHub repository.
4. Set the **Root Directory** to `backend`.
5. Set the **Build Command** to:
   ```bash
   pip install -r requirements.txt && pip install -e .
   ```
6. Set the **Start Command** to:
   ```bash
   uvicorn src.himlay_api.main:app --host 0.0.0.0 --port $PORT
   ```
7. Under **Environment Variables**, add the following keys (copy their values from your local `.env` file):
   - `MONGODB_URI`
   - `GROQ_API_KEY`
   - `RESEND_API_KEY`
   - `EMAIL_FROM` (e.g., `noreply@yourdomain.com`)
   - `ADMIN_EMAIL` (e.g., `contact@yourdomain.com`)
   - `ALLOWED_ORIGINS` (Set this to your live Vercel frontend URL, e.g., `https://himlay.vercel.app`)
8. Click **Create Web Service**. 

*Note on Render Sleep: The frontend application has a built-in Keep-Alive mechanism that will ping the `/health` endpoint to prevent the backend from sleeping while users are browsing your site.*

## Local Development
To run locally, you can start the backend and frontend separately:

**Backend:**
```bash
cd backend
uvicorn src.himlay_api.main:app --reload --host 0.0.0.0 --port 8000
```

**Frontend:**
```bash
cd frontend
npm run dev
```
