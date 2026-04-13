# Full-Stack Portfolio Application

A modern full-stack web application built with React, Express, and MongoDB.

## Project Structure

```
portfolio/
├── frontend/          # React + Vite frontend
│   ├── src/
│   │   ├── components/   # Reusable React components
│   │   ├── pages/        # Page components
│   │   ├── services/     # API services
│   │   ├── App.jsx       # Main App component
│   │   └── main.jsx      # Entry point
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
├── backend/           # Express.js backend
│   ├── src/
│   │   ├── routes/       # API routes
│   │   ├── models/       # MongoDB models
│   │   ├── middleware/   # Custom middleware
│   │   └── server.js     # Express server
│   ├── package.json
│   └── .env.example
└── package.json       # Root package.json for monorepo commands
```

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- MongoDB (optional, for production)

### Installation

1. **Install all dependencies:**
   ```bash
   npm run install-all
   ```

2. **Set up environment variables:**
   - Backend: Copy `backend/.env.example` to `backend/.env`
   - Update values as needed

3. **Start development servers:**
   ```bash
   npm run dev
   ```
   This runs both frontend (port 5173) and backend (port 5000) concurrently.

### Alternative - Run separately

**Frontend only:**
```bash
npm run frontend
```

**Backend only:**
```bash
npm run backend
```

## Available Scripts

### Root Commands
- `npm run install-all` - Install dependencies for all packages
- `npm run dev` - Start both frontend and backend in development mode
- `npm run build` - Build frontend and backend
- `npm run frontend` - Start frontend development server
- `npm run backend` - Start backend development server

### Frontend Commands
- `npm --prefix frontend run dev` - Start Vite dev server
- `npm --prefix frontend run build` - Build for production

### Backend Commands
- `npm --prefix backend run dev` - Start Express server with auto-reload
- `npm --prefix backend start` - Start Express server

## Features

- **Modern React** with functional components and hooks
- **Vite** for fast development and optimized builds
- **Express.js** REST API
- **Responsive Design** with CSS Grid and Flexbox
- **Contact Form** with backend API integration
- **Projects Showcase** with data from backend
- **Skills Display** with categorized skills

## Development

- Frontend runs on: `http://localhost:5173`
- Backend API runs on: `http://localhost:5000`
- API requests are proxied from frontend to backend via Vite config

## Tech Stack

**Frontend:**
- React 18
- Vite
- React Router
- Axios
- CSS3

**Backend:**
- Express.js
- Node.js
- CORS
- dotenv

**Database:**
- MongoDB (optional)

## Next Steps

1. Configure MongoDB connection in `.env`
2. Create MongoDB models for portfolio data
3. Add authentication if needed
4. Deploy frontend to Vercel/Netlify
5. Deploy backend to Heroku/Railway/etc

## License

MIT
