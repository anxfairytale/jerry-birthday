// ============================================================
// 🎀 EVERYTHING YOU NEED TO CUSTOMISE LIVES IN THIS FILE 🎀
// Photos: drop files into public/images/... and reference them as "/images/..."
// Missing photos show a cute placeholder, so nothing breaks.
// ============================================================

// 1-3. BASICS
export const name = 'Jerry'
export const age = 21                    // TODO: her new age
export const birthdayDate = 'November 4'     // TODO: label on the cover
export const fromName = 'Satti Anafss'    // TODO: your name (signs the letter)

// 4. PERSONALISED LETTER (shown when the envelope opens)
export const letter = `Dear Jerry, 💜

Happy Birthday to my first best friend!

I don't think I tell you enough how much I love you and how grateful I am to have you in my life. You've been my person for as long as I can remember, someone I've always been able to count on, run to, laugh with and share absolutely anything and everything with.

There's something so comforting about knowing I have you. You're one of those people I never have to think twice about being myself around. I can tell you the most random things, share my happiest moments, rant about the silliest stuff and know that you'll always be there. And honestly, I wouldn't trade that for anything.

I adore you more than words can explain, and I genuinely love being around you. Even the most ordinary moments become special when I'm spending them with you. I'm so lucky that I get to have you not just as my cousin, but as my first best friend, too.

I hope this year brings you all the happiness, love, adventures and beautiful little moments you deserve. I hope you achieve everything you've ever dreamed of, never stop being the girl you are, and always remember just how loved you are.

No matter how much time passes or how life changes, you'll always have me. For the big things, the little things, the random 2 AM conversations and everything in between.

I love you SO much, Jatti. More than you'll probably ever realise. Here's to a lifetime of memories, laughter, endless conversations and being each other's favourite people.

Happy Birthday, my girl. Always and forever. 🎀💜
,`

// 5. MAIN BIRTHDAY MESSAGE (cover subtitle)
export const coverSubtitle = 'Another year of being iconic, effortlessly pretty and unapologetically YOU.'
export const coverPhoto = '/images/jerry/cover.jpeg'   // TODO: your best editorial photo of her

// 6. PHOTOS — type: 'jerry' (solo) or 'us' (both of you)
export const photos = [
  { src: '/images/jerry/photo1.jpeg', caption: 'Main character energy 💜', note: 'TODO: note', type: 'jerry' },
  { src: '/images/jerry/photo2.jpeg', caption: 'Prettiest', note: 'TODO: note', type: 'jerry' },
  { src: '/images/memories/us1.jpeg', caption: 'Partners in crime', note: 'TODO: note', type: 'us' },
  { src: '/images/memories/us2.jpeg', caption: 'The day we couldn’t stop laughing', note: 'TODO: note', type: 'us' },
  { src: '/images/jerry/photo3.jpeg', caption: 'Fav Place', note: 'TODO: note', type: 'jerry' },
  { src: '/images/memories/us3.jpeg', caption: 'Million dollar smileee', note: 'TODO: note', type: 'us' },
]

// 10. INSIDE JOKES & MEMORIES (sticky notes in the scrapbook)
export const memories = [
  'Always my Fav jattis😂',
  'the corest memory will be the silent game we played last year!',
]

// 7. FASHION — cat: Beach | Casual | Party | Sunglasses | Bandanas | Handbags | Shoes | Accessories


// 8. BEAUTY
export const beauty = [
  { name: 'Lip Gloss', emoji: '💋', img: '/images/makeup/gloss.jpg', msg: 'Your smile is the only gloss you need.' },
  { name: 'Lipstick', emoji: '💄', img: '/images/makeup/lipstick.jpg', msg: 'Bold, like you. Never apologising.' },
  { name: 'Blush', emoji: '🌸', img: '/images/makeup/blush.jpg', msg: 'You glow even before the blush.' },
  { name: 'Mascara', emoji: '👁️', img: '/images/makeup/mascara.jpg', msg: 'Those eyes tell every story.' },
  { name: 'Perfume', emoji: '🧴', img: '/images/makeup/perfume.jpg', msg: 'You leave a memorable trail, always.' },
  { name: 'Skincare', emoji: '🧖‍♀️', img: '/images/makeup/skincare.jpg', msg: 'Glowing skin, glowing soul.' },
  { name: 'Nail Polish', emoji: '💅', img: '/images/makeup/nails.jpg', msg: 'Even your fingertips have main character energy.' },
  { name: 'Essentials', emoji: '🪞', img: '/images/makeup/essentials.jpg', msg: 'The real essential is YOU.' },
]

// 9. VOCABULARY
export const words = [
  { word: 'Ethereal', say: 'ih-THEER-ee-ul', meaning: 'Extremely delicate and light, almost not of this world.', ex: 'Jerry looked ethereal in the golden light.' },
  { word: 'Effervescent', say: 'ef-er-VES-ent', meaning: 'Bubbling, vivacious and enthusiastic.', ex: 'Her effervescent laugh filled the room.' },
  { word: 'Serendipity', say: 'ser-en-DIP-ih-tee', meaning: 'Finding something lovely by happy accident.', ex: 'Meeting you was pure serendipity.' },
  { word: 'Halcyon', say: 'HAL-see-un', meaning: 'Calm, happy and golden, like days gone by.', ex: 'We remember those halcyon summer days.' },
  { word: 'Luminous', say: 'LOO-min-us', meaning: 'Full of light; radiant.', ex: 'A luminous year awaits you.' },
  { word: 'Sonder', say: 'SON-der', meaning: 'Realising everyone has a life as vivid as your own.', ex: 'Sonder hit as we watched the crowd.' },
]
export const wordOfTheDay = 'Effervescent' // must match a word above

// 11. PLAYLIST (no autoplay). url: local file like "/music/song1.mp3" or direct .mp3 link
export const playlist = [
  { title: 'Happy Birthday', url: '/music/hbd.mp3' },
]

// 12-13. FINAL & SECRET MESSAGES
export const wishMessage = 'May every wish you made come true. 🎂'
export const finalMessage = 'Here’s to another year of beautiful memories, spontaneous adventures, endless laughter and becoming everything you’ve ever dreamed of. Keep being YOU, Jerry. The world is lucky to have you. 💜'
export const secretMessage = 'I love you so much jatti! My first and forever best friend🤫💜'

// 14. COLOURS
export const theme = {
  lavender: '#E5D0FF', lilac: '#F6EEFF', purple: '#C8A2F0', medium: '#9870C9', plum: '#56366F', pink: '#FFD6EC',
  customCursor: true,
}
