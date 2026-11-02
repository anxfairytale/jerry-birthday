import { useState } from 'react'
import { words, wordOfTheDay } from '../birthday-config'
function Card({ w }) {
  const [f, setF] = useState(false)
  return (
    <button className={`flip ${f ? 'f' : ''}`} onClick={() => setF(!f)} aria-pressed={f} aria-label={`${w.word}, tap to flip`}>
      <span className="face front"><b className="serif">{w.word}</b><i>/{w.say}/</i><small>tap to flip</small></span>
      <span className="face back"><span>{w.meaning}</span><em className="hand">“{w.ex}”</em></span>
    </button>)
}
export default function WordsmithClub() {
  const wod = words.find(w => w.word === wordOfTheDay) || words[0]
  return (
    <section id="words" className="section">
      <h2 className="serif head">FOR A GIRL WHO KNOWS THAT WORDS HAVE THEIR OWN KIND OF MAGIC.</h2>
      <div className="wod"><small>✍️ WORD OF THE DAY</small><h3 className="serif">{wod.word}</h3><i>/{wod.say}/</i><p>{wod.meaning}</p><p className="hand big">“{wod.ex}”</p></div>
      <div className="grid">{words.map(w => <Card key={w.word} w={w} />)}</div>
    </section>
  )
}
