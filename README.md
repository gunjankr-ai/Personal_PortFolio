<<<<<<< HEAD
<<<<<<< HEAD
# Gunjan Kumar - AI & Technology Portfolio Website

A modern, responsive, professional personal portfolio website designed for **Gunjan Kumar**, B.Tech Computer Science Engineering student and aspiring AI / technology professional and researcher.

---

## 🌟 Highlights & Features

- **Modern AI/Tech Aesthetic**: Cyber slate & dark-mode primary identity with glowing cyan, emerald, and electric blue accents, plus an instant dark/light theme switch saved to `localStorage`.
- **Hero & Special Feature**: Prominent introduction, quick CTA buttons, and a dedicated **"AI Career & Research Profile"** card highlighting the 5 key focus pillars.
- **Interactive AI Neural Background**: High-performance HTML5 canvas animation of neural nodes with gentle cursor repulsion.
- **Interactive Research Workflow Pipeline**: 8-step visual pipeline (`Satellite Data` → `Image Processing` → `AI/ML Analysis` → `Change Detection` → `GIS Visualization` → `Prediction` → `Early Warning` → `Conservation Action`) with dynamic step inspection.
- **Featured Projects**: Detailed cards for *Artificial Intelligence for Wetland Monitoring and Conservation*, *Urban Wetland Guardian (Digital Twin)*, and an editable template for upcoming projects.
- **Client-Side Validated Contact Form**: Real-time error checks on name, email, subject, message with animated toast notification.
- **100% Zero-Dependency & Fast**: Built with pure semantic HTML5, modern CSS3 variables, and vanilla ES6 JavaScript. No `npm install` or compilation required.
- **Strict Placeholder Integrity**: No fictitious companies, grades, or credentials. Everything missing is clearly tagged with `[Add ...]` markers for quick editing.

---

## 📂 Project Structure

```
gunjan-kumar-portfolio/
├── index.html                 # Main website HTML with SEO & Schema.org data
├── css/
│   ├── variables.css          # Color tokens, light & dark theme definitions
│   ├── style.css              # Global resets, base typography, buttons
│   ├── components.css         # Navbar, Hero, Skills, Projects, Research, Resume, Form
│   └── responsive.css         # Breakpoint styling (Mobile, Tablet, Desktop)
├── js/
│   ├── main.js                # Theme switcher, scroll spy, contact form validation, modals
│   ├── particles.js           # Canvas AI constellation particle animation
│   └── research-flow.js       # Interactive research pipeline nodes & details
├── assets/
│   ├── favicon.svg            # Custom GK monogram vector favicon
│   └── images/
│       ├── profile-avatar.svg # Sleek AI tech avatar placeholder
│       ├── wetland-ai.svg     # Wetland satellite monitoring architecture diagram
│       ├── digital-twin.svg   # Urban wetland digital twin concept diagram
│       └── project-future.svg # Wireframe blueprint for upcoming project
└── README.md                  # Customization & deployment guide
```

---

## 🚀 How to Run & Preview Locally

You can preview the website in any browser:

### Option 1: Direct File Opening
Double-click `index.html` to open it directly in Chrome, Edge, Firefox, or Safari.

### Option 2: Python Local Server
Run in terminal:
```bash
python -m http.server 8000
```
Then visit: `http://localhost:8000`

### Option 3: Node.js / npx serve
```bash
npx serve .
```

---

## ✏️ How to Customize Placeholders

Search `index.html` for the following brackets:

| Placeholder Marker | Section | Where to update |
|--------------------|---------|-----------------|
| `[Add College/University Name]` | Education & About | Replace with your university or institute name |
| `[Add Start Year – Expected Graduation Year]` | Education & Timeline | e.g. `2023 – 2027` |
| `[Add your CGPA / Percentage]` | Education | e.g. `8.8 / 10.0` |
| `[your.email@example.com]` | Contact & Footer | Replace with your actual email address |
| `[Add your LinkedIn URL]` | Hero, Contact, Footer | Replace with your LinkedIn profile link |
| `[Add your GitHub URL]` | Hero, Contact, Footer | Replace with your GitHub profile link |
| `[Certificate Title Placeholder]` | Certifications | Add courses from Coursera, NPTEL, etc. |
| `assets/images/profile-avatar.svg` | Hero Section | Place your own `.jpg` or `.png` photo in `assets/images/` and update the `src` attribute |

---

## 🌐 Free 1-Click Deployment

### 1. GitHub Pages
1. Push this folder to a GitHub repository named `gunjan-kumar.github.io` (or any repository name).
2. Go to **Settings** → **Pages**.
3. Under **Branch**, select `main` (or `master`) and root `/`.
4. Click **Save**. Your portfolio is now live!

### 2. Vercel or Netlify
- Drag and drop the `gunjan-kumar-portfolio` folder into [app.netlify.com/drop](https://app.netlify.com/drop) or import from GitHub on [vercel.com](https://vercel.com).
=======
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).
=======
# Gunjan Kumar Sah — Modern Full-Stack Portfolio & Admin Platform
>>>>>>> 982a663 (Upadated Portfolio)

A production-ready, responsive, full-stack portfolio website built for **Gunjan Kumar Sah**, highlighting dual expertise in **Data Science & AI Engineering** and **Full-Stack Web Development**.

Includes a validated contact backend with rate limiting, database persistence, dual Resend email notifications, and a secure authenticated **Admin Dashboard** (`/admin`).

---

## 🌟 Key Features

1. **Modern Tech Stack**:
   - **Next.js 16 (App Router)**, **React 19**, **TypeScript**, **Tailwind CSS v4**
   - **Prisma ORM** with multi-provider architecture (SQLite for zero-friction local development, PostgreSQL / Supabase for production)
   - **Lucide Icons** and **Next-Themes** (Dark/Light mode support)

2. **Interactive Sections**:
   - **Hero Section**: Profile avatar with animated glow border, verified handles, CV download, and AI Career & Research Pillars card.
   - **About Section**: Professional narrative, academic summary, quick facts panel, and an interactive **"Read More" modal** with detailed career vision and goals.
   - **Skills Matrix**: Categorized into *Programming*, *Data Science & AI*, *Web Development*, and *Tools*. Clicking any skill opens an interactive modal showing technical overview, libraries used, applied experience, and related projects.
   - **Education Timeline**: B.Tech in CSE at Maharishi University of Information Technology (MUIT), Lucknow (CGPA 8.5/10) with expandable coursework and achievements.
   - **Featured Projects**: Filterable showcase for 7 actual projects (Wetland AI, ResuMatch AI, EduTrack Pro, Fraud Detection Pipeline, Urban Wetland Guardian, PhonePe Analytics, AI-MediKiosk SIH 2026). Direct GitHub links, Coming Soon badges, and deep architectural dossiers.
   - **Research & Innovation**: Spotlight investigation on Sentinel-2 satellite wetland monitoring with an **interactive 8-step pipeline visualizer** and research synopsis modal.
   - **Verified Certifications**: Google Cloud Generative AI Studio, NASSCOM Data Engineering Analyst, PHN Tech Power BI, and Yuva AI for All with **verified Google Drive credential links**.
   - **Curriculum Vitae**: Embedded clean resume preview, direct PDF download (`/resume.pdf`), and print action.

3. **Backend Contact System**:
   - Client-side & server-side **Zod** validation.
   - In-memory sliding window **rate limiter** (5 submissions per 15 minutes per IP) & honeypot spam protection.
   - Database storage into `ContactMessage` table with status tracking (`UNREAD`, `READ`, `ARCHIVED`).
   - **Resend** dual email dispatch: Instant alert to Gunjan (`gunjansah63@gmail.com`) + automated branded confirmation email to the visitor (with console logger fallback in development).

4. **Secure Admin Dashboard (`/admin`)**:
   - Password-protected with JWT encrypted HTTP-only session cookies.
   - Real-time search and status filtering (`ALL`, `UNREAD`, `READ`, `ARCHIVED`).
   - Key metric cards: Total Submissions, Unread Messages, Messages Today, Read Rate.
   - Full visitor dossier modal with direct `mailto:` reply shortcut.
   - One-click Mark Read/Unread and Delete actions.
   - Export submissions to CSV lead file.

---

## 🛠️ Local Development Setup

### 1. Prerequisites
- **Node.js** 20+ (tested on Node.js v24)
- **npm** 10+

### 2. Clone & Install Dependencies
```bash
cd portfolio
npm install
```

### 3. Configure Environment Variables
Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```

Your default `.env` will look like:
```env
DATABASE_URL="file:./dev.db"
ADMIN_PASSWORD="GunjanAdmin2026Secure!231!231!@#$"
ADMIN_SECRET="antigravity_gunjan_admin_session_jwt_secret_key_2026_super_safe_vercel_github"
RESEND_API_KEY=""
EMAIL_FROM="Gunjan Kumar Sah <onboarding@resend.dev>"
EMAIL_TO="gunjansah63@gmail.com"
NEXT_PUBLIC_SITE_URL="http://localhost:3000"
```

> **Note:** If `RESEND_API_KEY` is empty during local testing, emails are safely logged to the server terminal so form submissions succeed without errors.

### 4. Initialize Database (SQLite)
```bash
npx prisma generate
npx prisma db push
```

### 5. Start the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🔐 Admin Dashboard Access

1. Navigate to: [http://localhost:3000/admin](http://localhost:3000/admin)
2. Enter the admin password configured in `.env`:
   - Default: `123eodgocgurhochdfu`
3. You can inspect all submissions, filter unread inquiries, and reply to visitors.

---

<<<<<<< HEAD
Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
>>>>>>> ad88d94 (Initial commit from Create Next App)
=======
## 🚀 Deployment to Vercel (with Supabase / PostgreSQL)

### Step 1: Create a PostgreSQL Database on Supabase or Neon
1. Go to [supabase.com](https://supabase.com) and create a free project.
2. In the Supabase Dashboard, navigate to **Project Settings** -> **Database** and copy your **Connection String (URI)**:
   ```text
   postgresql://postgres:[YOUR-PASSWORD]@db.[YOUR-PROJECT-REF].supabase.co:5432/postgres?sslmode=require
   ```

### Step 2: Switch Prisma Provider for Production
In `prisma/schema.prisma`:
```prisma
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}
```
Run `npx prisma generate` and `npx prisma db push` to push the tables to Supabase.

### Step 3: Deploy to Vercel
1. Push your repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of full-stack portfolio"
   git branch -M main
   git remote add origin https://github.com/gunjankr-ai/portfolio.git
   git push -u origin main
   ```
2. Import the repository in [Vercel](https://vercel.com).
3. Under **Environment Variables** in Vercel, set:
   - `DATABASE_URL`: Your Supabase PostgreSQL connection string
   - `ADMIN_PASSWORD`: A secure password of your choice
   - `ADMIN_SECRET`: A random 32-character secret string
   - `RESEND_API_KEY`: Your Resend API key (from [resend.com/api-keys](https://resend.com/api-keys))
   - `EMAIL_FROM`: `Gunjan Kumar Sah <onboarding@resend.dev>` (or your custom domain)
   - `EMAIL_TO`: `gunjansah63@gmail.com`
   - `NEXT_PUBLIC_SITE_URL`: `https://gunjan-eight.vercel.app`
4. Click **Deploy**.

---

## 📂 Project Architecture

```text
portfolio/
├── app/
│   ├── layout.tsx                # Global layout with ThemeProvider, fonts & SEO JSON-LD
│   ├── page.tsx                  # Single-page portfolio with smooth anchor scrolling
│   ├── sitemap.ts                # Dynamic sitemap generator
│   ├── robots.ts                 # Dynamic robots.txt
│   ├── globals.css               # Tailwind CSS v4 design system
│   ├── admin/                    # Authenticated Admin Management Portal
│   │   ├── layout.tsx            # Admin session header & security guard
│   │   ├── page.tsx              # Submissions list, search, filter, stats, CSV export
│   │   └── login/
│   │       └── page.tsx          # Secure password login
│   └── api/
│       ├── contact/
│       │   └── route.ts          # Zod validation, rate limiter, DB save, Resend dispatch
│       └── admin/
│           ├── auth/
│           │   └── route.ts      # JWT session cookie management
│           └── messages/
│               ├── route.ts      # List & search inquiries
│               └── [id]/
│                   └── route.ts  # Update status & delete message
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx            # Sticky glassmorphism header & mobile drawer
│   │   └── Footer.tsx            # Footer with 2026 copyright
│   ├── sections/
│   │   ├── Hero.tsx              # Hero profile, status pill, AI pillars card
│   │   ├── About.tsx             # Narrative, quick facts, Read More modal
│   │   ├── Skills.tsx            # Categorized skills & interactive click modal
│   │   ├── Education.tsx         # MUIT B.Tech timeline with expandable coursework
│   │   ├── Projects.tsx          # Real project showcase with filter tabs
│   │   ├── Research.tsx          # Sentinel-2 AI research + 8-step pipeline visualizer
│   │   ├── Certifications.tsx    # Real Google Drive verified credentials
│   │   ├── ResumeSection.tsx     # Embedded CV preview, PDF viewer & print
│   │   └── Contact.tsx           # Validated contact form & direct channels
│   ├── modals/
│   │   ├── SkillDetailModal.tsx  # Deep dive into skill usage & libraries
│   │   ├── ProjectDossierModal.tsx # Full architecture & metrics breakdown
│   │   ├── ResearchPaperModal.tsx  # Scientific paper synopsis
│   │   └── AboutMoreModal.tsx    # Extended biography & goals
│   └── ui/
│       ├── ThemeToggle.tsx       # Dark/Light mode toggle
│       └── Toast.tsx             # Floating user notification
├── lib/
│   ├── db.ts                     # Prisma client singleton
│   ├── email.ts                  # Resend email dispatcher with HTML templates
│   ├── ratelimit.ts              # IP-based sliding window rate limiter
│   ├── auth.ts                   # JWT session encryption & verification
│   └── portfolioData.ts          # 100% verified Gunjan Kumar Sah portfolio facts
├── prisma/
│   └── schema.prisma             # ContactMessage database schema
├── public/
│   ├── profile-avatar.png        # Gunjan's real photo
│   ├── resume.pdf                # Gunjan's real resume PDF
│   ├── favicon.svg               # Monogram favicon
│   └── assets/images/            # High-fidelity SVG project illustrations
├── types/
│   └── portfolio.ts              # TypeScript domain types
└── .env                          # Local environment secrets
```

---

## 🛡️ Security & Performance Standards

- **Zero Secret Leaks**: All database URLs and API keys reside exclusively in server-side environment variables.
- **Spam Prevention**: Sliding-window rate limiting + honeypot bot trap field.
- **Authentication**: HTTP-only, SameSite lax JWT cookies preventing XSS and CSRF token theft.
- **Type Safety**: End-to-end TypeScript compilation with strict checking.
- **SEO & Accessibility**: Complete Schema.org JSON-LD Person/WebSite markup, OpenGraph metadata, ARIA labels, semantic HTML.
>>>>>>> 982a663 (Upadated Portfolio)
