import { useEffect, useState } from 'react'

const LINKS = [
  { id: 'research', label: 'research', index: '01' },
  { id: 'projects', label: 'projects', index: '02' },
  { id: 'skills', label: 'skills', index: '03' },
  { id: 'honors', label: 'honors', index: '04' },
  { id: 'contact', label: 'contact', index: '05' },
]

export function Nav() {
  const [active, setActive] = useState('')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })

    const observer = new IntersectionObserver(
      entries => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(e.target.id)
        }
      },
      { rootMargin: '-35% 0px -55% 0px' },
    )
    LINKS.forEach(l => {
      const el = document.getElementById(l.id)
      if (el) observer.observe(el)
    })
    return () => {
      window.removeEventListener('scroll', onScroll)
      observer.disconnect()
    }
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'border-b border-edge bg-ink/80 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-content items-center justify-between px-5 py-4">
        <a href="#top" className="font-mono text-sm text-snow">
          <span className="text-[#3FB950]">~$</span> <span className="text-cyan">kunal</span>
        </a>
        <div className="hidden items-center gap-6 md:flex">
          {LINKS.map(l => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className={`group font-mono text-xs transition-colors ${
                active === l.id ? 'text-cyan' : 'text-fog hover:text-snow'
              }`}
            >
              <span className="mr-1 text-[10px] text-edge group-hover:text-violet">{l.index}</span>
              {l.label}
            </a>
          ))}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-cyan/40 px-3 py-1.5 font-mono text-xs text-cyan transition-all hover:border-cyan hover:bg-cyan/10"
          >
            resume
          </a>
        </div>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="rounded-md border border-cyan/40 px-3 py-1.5 font-mono text-xs text-cyan md:hidden"
        >
          resume
        </a>
      </nav>
      <div className="flex gap-5 overflow-x-auto border-t border-edge/60 px-5 py-2.5 md:hidden">
        {LINKS.map(l => (
          <a
            key={l.id}
            href={`#${l.id}`}
            className={`shrink-0 font-mono text-xs transition-colors ${
              active === l.id ? 'text-cyan' : 'text-fog'
            }`}
          >
            {l.label}
          </a>
        ))}
      </div>
    </header>
  )
}
