# Osteria Nova — React landing page

Portfolio project: a modern, fully responsive landing page for a fictional Italian restaurant, built with React, TypeScript and Tailwind CSS.

**[Live demo →](https://genova-react.vercel.app/)**

## What this project demonstrates

- Building a marketing website from scratch, section by section (Hero, About, Menu, Gallery, Testimonials, Reservation, Footer)
- Responsive, cross-browser layout (mobile / tablet / desktop)
- An interactive reservation form with client-side validation and a success state
- Category tabs for filtering the menu
- Smooth scroll animations (Framer Motion)
- Semantic, accessible HTML (alt text, aria-labels, correct heading hierarchy)
- Performance-conscious build — lazy-loaded images, lean bundle size

## Tech stack

- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/) — build tool
- [Tailwind CSS v4](https://tailwindcss.com/) — styling
- [Framer Motion](https://motion.dev/) — animations
- [Lucide React](https://lucide.dev/) — icons

## Run locally

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Note

The reservation form is a front-end demo (validation + success state), with no real backend/email integration — typical for a portfolio piece. On a real client site it would connect to an API, an email service (e.g. Resend/SendGrid), or a CRM.

---

Design & development: [Plamen Zubev](https://github.com/plamenzubev)
