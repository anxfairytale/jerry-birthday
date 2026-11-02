import { useRef, useState, useEffect } from 'react'
import { Play, Pause, SkipForward, Volume2 } from 'lucide-react'
import { playlist } from '../birthday-config'
export default function MusicPlayer() {
  const a = useRef(null)
  const [i, setI] = useState(0), [playing, setP] = useState(false), [prog, setProg] = useState(0), [vol, setVol] = useState(0.7)
  const t = playlist[i]
  useEffect(() => { if (a.current) a.current.volume = vol }, [vol])
  useEffect(() => { if (playing && a.current && t.url) a.current.play().catch(() => setP(false)) }, [i])
  const toggle = () => {
    if (!t.url) return alert('Add a song link in birthday-config.js (playlist) 🎵')
    if (playing) { a.current.pause(); setP(false) } else a.current.play().then(() => setP(true)).catch(() => {})
  }
  return (
    <div className="player">
      <audio ref={a} src={t.url || undefined} onTimeUpdate={e => setProg(e.target.currentTime / (e.target.duration || 1))} onEnded={() => setI((i + 1) % playlist.length)} />
      <button onClick={toggle} aria-label={playing ? 'Pause' : 'Play'}>{playing ? <Pause /> : <Play />}</button>
      <div className="grow"><b>{t.title}</b>
        <input type="range" min="0" max="1" step="0.001" value={prog} aria-label="Progress" onChange={e => { const d = a.current.duration; if (d) a.current.currentTime = e.target.value * d }} /></div>
      <button onClick={() => setI((i + 1) % playlist.length)} aria-label="Next song"><SkipForward /></button>
      <Volume2 size={18} /><input className="vol" type="range" min="0" max="1" step="0.05" value={vol} onChange={e => setVol(+e.target.value)} aria-label="Volume" />
    </div>)
}
