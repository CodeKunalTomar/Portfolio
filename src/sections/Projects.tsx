import { Reveal } from '../components/Section'

const PROJECTS = [
  {
    name: 'autonomous-gps-denied-drone-navigation',
    title: 'GPS-Denied Drone Navigation',
    desc: 'Autonomous UAV navigation without GPS: real-time obstacle detection, path planning, and emergency safety overrides, validated to under 1 m accuracy.',
    stack: ['C++', 'ROS2', 'PX4', 'OpenCV', 'Gazebo'],
    href: 'https://github.com/CodeKunalTomar/autonomous-gps-denied-drone-navigation',
  },
  {
    name: 'multi_robot_coordination_system',
    title: 'Multi-Robot Coordination',
    desc: 'Synchronised control of dual 7-DOF arms: multi-camera vision with Hough transforms and Bayesian confidence scoring, damped least squares IK with collision avoidance, tuned ROS2 QoS.',
    stack: ['Python', 'ROS2', 'OpenCV', 'PyBullet'],
    href: 'https://github.com/CodeKunalTomar/multi_robot_coordination_system',
  },
  {
    name: 'fa-ucb',
    title: 'Bandits with Untrusted Forecasts',
    desc: 'Active research code: non-stationary multi-armed bandits that exploit external change-time forecasts without trusting them. Work in progress.',
    stack: ['Python', 'NumPy'],
    href: 'https://github.com/CodeKunalTomar/fa-ucb',
  },
  {
    name: 'OptiConnect',
    title: 'OptiConnect',
    desc: 'Connect-4 with a depth-limited minimax AI that runs in a Web Worker, so the board stays responsive while the engine thinks.',
    stack: ['JavaScript', 'Web Workers'],
    href: 'https://github.com/CodeKunalTomar/OptiConnect',
    live: 'https://opticonnect.vercel.app',
  },
]

export function Projects() {
  return (
    <div className="grid gap-5 sm:grid-cols-2">
      {PROJECTS.map((p, i) => (
        <Reveal key={p.name} delay={i * 0.07}>
          <article className="group flex h-full flex-col rounded-xl border border-edge bg-panel p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan/50 hover:shadow-[0_8px_40px_rgba(0,217,255,0.08)]">
            <p className="font-mono text-[11px] text-violet">{p.name}</p>
            <h3 className="mt-2 font-display text-lg font-semibold text-snow">{p.title}</h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-fog">{p.desc}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {p.stack.map(s => (
                <span key={s} className="rounded border border-edge px-2 py-0.5 font-mono text-[11px] text-fog">
                  {s}
                </span>
              ))}
            </div>
            <div className="mt-5 flex gap-4 font-mono text-xs">
              <a href={p.href} target="_blank" rel="noreferrer" className="text-cyan transition-colors hover:text-snow">
                github →
              </a>
              {p.live && (
                <a href={p.live} target="_blank" rel="noreferrer" className="text-cyan transition-colors hover:text-snow">
                  live →
                </a>
              )}
            </div>
          </article>
        </Reveal>
      ))}
    </div>
  )
}
