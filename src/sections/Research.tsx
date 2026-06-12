import { Reveal } from '../components/Section'

const ROLES = [
  {
    logo: '/logos/iit-mandi.png',
    logoAlt: 'IIT Mandi logo',
    org: 'Indian Institute of Technology Mandi',
    role: 'Research Intern · Applied Cognitive Science Lab',
    period: 'Jan - Apr 2026',
    points: [
      'Co-authored a paper accepted at PETRA 2026 from a 40-participant 2x2 mixed-factorial VR shooting study under the DRDO-LSRB "Adaptive Cognitive Training for Indian Defence" project.',
      'Co-developed and hardened a Unity 6 VR base-camp defence simulator (OpenXR, HTC Vive Pro): tactical enemy AI, runtime session selection, and research logging across all 80 data-collection sessions.',
      'Designed a leakage-controlled ML evaluation framework (per-fold preprocessing, participant-level StratifiedGroupKFold, permutation testing) for a multimodal behavioural + HRV + EEG dataset - and traced a misleading R² of about 0.84 to two coupled leakage modes.',
      'Co-built a Unity URP VR landslide simulator (Meta Quest 3) under the Tata Trusts SAFER Hills programme, with a GPU-instanced debris replay system fed by r.avaflow / RAMMS / DualSPHysics outputs; ran end-to-end data collection with 35 participants.',
    ],
  },
  {
    logo: '/logos/iiit-allahabad.png',
    logoAlt: 'IIIT Allahabad logo',
    org: 'Indian Institute of Information Technology Allahabad',
    role: 'AI & Robotics Summer Intern · Centre for Intelligent Robotics',
    period: 'Jun - Aug 2025',
    points: [
      'Co-developed and validated an autonomous UAV navigation system for GPS-denied environments, reaching under 1 m navigation accuracy in validation tests.',
      'Integrated PX4 Autopilot with ROS2 Offboard Mode for 10 Hz trajectory control across planning, perception, and control nodes.',
      'Co-engineered sensor-noise filtering and safety overrides in OpenCV and C++ with under 100 ms emergency response.',
    ],
  },
]

export function Research() {
  return (
    <div className="space-y-8">
      <Reveal>
        <blockquote className="rounded-xl border border-edge bg-panel p-6">
          <p className="font-mono text-xs uppercase tracking-widest text-cyan">publication</p>
          <p className="mt-3 text-sm leading-relaxed text-snow">
            "Asymmetric Behavioral Adaptation Following Initial Difficulty Exposure in a VR-Based
            Shooting Task"
          </p>
          <p className="mt-2 text-xs leading-relaxed text-fog">
            K. Chand, A. Mehra, S. Sonam, <span className="text-snow">K. Tomar</span>, Y. K. Meena,
            A. Kumar, G. Kaur, A. K. Rao, R. Govindaraji, A. Bhavsar, V. Dutt
          </p>
          <p className="mt-2 font-mono text-xs text-violet">
            PETRA 2026 · 19th Int. Conf. on PErvasive Technologies Related to Assistive
            Environments · Crete, Greece
          </p>
        </blockquote>
      </Reveal>

      <div className="space-y-6">
        {ROLES.map((r, i) => (
          <Reveal key={r.org} delay={i * 0.08}>
            <article className="group rounded-xl border border-edge bg-panel p-6 transition-colors hover:border-cyan/40 sm:p-8">
              <div className="flex flex-wrap items-center gap-4">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-white p-1.5">
                  <img src={r.logo} alt={r.logoAlt} className="max-h-full max-w-full object-contain" loading="lazy" />
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="font-display text-lg font-semibold text-snow">{r.org}</h3>
                  <p className="text-sm text-fog">{r.role}</p>
                </div>
                <span className="font-mono text-xs text-cyan">{r.period}</span>
              </div>
              <ul className="mt-5 space-y-2.5">
                {r.points.map(p => (
                  <li key={p.slice(0, 40)} className="flex gap-3 text-sm leading-relaxed text-fog">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-cyan" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1}>
        <article className="flex flex-wrap items-center gap-4 rounded-xl border border-edge bg-panel p-6">
          <span className="flex h-14 w-24 shrink-0 items-center justify-center rounded-lg bg-white p-2">
            <img src="/logos/medicaps.webp" alt="Medicaps University logo" className="max-h-full max-w-full object-contain" loading="lazy" />
          </span>
          <div className="min-w-0 flex-1">
            <h3 className="font-display text-lg font-semibold text-snow">Medicaps University, Indore</h3>
            <p className="text-sm text-fog">B.Tech, Computer Science & Engineering · AI specialization · CGPA 8.89 / 10</p>
            <a
              href="https://academic-dashboard-nu.vercel.app"
              target="_blank"
              rel="noreferrer"
              className="mt-1.5 inline-block font-mono text-xs text-cyan transition-colors hover:text-snow"
            >
              grade analytics - trends across all 8 semesters →
            </a>
          </div>
          <span className="font-mono text-xs text-cyan">2022 - 2026</span>
        </article>
      </Reveal>
    </div>
  )
}
