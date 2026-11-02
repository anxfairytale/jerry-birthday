
export function confetti(n = 120) {
  const cols = ['#C8A2F0', '#E5D0FF', '#9870C9', '#FFD6EC', '#fff']

  for (let k = 0; k < n; k++) {
    const s = document.createElement('i')
    s.className = 'confetti'

    s.style.cssText = `
      left: 50%;
      top: 50%;
      background: ${cols[k % 5]};
      --x: ${(Math.random() - 0.5) * 120}vw;
      --y: ${(Math.random() - 0.8) * 100}vh;
      --d: ${1.5 + Math.random() * 1.5}s;
    `

    document.body.appendChild(s)
    setTimeout(() => s.remove(), 3200)
  }
}
