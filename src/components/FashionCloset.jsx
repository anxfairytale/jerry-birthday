import { useState } from 'react'
import { X } from 'lucide-react'
import Pic from './Pic'
import { outfits } from '../birthday-config'
export default function FashionCloset() {
  const [sel, setSel] = useState(null)
  const [cat, setCat] = useState('All')
  const cats = ['All', ...new Set(outfits.map(o => o.cat))]
  const list = outfits.filter(o => cat === 'All' || o.cat === cat)
  return (
    <section id="closet" className="section">
      <h2 className="serif head">THE GIRL HAS A WARDROBE TO RUN THE WORLD.</h2>
      <div className="chips">{cats.map(c => <button key={c} className={`chip ${c === cat ? 'on' : ''}`} onClick={() => setCat(c)}>{c}</button>)}</div>
      <div className="masonry">
        {list.map((o, i) => (
          <button key={o.name} className="mcard" style={{ '--h': 200 + (i % 3) * 70 + 'px' }} onClick={() => setSel(o)}>
            <Pic src={o.img} emoji={o.emoji} alt={o.name} /><span className="cap">{o.name}</span>
          </button>))}
      </div>
      {sel && <div className="modal" onClick={() => setSel(null)} role="dialog" aria-modal="true">
        <div className="modal-box" onClick={e => e.stopPropagation()}>
          <button className="x" onClick={() => setSel(null)} aria-label="Close"><X /></button>
          <div className="modal-pic"><Pic src={sel.img} emoji={sel.emoji} alt={sel.name} /></div>
          <small>{sel.cat.toUpperCase()}</small><h3 className="serif">{sel.name}</h3><p>{sel.desc}</p><p className="hand big">{sel.compliment}</p>
        </div></div>}
    </section>
  )
}
