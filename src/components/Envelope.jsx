import { useState } from 'react'
import { name, letter, fromName } from '../birthday-config'
export default function Envelope({ onEnter }) {
  const [open, setOpen] = useState(false)
  return (
    <section className="envelope-screen">
      <p className="floaty f1">🦋</p><p className="floaty f2">✨</p><p className="floaty f3">💜</p><p className="floaty f4">🎀</p>
      {!open && <h1 className="serif">Psst... {name}, you’ve got a little surprise!</h1>}
      <button className={`envelope ${open ? 'open' : ''}`} onClick={() => setOpen(true)} aria-label="Open your birthday letter" disabled={open}>
        <span className="flap" /><span className="seal">🎀</span>
        <span className="letter"><span className="hand">{letter}<br /><b>{fromName} 💜</b></span></span>
        <span className="pocket" />
      </button>
      {!open ? <p className="hand big">Click to open your birthday letter.</p>
        : <button className="btn" onClick={onEnter}>Let’s celebrate YOU! ♡</button>}
    </section>
  )
}
