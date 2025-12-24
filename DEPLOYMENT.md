# Deployment Guide

## Quick Deployment to Vercel

### Option 1: Via Vercel Dashboard (Recommended)

1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click "New Project"
4. Import the `LastChristmas` repository
5. Vercel will auto-detect Vite configuration
6. Click "Deploy"
7. Done! Your site will be live at `https://your-project.vercel.app`

### Option 2: Via Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Deploy from project root
cd LastChristmas
vercel

# For production deployment
vercel --prod
```

## Adding Media Files After Deployment

### Via Vercel Dashboard:
1. Go to your project settings
2. Under "Environment Variables", you can configure paths if needed
3. For static files, redeploy after adding them to your GitHub repo

### Via Git (Recommended):
1. Add your media files locally:
   - Images to `public/images/`
   - Videos to `public/videos/`
   - Songs to `public/songs/`
2. Commit and push:
   ```bash
   git add public/
   git commit -m "Add media files"
   git push
   ```
3. Vercel will automatically redeploy

## Environment Configuration

No environment variables needed! All paths are relative and work out of the box.

## Troubleshooting

### Build Fails
- Ensure Node.js version is 16 or higher
- Run `npm install` to ensure dependencies are installed
- Check build logs in Vercel dashboard

### Videos Not Playing
- Ensure video files are in MP4 format
- Check file names match exactly: `VID20251122200919.mp4` and `VID_20251224161733.mp4`
- Verify files are in `public/videos/` folder

### Music Not Playing
- Ensure audio files are in MP3 format
- Check file names match exactly (see MEDIA_FILES.md)
- Verify files are in `public/songs/` folder

### Puzzle Not Showing Image
- Ensure `couple.png` is in `public/images/` folder
- The app uses `couple.svg` as fallback placeholder

## Testing Locally Before Deployment

```bash
# Install dependencies
npm install

# Run development server
npm run dev
# Open http://localhost:3000

# Build for production
npm run build

# Preview production build
npm run preview
# Open http://localhost:4173
```

## Custom Domain (Optional)

1. Go to your Vercel project settings
2. Click "Domains"
3. Add your custom domain
4. Update DNS records as instructed

## Performance

- Build time: ~1-2 seconds
- Bundle size: ~56 KB (gzipped)
- Fast page loads with Vite optimization
- Responsive on all devices

Enjoy your romantic website! 💝
