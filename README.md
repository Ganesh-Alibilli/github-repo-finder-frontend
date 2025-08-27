# GitHub Repo Finder

A simple Full-Stack app that searches GitHub repositories, stores results in MongoDB, and displays them on a dashboard.

## Tech Stack
- Frontend: React, Axios
- Backend: Node.js, Express
- Database: MongoDB Atlas
- Deployment: Render (backend) + Netlify (frontend)

## Features
- Search GitHub repos by keyword
- Store results in MongoDB
- Display results with pagination
- Error handling
- Deployed live

## Setup
1. Clone repo
2. Backend:
   ```bash
   cd backend
   npm install
   echo "MONGO_URI=your_connection_string" > .env
   npm start
