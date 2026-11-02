import { useState } from 'react'
import MusicPlayer from './MusicPlayer'
import { wishMessage, finalMessage } from '../birthday-config'
import { confetti } from '../utils/confetti'
export default function BirthdayFinale() {
  const [lit, setLit] = useState([true, true, true]), [wish, setWish] = useState(false)
  const out = lit.every(l => !l)
  const blow = i => { const n = lit.map((l, j) => (j === i ? false : l)); setLit(n); if (n.every(l => !l)) { confetti(); setWish(true) } }
  return (
    <section id="finale" className="section finale">
      <h2 className="serif head">ONE MORE YEAR OF BEING ABSOLUTELY ICONIC!</h2>
      <div className="cake">
        <div className="candles">{lit.map((l, i) => (
          <button key={i} className="candle" onClick={() => blow(i)} disabled={!l} aria-label={`Blow out candle ${i + 1}`}>{l && <span className="flame" />}</button>))}</div>
        <div className="tier t1" /><div className="tier t2" /><div className="tier t3" />
      </div>
      {!out && (
  <button
    className="btn"
    onClick={() => {
      setLit([false, false, false])
      setWish(true)
      confetti()
    }}
  >
    Make a wish, Jerry! 🎂
  </button>
)}
      <p className="hand big">{out ? '' : 'Click the candles to blow them out 🕯️'}</p>
      {wish && <p className="wish serif">{wishMessage}</p>}
      <p className="final">{finalMessage}</p>
      <MusicPlayer />
    </section>)
}
