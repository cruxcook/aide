<h1 align="center">Aide</h1>

> Developed in [Next.js](https://nextjs.org/), [Tailwind CSS](https://tailwindcss.com/), [TypeScript](https://www.typescriptlang.org/), [Shadcn/UI](https://ui.shadcn.com/), [Clerk](https://clerk.com/).

<p align="center">
    <img src="./public/landing-screenshot.webp" alt="Landing Screenshot">
</p>

## Contents

-   [Prerequisites](#1-prerequisites)
-   [Features](#2-features)
-   [Usage](#3-usage)

---

### 1. Prerequisites

-   [Node.js](https://nodejs.org/en) - v21.x.x

### 2. Features

<p align="center">
    <img src="./public/dashboard-screenshot.webp" alt="Dashboard Screenshot">
</p>

- Tailwind design.
- Tailwind animations and effects.
- Full responsiveness.
- Clerk Authentication (Email, GMail).
- Client form validation and handling using [react-hook-form](https://react-hook-form.com/).
- Page loading state.
- Conversation Generation Tool (Open AI).
- Code Generation Tool (Open AI)
- Image Generation Tool (WIP)
- Music Generation Tool (WIP)
- Video Generation Tool (WIP)

### 3. Usage

- Clone the repo

```bash
git clone https://github.com/cruxcook/aide.git
```

- Set up environment

```bash
cp .emv.example .emv
```

- Configure environment

```bash
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard

OPENAI_API_KEY=
```

- Start the app

```bash
npm run dev
```