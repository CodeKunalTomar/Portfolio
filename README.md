# kunaltomar.vercel.app

Personal portfolio - a single-page, scroll-driven site sharing one visual identity with my GitHub profile.

**Live:** [kunaltomar.vercel.app](https://kunaltomar.vercel.app)

## Signature pieces

- **Swarm canvas** - a hand-coded boids flocking simulation behind the hero (zero libraries, pure canvas). Agents flock, link into constellations, and steer away from the pointer - a nod to my multi-robot coordination research.
- **Typed terminal** - a React terminal that types `whoami`, `ls ~/research`, and `cat focus.txt` character by character into a blinking prompt.
- Scroll-triggered section reveals, active-section tracking in the nav, and `prefers-reduced-motion` support throughout.

## Stack

- Vite + React 18 + TypeScript
- Tailwind CSS
- Framer Motion
- Deployed on Vercel - about 90 KB gzipped

## Run locally

```bash
npm install
npm run dev
```

Build with `npm run build`, preview the production bundle with `npm run preview`.
