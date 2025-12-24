# Media Files Setup Instructions

This file contains instructions for adding the required media files to complete the romantic Christmas website.

## Required Files

### 📸 Images (public/images/)
- **couple.png** - The main puzzle image
  - Rename `cf1f2183-4b53-40fb-9e1d-741d2fe992f2.png` to `couple.png`
  - Place it in the `public/images/` folder
  - This image will be used for the 3×3 jigsaw puzzle

### 🎬 Videos (public/videos/)
1. **VID20251122200919.mp4** - First video for theater page
2. **VID_20251224161733.mp4** - Knees video (shown after puzzle completion)

Place both videos in the `public/videos/` folder.

### 🎵 Music (public/songs/)
Add the following MP3 files to the `public/songs/` folder:

1. **be_my_baby.mp3** - Be My Baby by The Ronettes
2. **cant_take_my_eyes.mp3** - Can't Take My Eyes Off You by Frankie Valli
3. **autotuned_love.mp3** - AUTOTUNED LOVE by Raghav for Bharat
4. **rakhlo_tum.mp3** - Rakhlo Tum Chupaake by Arpit Bala and Adil
5. **high_on_you.mp3** - High On You by Jind Universe
6. **velocity.mp3** - Velocity by Nanku
7. **dms.mp3** - DMs by Nanku
8. **cant_help_falling.mp3** - Can't Help Falling In Love by Elvis Presley

## Quick Checklist

- [ ] Rename and add couple.png to public/images/
- [ ] Add VID20251122200919.mp4 to public/videos/
- [ ] Add VID_20251224161733.mp4 to public/videos/
- [ ] Add all 8 MP3 files to public/songs/

## After Adding Files

1. Run `npm run dev` to test locally
2. Run `npm run build` to build for production
3. Deploy to Vercel

## Notes

- The app will work without these files (showing placeholders)
- But for the full romantic experience, all files should be added
- File names must match exactly as listed above
- The music player will shuffle the songs automatically
