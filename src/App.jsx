import { useState, useEffect } from 'react'
import { ArrowUp, Gift, X } from 'lucide-react'
import Envelope from './components/Envelope'
import BirthdayCover from './components/BirthdayCover'
import BeautyRoom from './components/BeautyRoom'
import WordsmithClub from './components/WordsmithClub'
import Scrapbook from './components/Scrapbook'
import BirthdayFinale from './components/BirthdayFinale'
import { confetti } from './utils/confetti'
import { secretMessage, theme } from './birthday-config'
export default function App() {
  const [entered, setEntered] = useState(false), [secret, setSecret] = useState(false), [top, setTop] = useState(false), [pos, setPos] = useState(null)
  useEffect(() => {
    const r = document.documentElement.style
    r.setProperty('--lav', theme.lavender); r.setProperty('--lilac', theme.lilac); r.setProperty('--pur', theme.purple); r.setProperty('--med', theme.medium); r.setProperty('--plum', theme.plum); r.setProperty('--pink', theme.pink)
    const sc = () => setTop(scrollY > 600), mv = e => theme.customCursor && matchMedia('(pointer:fine)').matches && setPos([e.clientX, e.clientY])
    addEventListener('scroll', sc); addEventListener('mousemove', mv)
    return () => { removeEventListener('scroll', sc); removeEventListener('mousemove', mv) }
  }, [])
  if (!entered) return <Envelope onEnter={() => { setEntered(true); scrollTo(0, 0) }} />
  return (<>
    <nav className="nav">{[['top', 'Cover'], ['beauty', 'Beauty'], ['words', 'Words'], ['archives', 'Archives'], ['finale', 'Finale']].map(([h, l]) => <a key={h} href={'#' + h}>{l}</a>)}</nav>
    <main><BirthdayCover /><BeautyRoom /><WordsmithClub /><Scrapbook /><BirthdayFinale /></main>
    <button className="fab left" onClick={() => { setSecret(true); confetti(60) }} aria-label="Secret surprise"><Gift /></button>
    {top && <button className="fab" onClick={() => scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Back to top"><ArrowUp /></button>}
    {secret && <div className="modal" onClick={() => setSecret(false)} role="dialog" aria-modal="true"><div className="modal-box" onClick={e => e.stopPropagation()}>
      <button className="x" onClick={() => setSecret(false)} aria-label="Close"><X /></button><h3 className="serif">Psst… a secret 🤫</h3><p className="hand big">{secretMessage}</p></div></div>}
    {pos && <span className="cursor" style={{ left: pos[0], top: pos[1] }}>✨</span>}
  </>)
}
