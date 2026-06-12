import { Reveal } from '../components/Section'

const DEVICON = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons'

type Skill = { name: string; icon?: string }

const GROUPS: { label: string; skills: Skill[] }[] = [
  {
    label: 'languages',
    skills: [
      { name: 'Python', icon: `${DEVICON}/python/python-original.svg` },
      { name: 'C++', icon: `${DEVICON}/cplusplus/cplusplus-original.svg` },
      { name: 'C', icon: `${DEVICON}/c/c-original.svg` },
      { name: 'R', icon: `${DEVICON}/r/r-original.svg` },
      { name: 'JavaScript', icon: `${DEVICON}/javascript/javascript-original.svg` },
      { name: 'SQL' },
    ],
  },
  {
    label: 'robotics',
    skills: [
      { name: 'ROS2', icon: `${DEVICON}/ros/ros-original.svg` },
      { name: 'PX4' },
      { name: 'Gazebo' },
      { name: 'PyBullet' },
      { name: 'OpenCV', icon: `${DEVICON}/opencv/opencv-original.svg` },
    ],
  },
  {
    label: 'vr & simulation',
    skills: [
      { name: 'Unity', icon: `${DEVICON}/unity/unity-original.svg` },
      { name: 'OpenXR' },
      { name: 'URP' },
      { name: 'XR Interaction Toolkit' },
      { name: 'VFX Graph' },
      { name: 'Shader Graph' },
    ],
  },
  {
    label: 'ml & data',
    skills: [
      { name: 'scikit-learn', icon: `${DEVICON}/scikitlearn/scikitlearn-original.svg` },
      { name: 'PyTorch', icon: `${DEVICON}/pytorch/pytorch-original.svg` },
      { name: 'TensorFlow', icon: `${DEVICON}/tensorflow/tensorflow-original.svg` },
      { name: 'pandas', icon: `${DEVICON}/pandas/pandas-original.svg` },
      { name: 'NumPy', icon: `${DEVICON}/numpy/numpy-original.svg` },
      { name: 'SciPy' },
      { name: 'statsmodels' },
    ],
  },
  {
    label: 'sensors & tools',
    skills: [
      { name: 'EmotiBit · PPG/HRV' },
      { name: 'Muse S Athena · EEG' },
      { name: 'Git', icon: `${DEVICON}/git/git-original.svg` },
      { name: 'Linux', icon: `${DEVICON}/linux/linux-original.svg` },
      { name: 'Jupyter', icon: `${DEVICON}/jupyter/jupyter-original.svg` },
      { name: 'Anaconda', icon: `${DEVICON}/anaconda/anaconda-original.svg` },
    ],
  },
]

export function Skills() {
  return (
    <div className="space-y-8">
      {GROUPS.map((g, i) => (
        <Reveal key={g.label} delay={i * 0.05}>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:gap-8">
            <p className="w-40 shrink-0 pt-2 font-mono text-xs uppercase tracking-widest text-violet">
              {g.label}
            </p>
            <div className="flex flex-wrap gap-2.5">
              {g.skills.map(s => (
                <span
                  key={s.name}
                  className="flex items-center gap-2 rounded-lg border border-edge bg-panel px-3 py-2 text-sm text-snow transition-colors hover:border-cyan/40"
                >
                  {s.icon && <img src={s.icon} alt="" className="h-[18px] w-[18px]" loading="lazy" />}
                  {s.name}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  )
}
