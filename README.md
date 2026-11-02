# 🎀 Jerry's Birthday Universe
## Run
```
npm install
npm run dev      # open the printed localhost link
```
## Customise (only one file!)
Edit `src/birthday-config.js`. Every `TODO` is yours to fill in: name, age, date, letter, captions, outfits, beauty messages, words, inside jokes, playlist, final and secret messages, colours.
## Add photos
Put files in `public/images/` (`jerry/`, `memories/`, `fashion/`, `makeup/`, `decorations/`) and point to them in the config, e.g. `/images/jerry/photo1.jpg`. Missing images show a lavender placeholder. Compress photos to ~200KB each (e.g. squoosh.app).
## Music
Put mp3s in `public/music/` and set `url: '/music/song1.mp3'` in `playlist`. Music never autoplays.
## Build & deploy
```
npm run build    # outputs dist/
```
Upload `dist/` to Netlify, Vercel or GitHub Pages (relative base is already set).
