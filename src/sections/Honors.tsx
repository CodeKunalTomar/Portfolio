import { Reveal } from '../components/Section'

const HONORS = [
  {
    metric: 'PETRA 2026',
    label: 'Co-author, accepted paper',
    detail: 'VR-based behavioural adaptation study, with the ACS Lab, IIT Mandi',
  },
  {
    metric: 'top 1%',
    label: 'NPTEL Elite + Gold, score 93%',
    detail: 'Mobile Virtual Reality and Artificial Intelligence, IIT Mandi',
  },
  {
    metric: 'top 4%',
    label: 'Amazon ML Challenge 2025',
    detail: 'Rank 3,270 of 82,790 teams, led 3-member team "Hidden Layers"',
  },
  {
    metric: 'rank 19',
    label: 'CodeKaze 2023, Round 2 (top 0.5%)',
    detail: 'National competitive programming contest by Coding Ninjas',
  },
]

export function Honors() {
  return (
    <div className="grid gap-5 sm:grid-cols-2">
      {HONORS.map((h, i) => (
        <Reveal key={h.metric} delay={i * 0.07}>
          <div className="h-full rounded-xl border border-edge bg-panel p-6 transition-colors hover:border-violet/50">
            <p className="bg-gradient-to-r from-cyan to-violet bg-clip-text font-display text-3xl font-bold text-transparent">
              {h.metric}
            </p>
            <p className="mt-2 text-sm font-medium text-snow">{h.label}</p>
            <p className="mt-1 text-xs leading-relaxed text-fog">{h.detail}</p>
          </div>
        </Reveal>
      ))}
    </div>
  )
}
