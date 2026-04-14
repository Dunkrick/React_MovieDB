# 🎬 React Movie App

A premium, interactive web application built with React and Vite that allows users to search for movies, discover popular titles, and save their favorites. The application communicates with the TMDB (The Movie Database) API to fetch real-time movie data.

## ✨ Features

- **Movie Search**: Instantly search for any movie using the TMDB API.
- **Popular Movies**: Discovers trending and popular movies directly on the home page.
- **Favorites System**: Save and remove movies to your personalized Favorites list with a single click. Uses React Context and local storage for persistence.
- **Responsive Layout**: Seamlessly adapts to mobile, tablet, and desktop viewports.

## 🎨 UI/UX & HCI Principles Applied

This application underwent a complete aesthetic overhaul based on core Human-Computer Interaction (HCI) principles:
- **Aesthetic-Usability Effect**: Implemented a modern, premium dark theme using a cohesive custom property token system (`index.css`) and Google's Inter font.
- **Fitts's Law**: Enlarged touch targets across the app, specifically the integrated search bar and navigation links.
- **Feedback & Visibility**: Added interactive hover states, active route indication on the Navbar, and staggered card entry animations to keep the user informed.
- **Progressive Disclosure**: Movie cards reveal additional interactions (like the favorite button and gradients) only when hovered, keeping the default view clean.
- **Alignment & Gestalt Principles**: The glassmorphic Navbar spans edge-to-edge while perfectly aligning its inner links with the main application content grid.

## 🛠️ Tech Stack

- **Frontend**: React 19, Vite, React Router DOM
- **Styling**: Vanilla CSS with modern standard features (Flexbox, CSS Grid, custom properties)
- **State Management**: React Context API & Hooks (`useState`, `useEffect`)
- **API**: TMDB REST API
- **Deployment**: Vercel

## 🚀 Getting Started

### Prerequisites
- Node.js installed on your machine
- A TMDB API Key

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Dunkrick/React_MovieDB.git
   cd React_MovieDB/frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure Environment Variables:
   Create a `.env` file in the `frontend` directory and add your TMDB API Key:
   ```env
   VITE_API_KEY=your_api_key_here
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:5173/`

## 📦 Deployment

This app is optimized for deployment on Vercel:
1. Import your GitHub repository to Vercel.
2. Set the **Root Directory** to `frontend`.
3. Add `VITE_API_KEY` to the Environment Variables settings.
4. Click Deploy!
