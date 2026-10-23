# UIUX Generator App (uiuxmock)

A modern, full-stack Next.js 16 web application designed to generate free UI and UX design mockups. Powered by AI, authenticated with Clerk, and backed by a serverless Neon PostgreSQL database using Drizzle ORM.

[![Next.js](https://img.shields.io/badge/Next.js-16.1.1-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.3-blue?style=for-the-badge&logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Clerk](https://img.shields.io/badge/Clerk-Authentication-6C47FF?style=for-the-badge&logo=clerk)](https://clerk.com/)
[![Neon](https://img.shields.io/badge/Neon-PostgreSQL-00E599?style=for-the-badge&logo=neon)](https://neon.tech/)
[![Drizzle ORM](https://img.shields.io/badge/Drizzle_ORM-v0.45.1-C5F74F?style=for-the-badge&logo=drizzle)](https://orm.drizzle.team/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)](LICENSE)

---

## Table of Contents
1. [Project Overview](#-project-overview)
2. [Features](#-features)
3. [Tech Stack](#-tech-stack)
4. [Installation](#-installation)
5. [▶Usage](#-usage)
6. [Project Structure](#-project-structure)
7. [Configuration](#-configuration)
8. [Contributing](#-contributing)
9. [Roadmap](#-roadmap)
10. [License](#-license)
11. [Contact](#-contact)

---

## Project Overview
The **UIUX Generator App** is a landing page and platform that enables users to generate stunning user interface and user experience design mockups instantly. 

### Why it exists:
Traditional UI/UX mockup generation is manual and time-consuming. This application aims to provide developers, designers, and creators with an automated tool to quickly conceptualize layouts and UI components, saving hours of design and wireframing time.

### Who it's for:
- **Frontend Developers** looking for ready-to-use visual layouts.
- **UI/UX Designers** searching for inspiration or fast wireframe baselines.
- **Indie Hackers** and **Product Managers** prototyping new SaaS ideas quickly.

---

## Features
- **Secure Authentication**: Clerk handles login, signup, and profile management.
- **Credit-Based Generation**: Serverless sync that provisions 5 free credits for new users in the database upon signup.
- **UI Kit**: Built-in visual elements utilizing over 50 preconfigured Radix UI primitives and shadcn components.
- **Serverless Database Integration**: Queries to Neon PostgreSQL via Drizzle ORM.
- **Responsive & Modern Design**: Dark mode and theme configuration supported using Tailwind CSS v4 and Next Themes.

---

## Tech Stack
- **Core Framework**: Next.js 16.1 (App Router) & React 19.2
- **Styling**: Tailwind CSS v4 (configured via PostCSS) & Next Themes
- **Authentication**: Clerk Next.js SDK
- **Database & ORM**: Neon Serverless PostgreSQL & Drizzle ORM
- **UI & Layout Components**: Radix UI, Lucide Icons, Recharts, and Sonner
- **Form Handling & Validation**: React Hook Form & Zod
- **API Client**: Axios

---

## Installation

Follow these steps to set up the project locally:

### 1. Clone the repository
```bash
git clone https://github.com/MuskaanSultana/uiuxmock.git
cd uiuxmock
```

### 2. Install dependencies
```bash
npm install
```

### 3. Configure the environment variables
Create a `.env` file in the root directory and add your credentials (see [Configuration](#-configuration) below).

### 4. Push the database schema
Sync the database schema with Neon PostgreSQL:
```bash
npx drizzle-kit push
```

---

## ▶Usage

### Running the Development Server
Launch the development server locally:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### Building for Production
Create an optimized production bundle:
```bash
npm run build
```

### Starting the Production Server
```bash
npm run start
```

---

## Project Structure

```
uiuxmock/
├── .clerk/                 # Clerk configuration assets
├── app/                    # Next.js App Router directories
│   ├── (auth)/             # Authentication route groups (sign-in & sign-up)
│   ├── api/                # API routes (user endpoints, webhooks)
│   ├── globals.css         # Tailwind v4 directives & global styles
│   ├── layout.tsx          # Root Layout wrapping providers & global font (Nunito Sans)
│   ├── page.tsx            # Home Page (Landing / Dashboard trigger)
│   └── provider.tsx        # Client-side state & API sync provider
├── components/             # Reusable UI component blocks
│   └── ui/                 # Pre-configured Radix & shadcn components
├── config/                 # Database initialization and schemas
│   ├── db.tsx              # Neon serverless drizzle instance
│   └── schema.tsx          # PostgreSQL database schema definitions
├── context/                # React contexts (User details, credits)
├── hooks/                  # Custom application React hooks
├── lib/                    # Helper utilities (Tailwind class merging)
├── public/                 # Static assets (images, icons)
├── drizzle.config.ts       # Drizzle migrations configuration
├── next.config.ts          # Next.js configuration
├── package.json            # Node.js dependencies & scripts
├── postcss.config.mjs      # PostCSS processor rules for Tailwind v4
└── tsconfig.json           # TypeScript configuration
```

---

## Configuration

Ensure you create a `.env` file in the root of the project with the following structure:

```env
# Neon PostgreSQL database URL
DATABASE_URL=postgresql://<username>:<password>@<neon-host>/uiux-mock-app?sslmode=require

# Clerk Authentication Keys
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...

# Clerk Redirect Paths
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL=/
NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL=/
```

---

## Contributing

Contributions make the open-source community an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## Roadmap
- [ ] Implement AI-Powered UI Mockup generation models.
- [ ] Add editable canvas support to customize generated mockups online.
- [ ] Support code export (Tailwind, HTML, React/JSX).
- [ ] Add user credits top-up flow with Stripe payments.
- [ ] Build a community gallery page to share generated mockups.

---

## License

Distributed under the MIT License. See `LICENSE` for more information.

---

## Contact

**Muskaan Sultana**  
- **GitHub**: [MuskaanSultana](https://github.com/MuskaanSultana)  
- **Email**: muskaan.sultana@example.com  

---
*Created with for the UI/UX developer community.*
