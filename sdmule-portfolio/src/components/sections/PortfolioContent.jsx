import { Button, Chip, Typography } from "@mui/material";
import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";
import ProjectCard from "../ProjectCard.jsx";
import {
  contactDetails,
  education,
  experience,
  hobbies,
  projects,
  profile,
  resumeFile,
  resumeSummary,
  skillGroups,
} from "../../data/portfolio.js";

function SectionHeading({ eyebrow, title, description, id }) {
  return (
    <header className="section-heading">
      <p className="section-eyebrow">{eyebrow}</p>
      <Typography className="section-title" component="h2" variant="h2" id={id}>
        {title}
      </Typography>
      {description && <p className="section-description">{description}</p>}
    </header>
  );
}

export function HeroSection() {
  return (
    <section
      className="content-section home-section"
      id="home"
      aria-labelledby="home-title"
    >
      <div className="hero-copy">
        <p className="section-eyebrow">
          <span className="eyebrow-line" /> SOFTWARE ENGINEER · .NET / REACT
        </p>
        <Typography className="home-title" component="h1" id="home-title">
          Saurabh <span>Mule.</span>
        </Typography>
        <p className="home-role">{profile.role}</p>
        <p className="home-intro">
          Senior .NET developer with around four years of experience building
          web applications, APIs, and the interfaces around them.
        </p>
        <div className="home-actions">
          <Button component="a" href="#projects" variant="contained">
            Explore selected work <ArrowOutwardRoundedIcon aria-hidden="true" />
          </Button>
          <a
            className="inline-link"
            href={resumeFile}
            target="_blank"
            rel="noreferrer"
          >
            View resume <ArrowOutwardRoundedIcon aria-hidden="true" />
          </a>
        </div>
        <div className="home-meta">
          <span>C# / ASP.NET CORE</span>
          <span>REACT / SQL</span>
          <span>JUL 2022 — APR 2026</span>
        </div>
      </div>
      <div className="hero-portrait-stage">
        <div className="portrait-orbit" aria-hidden="true" />
        <img
          className="hero-portrait"
          src={profile.image}
          alt="Portrait of Saurabh Mule"
          referrerPolicy="no-referrer"
        />
        <div className="portrait-caption">
          <span>BUILD WITH PURPOSE</span>
          <span>01 / 04</span>
        </div>
        <div className="portrait-side-label" aria-hidden="true">
          DOTNET · REACT · SYSTEMS
        </div>
      </div>
    </section>
  );
}

export function AboutSection() {
  return (
    <section
      className="content-section"
      id="about"
      aria-labelledby="about-title"
    >
      <SectionHeading
        eyebrow="01 / ABOUT"
        title="A practical full-stack perspective."
        id="about-title"
      />
      <div className="about-copy">
        <p className="about-lead">
          I work from data and API design through to responsive user interfaces,
          with maintainability and performance in mind.
        </p>
        <p>{resumeSummary}</p>
        <p>
          My experience includes leading team delivery, working with
          cross-functional stakeholders, and supporting applications through the
          development lifecycle.
        </p>
      </div>
    </section>
  );
}

export function ExperienceSection() {
  return (
    <section
      className="content-section"
      id="experience"
      aria-labelledby="experience-title"
    >
      <SectionHeading
        eyebrow="02 / EXPERIENCE"
        title="Where I have worked."
        description="Professional roles and responsibilities from my resume."
        id="experience-title"
      />
      <div className="experience-list">
        {experience.map((role, index) => (
          <article
            className="experience-entry"
            key={`${role.company}-${role.period}`}
          >
            <div className="experience-marker">
              <span>0{index + 1}</span>
              <i aria-hidden="true" />
            </div>
            <div className="experience-entry-body">
              <div className="experience-heading-row">
                <div>
                  <h3>{role.title}</h3>
                  <p className="experience-company">{role.company}</p>
                </div>
                <span className="experience-period">{role.period}</span>
              </div>
              <p className="experience-summary">{role.description}</p>
              <ul className="experience-highlights">
                {role.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
              <div className="experience-tech">
                {role.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function ProjectsSection() {
  return (
    <section
      className="content-section"
      id="projects"
      aria-labelledby="projects-title"
    >
      <SectionHeading
        eyebrow="03 / SELECTED WORK"
        title="Built for real workflows."
        description="A selection of full-stack products, enterprise work, and focused .NET projects. Open a case study for the architecture and implementation notes."
        id="projects-title"
      />
      <div className="project-list">
        {projects.map((project, index) => (
          <ProjectCard key={project.name} project={project} index={index} />
        ))}
      </div>
      <a
        className="inline-link all-projects-link"
        href="https://github.com/sdmule?tab=repositories"
        target="_blank"
        rel="noreferrer"
      >
        Browse all GitHub repositories{" "}
        <ArrowOutwardRoundedIcon aria-hidden="true" />
      </a>
    </section>
  );
}

export function SkillsSection() {
  return (
    <section
      className="content-section"
      id="skills"
      aria-labelledby="skills-title"
    >
      <SectionHeading
        eyebrow="04 / TOOLKIT"
        title="Skills & technologies."
        description="A working toolkit, not a set of proficiency scores."
        id="skills-title"
      />
      <div className="skill-groups">
        {skillGroups.map((group, index) => (
          <article className="skill-group" key={group.title}>
            <div className="skill-group-title">
              <span>0{index + 1}</span>
              <h3>{group.title}</h3>
            </div>
            <div className="skill-chip-list">
              {group.skills.map((skill) => (
                <Chip key={skill} label={skill} size="small" />
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function HobbiesSection() {
  return (
    <section
      className="content-section"
      id="hobbies"
      aria-labelledby="hobbies-title"
    >
      <SectionHeading
        eyebrow="05 / OFF THE CLOCK"
        title="Things I enjoy."
        id="hobbies-title"
      />
      <div className="hobby-list">
        {hobbies.map((hobby, index) => (
          <article className="hobby-entry" key={hobby.title}>
            <span className="hobby-index">0{index + 1}</span>
            <div>
              <h3>{hobby.title}</h3>
              <p>{hobby.detail}</p>
            </div>
            <span className="hobby-mark" aria-hidden="true">
              ↗
            </span>
          </article>
        ))}
      </div>
    </section>
  );
}

export function EducationSection() {
  return (
    <section
      className="content-section"
      id="education"
      aria-labelledby="education-title"
    >
      <SectionHeading
        eyebrow="06 / EDUCATION"
        title="A foundation in engineering."
        id="education-title"
      />
      {education.map((item) => (
        <article
          className="education-entry"
          key={`${item.institution}-${item.period}`}
        >
          <div>
            <h3>{item.qualification}</h3>
            <p>{item.institution}</p>
          </div>
          <span>{item.period}</span>
        </article>
      ))}
    </section>
  );
}

export function ResumeSection() {
  return (
    <section
      className="content-section resume-section"
      id="resume"
      aria-labelledby="resume-title"
    >
      <div className="resume-callout">
        <div>
          <p className="section-eyebrow">07 / RESUME</p>
          <h2 id="resume-title">The details, in one place.</h2>
          <p>
            Download my resume for a concise overview of experience, education,
            skills, and selected work.
          </p>
        </div>
        <div className="resume-actions">
          <Button
            component="a"
            href={resumeFile}
            target="_blank"
            rel="noreferrer"
            variant="outlined"
          >
            View PDF
          </Button>
          <Button component="a" href={resumeFile} download variant="contained">
            Download PDF <span aria-hidden="true">↓</span>
          </Button>
        </div>
      </div>
    </section>
  );
}

export function ContactSection() {
  return (
    <section
      className="content-section contact-section"
      id="contact"
      aria-labelledby="contact-title"
    >
      <SectionHeading
        eyebrow="08 / CONTACT"
        title="Let's build something useful."
        description="For opportunities and professional conversations, reach me directly."
        id="contact-title"
      />
      <div className="contact-links">
        <a href={`mailto:${contactDetails.email}`}>
          <span>Email</span>
          <strong>{contactDetails.email}</strong>
          <ArrowOutwardRoundedIcon aria-hidden="true" />
        </a>
        <a href={`tel:${contactDetails.phone}`}>
          <span>Phone</span>
          <strong>{contactDetails.phone}</strong>
          <ArrowOutwardRoundedIcon aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
