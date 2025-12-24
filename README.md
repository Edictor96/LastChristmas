# Last Christmas - A Romantic Web Experience 🎄❤️

A beautiful, multi-page romantic Christmas gift website built with React, Vite, and Tailwind CSS.

## ✨ Features

- **🎵 Persistent Music Radio Player** - Floating music player that shuffles and plays songs across all pages
- **🏠 Home Page** - Clean navigation hub with romantic design
- **🎬 Theater Page** - Video gallery showcasing special moments
- **🧩 Jigsaw Puzzle Game** - Interactive 3×3 puzzle with smooth gameplay and special reveal
- **💌 Confession Page** - Heartfelt romantic messages with beautiful aesthetics

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Edictor96/LastChristmas.git
cd LastChristmas
```

2. Install dependencies:
```bash
npm install
```

3. Add media files to the `public` folder:
   - Place videos in `public/videos/`:
     - `VID20251122200919.mp4`
     - `VID_20251224161733.mp4`
   - Place the puzzle image in `public/images/`:
     - `couple.png` (the jigsaw puzzle image)
   - Place music files in `public/songs/`:
     - `be_my_baby.mp3` - Be My Baby — The Ronettes
     - `cant_take_my_eyes.mp3` - Can't Take My Eyes Off You — Frankie Valli
     - `autotuned_love.mp3` - AUTOTUNED LOVE — Raghav for Bharat
     - `rakhlo_tum.mp3` - Rakhlo Tum Chupaake — Arpit Bala and Adil
     - `high_on_you.mp3` - High On You — Jind Universe
     - `velocity.mp3` - Velocity — Nanku
     - `dms.mp3` - DMs — Nanku
     - `cant_help_falling.mp3` - Can't Help Falling In Love — Elvis Presley

4. Start the development server:
```bash
npm run dev
```

5. Open your browser and navigate to `http://localhost:3000`

## 🏗️ Building for Production

Build the project:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## 📦 Deployment to Vercel

This project is configured for easy deployment to Vercel:

1. Install Vercel CLI (optional):
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

Or simply:
- Push to GitHub
- Import the repository in Vercel dashboard
- Vercel will automatically detect Vite and deploy

The `vercel.json` configuration ensures proper routing for the React SPA.

## 📁 Project Structure

```
LastChristmas/
├── public/
│   ├── images/
│   │   └── couple.png          # Jigsaw puzzle image
│   ├── videos/
│   │   ├── VID20251122200919.mp4
│   │   └── VID_20251224161733.mp4
│   └── songs/
│       └── (8 MP3 files)
├── src/
│   ├── components/
│   │   └── RadioPlayer.jsx     # Floating music player
│   ├── pages/
│   │   ├── Home.jsx            # Home page
│   │   ├── Theater.jsx         # Video theater page
│   │   ├── Puzzle.jsx          # Jigsaw puzzle game
│   │   └── Confession.jsx      # Final confession page
│   ├── App.jsx                 # Main app with routing
│   ├── main.jsx                # Entry point
│   └── index.css               # Global styles
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── vercel.json                 # Vercel deployment config
```

## 🎨 Design Philosophy

- **Romantic Palette**: Warm pastels with red accents
- **Smooth Interactions**: Polished animations and transitions
- **Responsive Design**: Works beautifully on mobile and desktop
- **Human Touch**: Feels handcrafted and sincere, not AI-generated

## 🎮 How to Play the Puzzle

1. Navigate to the Puzzle page
2. Click on tiles adjacent to the empty space to move them
3. Solve the 3×3 puzzle to reveal a special video and message
4. Continue to the Confession page for the final reveal

## 💝 Technologies Used

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first styling
- **Vercel** - Deployment platform

## 📝 License

This is a personal romantic gift project.

## ❤️ Made with Love

Created as a heartfelt Christmas gift.