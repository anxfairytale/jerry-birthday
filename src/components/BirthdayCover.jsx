import { ChevronDown } from 'lucide-react'
import Pic from './Pic'
import { name, age, birthdayDate, coverSubtitle, coverPhoto } from '../birthday-config'
export default function BirthdayCover() {
  return (
    <section id="top" className="cover">
      <div className="cover-text">
        <span className="badge">TODAY’S MAIN CHARACTER</span>
        <h1 className="serif mega">HAPPY<br />BIRTHDAY,<br /><em>{name.toUpperCase()}!</em></h1>
        <p className="lead">{coverSubtitle}</p>
        <p className="date">{birthdayDate} · TURNING {age} ✨</p>
      </div>
      <div className="cover-photo">
        <Pic src={coverPhoto} emoji="👑" alt={name} />
        <span className="sticker s1">🕶️</span><span className="sticker s2">🦋</span><span className="sticker s3">🎀</span>
      </div>
      <a href="#closet" className="scroll-ind" aria-label="Scroll down"><ChevronDown /></a>
    </section>
  )
}
