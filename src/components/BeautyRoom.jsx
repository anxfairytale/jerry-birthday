import { useState } from 'react'
import { beauty } from '../birthday-config'

// Remote photos (Unsplash). If one fails to load, we try the image set in
// birthday-config.js, then fall back to a lavender gradient with the emoji.
// Matching is by product name so your config order doesn't matter.
const u = (id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=600&q=70`
const PHOTOS = {
  'Lip Gloss': u('photo-1586495777744-4413f21062fa'),
  Lipstick: u('photo-1586495777744-4413f21062fa'),
  Blush: u('photo-1596462502278-27bfdc403348'),
  Mascara: u('photo-1631214524020-7e18db9a8f92'),
  Perfume: u('photo-1541643600914-78b084683601'),
  Skincare: u('photo-1556228720-195a672e8a03'),
  'Nail Polish': u('sp6wzdYJ7QQ'),
  Essentials: u('photo-1522335789203-aabd1fc54bc9'),
}

// Pinterest-style mixed proportions, cycled across the cards
const RATIOS = ['3 / 4', '1 / 1', '4 / 5', '2 / 3', '1 / 1', '3 / 4', '4 / 5']

const frame = {
  position: 'relative',
  width: '100%',
  borderRadius: 22,
  overflow: 'hidden',
  border: '4px solid #fff',
  boxShadow: '0 10px 26px rgba(86,54,111,.22)',
  background: 'linear-gradient(135deg, #F6EEFF, #E5D0FF 60%, #FFD6EC)',
}

function Photo({ item, ratio, active }) {
  const sources = [PHOTOS[item.name], item.img].filter(Boolean)
  const [step, setStep] = useState(0)
  const src = sources[step]

  return (
    <span style={{ ...frame, aspectRatio: ratio, display: 'block', borderColor: active ? '#9870C9' : '#fff' }}>
      {src ? (
        <img
          src={src}
          alt={item.name}
          loading="lazy"
          referrerPolicy="no-referrer"
          onError={() => setStep((s) => s + 1)}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
            filter: 'saturate(.9) hue-rotate(-8deg)',
            transition: 'transform .6s ease',
            transform: active ? 'scale(1.08)' : 'scale(1)',
          }}
        />
      ) : (
        <span role="img" aria-label={item.name} style={{ display: 'grid', placeItems: 'center', width: '100%', height: '100%', fontSize: '3.2rem' }}>
          {item.emoji}
        </span>
      )}
      {/* soft lavender wash for a cohesive luxury look */}
      <span
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, rgba(200,162,240,.10), rgba(86,54,111,.38))',
          pointerEvents: 'none',
        }}
      />
      <span
        style={{
          position: 'absolute',
          left: 10,
          bottom: 10,
          background: 'rgba(255,255,255,.88)',
          color: '#56366F',
          padding: '4px 12px',
          borderRadius: 99,
          fontSize: '.8rem',
          fontWeight: 600,
        }}
      >
        {item.emoji} {item.name}
      </span>
    </span>
  )
}

export default function BeautyRoom() {
  const [sel, setSel] = useState(null)

  return (
    <section id="beauty" className="section vanity">
      <h2 className="serif head">BEAUTY IS AN ART AND JERRY IS THE MASTERPIECE.</h2>

      <div
        className="mirror"
        style={{ boxShadow: '0 0 0 6px #fff, 0 18px 40px rgba(152,112,201,.35)' }}
      >
        <p className="hand big" aria-live="polite">
          {sel !== null ? beauty[sel].msg : 'Tap a product ✨'}
        </p>
      </div>

      <div
        className="shelf"
        style={{ display: 'block', columnWidth: 180, columnGap: 16, paddingBottom: 6 }}
      >
        {beauty.map((b, i) => (
          <button
            key={b.name}
            className={`prod ${sel === i ? 'on' : ''}`}
            onClick={() => setSel(i)}
            aria-pressed={sel === i}
            aria-label={`${b.name}: tap for a message`}
            style={{
              display: 'block',
              width: '100%',
              breakInside: 'avoid',
              marginBottom: 16,
              padding: 0,
            }}
          >
            {/* inline overrides beat the old circular .prod>:first-child rule */}
            <Photo item={b} ratio={RATIOS[i % RATIOS.length]} active={sel === i} />
          </button>
        ))}
      </div>
    </section>
  )
}