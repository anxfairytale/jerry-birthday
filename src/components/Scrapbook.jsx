import { useState } from 'react'
import { X } from 'lucide-react'
import Pic from './Pic'
import { photos, memories } from '../birthday-config'
export default function Scrapbook() {
  const [sel, setSel] = useState(null)
  return (
    <section id="archives" className="section scrap">
      <h2 className="serif head">A LITTLE COLLECTION OF MOMENTS WITH OUR FAVOURITE GIRL.</h2>
      <div className="polaroids">
        {photos.map((p, i) => (
          <button key={i} className="polaroid" style={{ '--r': ((i * 7) % 11) - 5 + 'deg' }} onClick={() => setSel(p)}>
            <span className="tape" /><Pic src={p.src} emoji={p.type === 'us' ? '👭' : '💜'} alt={p.caption} /><span className="hand">{p.caption}</span>
          </button>))}
      </div>
      <div className="notes">{memories.map((m, i) => <p key={i} className="sticky hand" style={{ '--r': (i % 2 ? 3 : -3) + 'deg' }}>{m}</p>)}</div>
      {sel && <div className="modal" onClick={() => setSel(null)} role="dialog" aria-modal="true">
        <div className="modal-box" onClick={e => e.stopPropagation()}>
          <button className="x" onClick={() => setSel(null)} aria-label="Close"><X /></button>
          <div className="modal-pic"><Pic src={sel.src} emoji="📸" alt={sel.caption} /></div>
          <h3 className="hand big">{sel.caption}</h3><p>{sel.note}</p>
        </div></div>}
    </section>
  )
}
