import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Education } from "@/components/sections/Education";
import { Projects } from "@/components/sections/Projects";
import { Research } from "@/components/sections/Research";
import { Certifications } from "@/components/sections/Certifications";
import { ResumeSection } from "@/components/sections/ResumeSection";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Sticky Responsive Header */}
      <Navbar />

      {/* Main Sections */}
      <main className="flex-1">
        <Hero />
        <About />
        <Skills />
        <Education />
        <Projects />
        <Research />
        <Certifications />
        <ResumeSection />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
