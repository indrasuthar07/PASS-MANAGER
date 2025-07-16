# Backend - PassXpert

## Setup

1. Install dependencies:
   ```
   npm install
   ```
2. Create a `.env` file in this directory:
   ```
   MONGO_URI=your_mongodb_connection_string
   DB_NAME=your_db_name
   PORT=3000 # or any port you want
   ```
3. Start the server:
   ```
   node server.js
   ```

## Deployment
- Deploy to any Node.js hosting (Render, Railway, Heroku, etc.).
- Make sure to set the environment variables above in your deployment platform.
- The server will use the `PORT` environment variable if set.
- CORS is enabled by default for all origins. 