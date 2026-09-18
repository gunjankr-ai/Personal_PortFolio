import type { Metadata } from "next";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gunjan Kumar Sah | Data Science & AI Engineer | Full-Stack Developer",
  description:
    "Official portfolio of Gunjan Kumar Sah, B.Tech CSE student at MUIT Lucknow specializing in Artificial Intelligence, Machine Learning, Data Analytics, Environmental Remote Sensing, and Full-Stack Web Development.",
  keywords: [
    "Gunjan Kumar Sah",
    "Data Science",
    "AI Engineer",
    "Full-Stack Developer",
    "Machine Learning",
    "Deep Learning",
    "Generative AI",
    "AI Agents",
    "Wetland Monitoring",
    "Remote Sensing",
    "QGIS",
    "Next.js",
    "React",
    "Python",
    "FastAPI",
    "Portfolio",
  ],
  authors: [{ name: "Gunjan Kumar Sah", url: "https://github.com/gunjankr-ai" }],
  creator: "Gunjan Kumar Sah",
  publisher: "Gunjan Kumar Sah",
  metadataBase: new URL("https://gunjan-eight.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Gunjan Kumar Sah | Data Science & AI Engineer | Full-Stack Developer",
    description:
      "B.Tech Computer Science Engineering student passionate about Artificial Intelligence, Data Analytics, Environmental Monitoring, and Research Innovation.",
    url: "https://gunjan-eight.vercel.app",
    siteName: "Gunjan Kumar Sah Portfolio",
    images: [
      {
        url: "/profile-avatar.png",
        width: 800,
        height: 800,
        alt: "Gunjan Kumar Sah - Data Science & AI Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gunjan Kumar Sah | Data Science & AI Engineer",
    description:
      "Computer Science Engineering student passionate about Artificial Intelligence, Data Analytics, and Full-Stack Development.",
    images: ["/profile-avatar.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // JSON-LD Schema.org Structured Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Gunjan Kumar Sah",
    alternateName: "Gunjan Kumar",
    jobTitle: "Data Science & AI Engineer | Full-Stack Developer",
    url: "https://gunjan-eight.vercel.app",
    image: "https://gunjan-eight.vercel.app/profile-avatar.png",
    sameAs: [
      "https://github.com/gunjankr-ai",
      "https://github.com/gunjan-kumar-sah",
      "https://linkedin.com/in/gunjan-kumar-sah-3b0b28435",
    ],
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Maharishi University of Information Technology",
      location: "Lucknow, Uttar Pradesh, India",
    },
    knowsAbout: [
      "Artificial Intelligence",
      "Machine Learning",
      "Data Analytics",
      "Deep Learning",
      "Full-Stack Web Development",
      "Next.js",
      "Python",
      "FastAPI",
      "QGIS",
      "Geospatial AI",
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased min-h-screen selection:bg-cyan-500/20 selection:text-cyan-400">
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
