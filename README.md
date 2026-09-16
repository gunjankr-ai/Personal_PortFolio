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
