import { useEffect, useState } from 'react'

type Line =
  | { kind: 'cmd'; text: string }
  | { kind: 'out'; text: string; accent?: boolean }
  | { kind: 'dirs'; text: string }

const SCRIPT: Line[] = [
  { kind: 'cmd', text: 'whoami' },
  { kind: 'out', text: 'Kunal Tomar · machines that see, move, and learn', accent: true },
  { kind: 'cmd', text: 'ls ~/research' },
  { kind: 'dirs', text: 'vr-cognitive-training/   uav-autonomy/   nonstationary-bandits/' },
  { kind: 'cmd', text: 'cat focus.txt' },
  { kind: 'out', text: 'unity vr simulators · px4 + ros2 autonomy · honest ml evaluation' },
]

const TYPE_MS = 55

export function Terminal() {
  const [progress, setProgress] = useState({ line: 0, char: 0 })
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setProgress({ line: SCRIPT.length, char: 0 })
      setDone(true)
      return
    }
    let line = 0
    let char = 0
    let timer: ReturnType<typeof setTimeout>

    function tick() {
      if (line >= SCRIPT.length) {
        setDone(true)
        return
      }
      const current = SCRIPT[line]
      if (current.kind === 'cmd') {
        if (char < current.text.length) {
          char++
          setProgress({ line, char })
          timer = setTimeout(tick, TYPE_MS)
        } else {
          line++
          char = 0
          setProgress({ line, char })
          timer = setTimeout(tick, 260)
        }
      } else {
        // output lines appear whole after a beat
        line++
        char = 0
        setProgress({ line, char })
        timer = setTimeout(tick, 420)
      }
    }

    timer = setTimeout(tick, 600)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="w-full rounded-xl border border-edge bg-ink/90 shadow-[0_0_60px_rgba(0,217,255,0.07)] backdrop-blur">
      <div className="relative border-t-2 border-transparent" style={{ borderImage: 'linear-gradient(90deg, #00D9FF, #7C3AED) 1' }} />
      <div className="flex items-center gap-2 border-b border-edge px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#FF5F56]/80" />
        <span className="h-3 w-3 rounded-full bg-[#FFBD2E]/80" />
        <span className="h-3 w-3 rounded-full bg-[#27C93F]/80" />
        <span className="ml-3 font-mono text-xs text-fog">kunal@portfolio : ~</span>
      </div>
      <div className="min-h-[15.5rem] space-y-2 px-5 py-5 font-mono text-[13px] leading-6 sm:text-sm">
        {SCRIPT.map((l, i) => {
          if (i > progress.line) return null
          const isTyping = i === progress.line && l.kind === 'cmd'
          const text = isTyping ? l.text.slice(0, progress.char) : l.text
          if (l.kind === 'cmd') {
            return (
              <p key={i}>
                <span className="text-[#3FB950]">~ $ </span>
                <span className="text-snow">{text}</span>
                {isTyping && <span className="cursor-blink text-cyan">▍</span>}
              </p>
            )
          }
          if (i >= progress.line && !done) return null
          if (l.kind === 'dirs') {
            return (
              <p key={i} className="whitespace-pre-wrap text-[#58A6FF]">{text}</p>
            )
          }
          return (
            <p key={i} className={l.accent ? '' : 'text-fog'}>
              {l.accent ? (
                <>
                  <span className="text-cyan">Kunal Tomar</span>
                  <span className="text-fog">{text.replace('Kunal Tomar', '')}</span>
                </>
              ) : (
                text
              )}
            </p>
          )
        })}
        {done && (
          <p>
            <span className="text-[#3FB950]">~ $ </span>
            <span className="cursor-blink text-cyan">▍</span>
          </p>
        )}
      </div>
    </div>
  )
}
