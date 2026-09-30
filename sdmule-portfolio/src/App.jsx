import { CssBaseline, ThemeProvider } from "@mui/material";
import { useEffect, useState } from "react";
import Footer from "./components/Footer.jsx";
import HeaderNavigation from "./components/HeaderNavigation.jsx";
import {
  AboutSection,
  ContactSection,
  EducationSection,
  ExperienceSection,
  HeroSection,
  HobbiesSection,
  ProjectsSection,
  ResumeSection,
  SkillsSection,
} from "./components/sections/PortfolioContent.jsx";
import { navigationItems } from "./data/portfolio.js";
import theme from "./theme/theme.js";
import "./site.css";

function App() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const hasFinePointer = window.matchMedia(
      "(hover: hover) and (pointer: fine)",
    ).matches;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (!hasFinePointer || prefersReducedMotion) return undefined;

    const root = document.documentElement;
    const updatePointerPosition = (event) => {
      root.style.setProperty("--pointer-x", `${event.clientX}px`);
      root.style.setProperty("--pointer-y", `${event.clientY}px`);
      root.classList.add("has-pointer");
    };
    const hidePointerLight = () => root.classList.remove("has-pointer");

    window.addEventListener("pointermove", updatePointerPosition, {
      passive: true,
    });
    document.addEventListener("pointerleave", hidePointerLight);

    return () => {
      window.removeEventListener("pointermove", updatePointerPosition);
      document.removeEventListener("pointerleave", hidePointerLight);
      root.classList.remove("has-pointer");
    };
  }, []);

  useEffect(() => {
    document.documentElement.classList.add("has-scroll-reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (first, second) =>
              second.intersectionRatio - first.intersectionRatio,
          );

        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
        const activeNavigationSection = visibleSections.find((entry) =>
          navigationItems.some(({ href }) => href.slice(1) === entry.target.id),
        );
        if (activeNavigationSection) {
          setActiveSection(activeNavigationSection.target.id);
        }
      },
      { rootMargin: "-28% 0px -58% 0px", threshold: [0, 0.15, 0.35] },
    );

    document
      .querySelectorAll("#main-content .content-section")
      .forEach((section) => observer.observe(section));
    return () => {
      observer.disconnect();
      document.documentElement.classList.remove("has-scroll-reveal");
    };
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="pointer-light" aria-hidden="true" />
      <div className="site-shell">
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <HeaderNavigation activeSection={activeSection} />
        <main className="site-main" id="main-content">
          <HeroSection />
          <AboutSection />
          <ExperienceSection />
          <ProjectsSection />
          <SkillsSection />
          <HobbiesSection />
          <EducationSection />
          <ResumeSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
