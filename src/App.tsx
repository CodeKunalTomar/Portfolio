import { motion } from 'framer-motion'
import { Nav } from './components/Nav'
import { SwarmCanvas } from './components/SwarmCanvas'
import { Terminal } from './components/Terminal'
import { Section } from './components/Section'
import { Research } from './sections/Research'
import { Projects } from './sections/Projects'
import { Skills } from './sections/Skills'
import { Honors } from './sections/Honors'
import { Contact } from './sections/Contact'

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] as const },
})

function Hero() {
  return (
    <div id="top" className="relative overflow-hidden">
      <SwarmCanvas />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-ink" />
      <div className="relative mx-auto grid min-h-screen max-w-content items-center gap-12 px-5 pb-16 pt-28 lg:grid-cols-[1.05fr_1fr]">
        <div>
          <motion.p {...fade(0.05)} className="font-mono text-sm text-cyan">
            research engineer
          </motion.p>
          <motion.h1
            {...fade(0.15)}
            className="mt-4 font-display text-5xl font-bold leading-[1.05] tracking-tight text-snow sm:text-6xl lg:text-7xl"
          >
            Kunal
            <br />
            Tomar
            <span className="text-cyan">.</span>
          </motion.h1>
          <motion.p {...fade(0.25)} className="mt-6 max-w-md text-base leading-relaxed text-fog">
            I build machines that <span className="text-snow">see</span>,{' '}
            <span className="text-snow">move</span>, and <span className="text-snow">learn</span> -
            VR simulators for cognitive research, autonomy for UAVs, and ML pipelines that are
            evaluated honestly.
          </motion.p>
          <motion.div {...fade(0.35)} className="mt-8 flex flex-wrap gap-4">
            <a
              href="#research"
              className="rounded-lg bg-gradient-to-r from-cyan to-violet px-5 py-2.5 font-mono text-sm font-semibold text-ink transition-transform hover:scale-[1.03] active:scale-[0.98]"
            >
              see the work
            </a>
            <a
              href="https://github.com/CodeKunalTomar"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-edge px-5 py-2.5 font-mono text-sm text-snow transition-colors hover:border-cyan/50 hover:text-cyan"
            >
              github
            </a>
          </motion.div>
        </div>
        <motion.div {...fade(0.45)}>
          <Terminal />
        </motion.div>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-ink">
      <Nav />
      <main>
        <Hero />
        <Section id="research" index="01" title="Research & Experience">
          <Research />
        </Section>
        <Section id="projects" index="02" title="Projects">
          <Projects />
        </Section>
        <Section id="skills" index="03" title="Skills">
          <Skills />
        </Section>
        <Section id="honors" index="04" title="Honors">
          <Honors />
        </Section>
        <Section id="contact" index="05" title="Contact">
          <Contact />
        </Section>
      </main>
      <footer className="border-t border-edge py-8 text-center">
        <p className="font-mono text-xs text-fog">
          designed & hand-coded by Kunal Tomar · react + tailwind + framer motion · no template
        </p>
      </footer>
    </div>
  )
}
