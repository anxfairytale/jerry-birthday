import { useState } from 'react'
// Image with graceful fallback so missing files never look broken
export default function Pic({ src, emoji = '🦋', alt = '', className = '' }) {
  const [bad, setBad] = useState(false)
  if (bad || !src) return <div className={`pic-fallback ${className}`} role="img" aria-label={alt}><span>{emoji}</span></div>
  return <img className={className} src={src} alt={alt} loading="lazy" onError={() => setBad(true)} />
}
