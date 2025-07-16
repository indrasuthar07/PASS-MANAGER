# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
<<<<<<< HEAD

## Deployment Instructions

### 1. Backend (Express + MongoDB)
- Set your MongoDB URI and database name in a `.env` file in the `backend/` directory:
  ```
  MONGO_URI=your_mongodb_connection_string
  DB_NAME=your_db_name
  ```
- (Optional) Change the port in `backend/server.js` if needed.
- Deploy your backend to a service like Render, Railway, Heroku, or your own server.
- Make sure CORS is enabled (already set in code).

### 2. Frontend (Vite + React)
- In the root directory, create a `.env` file:
  ```
  VITE_API_URL=https://your-backend-url.com
  ```
  (Leave blank for same-origin/proxy setup.)
- Build your frontend for production:
  ```
  npm run build
  ```
- Deploy the `dist/` folder to Vercel, Netlify, or your preferred static host.

### 3. Environment Variables
- Never commit your `.env` files with secrets to public repositories.
- Make sure to set the correct environment variables on your deployment platform.

### 4. Troubleshooting
- If you see network errors, check that `VITE_API_URL` is set correctly and your backend is running and accessible.
- For CORS issues, ensure your backend allows requests from your frontend domain.
=======
>>>>>>> 8c76e7c1c7b906539a5f91a7c2e4ebe358ec577c
