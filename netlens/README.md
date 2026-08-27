# NetLens — Network Intrusion Detection System (Final Year Project)

A React + Vite + Tailwind CSS demo website for a B.Sc. IT final-year NIDS project.

## Getting Started

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (typically http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

## Tech Stack
- React 19 + Vite
- Tailwind CSS 3
- React Router 7
- Framer Motion (animations)
- Recharts (dashboard/report charts)
- Lucide React + React Icons (icons)

## Structure
```
src/
  components/   Navbar, Footer, layout, dashboard & home widgets, shared UI
  pages/        One file per route (Home, About, Dashboard, Attack Types, ...)
  data/         Mock data powering charts, alerts, live packet simulation
```

## Notes
- The Live Monitoring page and Dashboard use generated/mock data — there's no real packet capture.
- Login, Register, Forgot Password, and Admin Panel are UI-only (no backend).
- Color palette and fonts follow the original project brief (#0B1120 background, #2563EB / #06B6D4 / #22C55E accents, Poppins + Inter).
