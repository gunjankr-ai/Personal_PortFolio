# Gunjan Kumar Sah — Modern Full-Stack Portfolio & Admin Platform

A production-ready, responsive, full-stack portfolio website built for **Gunjan Kumar Sah**, highlighting dual expertise in **Data Science & AI Engineering** and **Full-Stack Web Development**.

Includes a validated contact backend with rate limiting, database persistence, Resend email notifications, NIST PBKDF2 authentication, visitor community endorsements, persistent project upvoting, and a secure authenticated **Admin Dashboard** (`/admin`).

---

## 🌟 Key Features

1. **Modern Tech Stack**:
   - **Next.js 16 (App Router with Turbopack)**, **React 19**, **TypeScript**, **Tailwind CSS v4**
   - **Prisma ORM** with multi-provider architecture (SQLite for local zero-config development, PostgreSQL / Supabase for production)
   - **Lucide Icons** and **Next-Themes** (Dark/Light mode support)

2. **Enterprise-Grade Authentication & Security**:
   - **NIST-Standard PBKDF2 Password Hashing**: 100,000 rounds of SHA-256 with cryptographically random salt.
   - **Multi-Role User Architecture**: Supports Visitors, Recruiters, and Admin with encrypted JWT session cookies (`httpOnly`, `sameSite: lax`).
   - **1-Click Instant Demo Profiles**: Immediate exploration for hiring managers without manual registration.
   - **Brute-Force Rate Limiting**: Sliding window protection (5 attempts / 15 min per IP) on all sensitive authentication routes.
   - **Zero Secret Exposure**: Passwords and JWT secrets are strictly read from environment variables with no hardcoded fallbacks.

3. **Interactive & Dynamic Full-Stack Features**:
   - **Spotlight Command Palette (`Ctrl+K`)**: Keyboard-driven navigation across all portfolio sections and quick actions.
   - **Real-Time Project Search & Filtering**: Live search by keyword or tech stack tag (`PyTorch`, `React`, `FastAPI`).
   - **Persistent Project Upvotes**: Database-backed community upvoting system with optimistic UI micro-animations.
   - **Community Endorsement Wall (Guestbook)**: Live recommendations from recruiters and engineering collaborators.
   - **Reading Depth Indicator**: 2.5px gradient glow scroll progress bar.
   - **1-Click Contact Copy**: One-click clipboard copy for email and phone with instant toast notifications.

4. **Verified Portfolio Data**:
   - B.Tech CSE (2024–2028) at Maharishi University of Information Technology (MUIT), Lucknow &bull; CGPA: 8.5/10
   - Real projects: Sentinel-2 Wetland AI, ResuMatch AI, EduTrack Pro, Fraud Detection Pipeline, Urban Wetland Guardian, PhonePe Analytics, AI-MediKiosk.
   - Verified credentials: Google Cloud Generative AI Studio, NASSCOM Data Engineering Analyst, PHN Tech Power BI, Yuva AI for All.

---

## 🛠️ Local Development Setup

### 1. Prerequisites
- **Node.js** 20+ (tested on Node.js v24)
- **npm** 10+

### 2. Clone & Install Dependencies
```bash
git clone https://github.com/gunjankr-ai/Personal_PortFolio.git
cd Personal_PortFolio
npm install
```

### 3. Configure Environment Variables
Create a `.env` file in the root directory:
```env
# Database Configuration
DATABASE_URL="file:./dev.db"

# Admin Authentication
# Choose a strong password for your admin dashboard:
ADMIN_PASSWORD="your-strong-random-password-here"
ADMIN_SECRET="your-32-character-random-secret-key-here"

# Email Configuration (Resend)
# Optional in local development (emails will log safely to terminal)
RESEND_API_KEY=""
EMAIL_FROM="Gunjan Kumar Sah <onboarding@resend.dev>"
EMAIL_TO="gunjansah63@gmail.com"

# Site URL
NEXT_PUBLIC_SITE_URL="http://localhost:3000"
```

### 4. Initialize Database
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

1. Open [http://localhost:3000/admin](http://localhost:3000/admin).
2. Enter the password configured in your `.env` file (`ADMIN_PASSWORD`).
3. View real-time visitor inquiries, filter by status (`UNREAD`, `READ`, `ARCHIVED`), review lead statistics, and export submissions to CSV.

---

## 🚀 Deployment to Vercel (with Supabase / PostgreSQL)

### Step 1: Create a PostgreSQL Database on Supabase or Neon
1. Go to [supabase.com](https://supabase.com) and create a free project.
2. In Project Settings -> Database, copy your **Connection String (URI)**:
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
Run `npx prisma db push` to initialize tables in your PostgreSQL database.

### Step 3: Deploy to Vercel
1. Import your repository in [Vercel](https://vercel.com).
2. Under **Environment Variables**, set:
   - `DATABASE_URL`: Your PostgreSQL connection string
   - `ADMIN_PASSWORD`: Your secret admin password
   - `ADMIN_SECRET`: A random 32-character encryption key
   - `RESEND_API_KEY`: Your Resend API key
   - `EMAIL_FROM`: `Gunjan Kumar Sah <onboarding@resend.dev>`
   - `EMAIL_TO`: `gunjansah63@gmail.com`
   - `NEXT_PUBLIC_SITE_URL`: `https://gunjan-eight.vercel.app`
3. Click **Deploy**.

---

## 🛡️ Security & Privacy Guarantees

- **No Plaintext Passwords**: User passwords are cryptographically hashed using PBKDF2 (100,000 rounds of SHA-256).
- **Environment Isolation**: `.env` and SQLite `.db` database files are strictly excluded via `.gitignore`.
- **Session Security**: Admin and user tokens are stored in secure, HTTP-only cookies protected against client-side XSS.
- **Brute-Force Shield**: Sensitive endpoints are throttled to prevent automated credential attacks.
- **Input Sanitization**: All contact submissions and authentication requests pass strict server-side Zod and type validation.

---

&copy; 2026 Gunjan Kumar Sah. All rights reserved.
