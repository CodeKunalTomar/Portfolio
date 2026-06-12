import { Reveal } from '../components/Section'

const LINKS = [
  { label: 'github', href: 'https://github.com/CodeKunalTomar' },
  { label: 'linkedin', href: 'https://www.linkedin.com/in/kunal-tomar1' },
  { label: 'resume', href: '/resume.pdf' },
]

export function Contact() {
  return (
    <Reveal>
      <div className="rounded-2xl border border-edge bg-panel p-8 text-center sm:p-14">
        <p className="font-mono text-xs uppercase tracking-widest text-violet">get in touch</p>
        <h3 className="mx-auto mt-4 max-w-xl font-display text-3xl font-bold tracking-tight text-snow sm:text-4xl">
          Building something at the edge of
          <span className="bg-gradient-to-r from-cyan to-violet bg-clip-text text-transparent"> ML, robots, or VR</span>?
        </h3>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-fog">
          I read everything that lands in my inbox. The fastest way to reach me is email; the most
          formal is the resume.
        </p>
        <a
          href="mailto:kunaltomarmu26@gmail.com"
          className="mt-8 inline-block rounded-lg bg-gradient-to-r from-cyan to-violet px-6 py-3 font-mono text-sm font-semibold text-ink transition-transform hover:scale-[1.03] active:scale-[0.98]"
        >
          kunaltomarmu26@gmail.com
        </a>
        <div className="mt-8 flex justify-center gap-6 font-mono text-xs">
          {LINKS.map(l => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              className="text-fog transition-colors hover:text-cyan"
            >
              {l.label} →
            </a>
          ))}
        </div>
      </div>
    </Reveal>
  )
}
