import Image from "next/image";
import {
  ArrowRight,
  Building2,
  CalendarDays,
  Code2,
  Database,
  Download,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Monitor,
  Phone,
  Server,
  Smartphone,
  Trophy,
  UserRound,
  Users,
  Wrench,
} from "lucide-react";

const links = {
  github: "https://github.com/babukre1",
  linkedin: "https://www.linkedin.com/in/abuubakarali/",
  email: "mailto:abubakar4official@gmail.com",
  phone: "tel:+252611602428",
  cv: "/Abubakar-Ali-Abdulle-CV.pdf",
};

const navItems = ["About", "Experience", "Projects", "Achievements", "Contact"];

const skills = [
  { title: "Backend", value: "Node.js, Express, NestJS, Prisma", icon: Server },
  { title: "Frontend", value: "React, Next.js", icon: Monitor },
  { title: "Mobile", value: "Flutter", icon: Smartphone },
  { title: "Databases", value: "PostgreSQL, MongoDB", icon: Database },
  { title: "Tools", value: "Git, Docker, CI/CD, Kubernetes", icon: Wrench },
  { title: "Programming", value: "JavaScript, Python, Golang", icon: Code2 },
];

function SkillCard({ title, value, icon: Icon }: (typeof skills)[number]) {
  return (
    <article className="skill-card">
      <span className="icon-tile"><Icon size={20} /></span>
      <div><h3>{title}</h3><p>{value}</p></div>
    </article>
  );
}

function Tech({ children }: { children: React.ReactNode }) {
  return <span className="tech">{children}</span>;
}

function ProjectLink({ href, children }: { href: string; children: React.ReactNode }) {
  return <a href={href} target="_blank" rel="noreferrer">{children} <ExternalLink size={14} /></a>;
}

export default function Home() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="nav-wrap">
          <a className="brand" href="#home" aria-label="Abubakar Ali Abdulle, home">Abubakar<span>.</span></a>
          <nav className="desktop-nav" aria-label="Primary navigation">
            {navItems.map((item) => <a key={item} href={`#${item.toLowerCase()}`}>{item}</a>)}
          </nav>
          <a className="cv-link" href={links.cv} download>Download CV <Download size={14} /></a>
          <details className="mobile-menu">
            <summary aria-label="Open navigation"><Menu size={21} /></summary>
            <nav aria-label="Mobile navigation">
              {navItems.map((item) => <a key={item} href={`#${item.toLowerCase()}`}>{item}</a>)}
              <a href={links.cv} download>Download CV</a>
            </nav>
          </details>
        </div>
      </header>

      <main>
        <section className="hero section" id="home">
          <div className="hero-copy">
            <p className="eyebrow">Backend · Full-stack · Mobile · Digital systems</p>
            <h1>Abubakar Ali Abdulle</h1>
            <p className="hero-role">Software Engineer</p>
            <h2>Building practical web, mobile, backend, and digital systems.</h2>
            <p className="hero-summary">Software Engineer with hands-on experience building complete platforms, backend APIs, administrative systems, and digital service workflows.</p>
            <div className="hero-actions">
              <a className="button primary" href="#projects">View projects <ArrowRight size={16} /></a>
              <a className="button secondary" href={links.cv} download>Download CV <Download size={16} /></a>
            </div>
            <div className="social-links">
              <a href={links.github} target="_blank" rel="noreferrer"><Github size={15} /> GitHub</a>
              <a href={links.linkedin} target="_blank" rel="noreferrer"><Linkedin size={15} /> LinkedIn</a>
            </div>
          </div>
          <Image className="hero-photo" src="/profile.png" alt="Abubakar Ali Abdulle" width={320} height={380} priority sizes="(max-width: 720px) 220px, 300px" />
        </section>

        <section className="section content-section about-section" id="about">
          <div className="about-copy">
            <SectionLabel>About me</SectionLabel>
            <h2>Software Engineer building practical solutions.</h2>
            <p>I&apos;m a Software Engineer focused on building practical digital systems across web, mobile, and backend platforms.</p>
            <p>My experience includes REST APIs, administrative dashboards, mobile applications, databases, authentication, and multi-role business workflows. I have also led two award-winning digital-government projects through SomNOG.</p>
          </div>
          <div className="skills-panel">
            <SectionLabel>Technical skills</SectionLabel>
            <div className="skills-grid">{skills.map((skill) => <SkillCard key={skill.title} {...skill} />)}</div>
          </div>
        </section>

        <section className="section content-section" id="experience">
          <SectionHeading label="Experience" title="Work experience" description="Professional experience building real-world software and contributing to practical digital solutions." />
          <div className="timeline">
            <article className="timeline-row">
              <div className="timeline-date"><strong>Present</strong><span>Nairobi, Kenya</span></div>
              <span className="timeline-dot" />
              <div className="experience-card">
                <div className="experience-header">
                  <span className="icon-tile"><Building2 size={22} /></span>
                  <div><h3>Fiddo Technology</h3><p>Software Engineer</p></div>
                  <div className="experience-facts"><span><CalendarDays size={15} /> Present</span><span><MapPin size={15} /> Nairobi, Kenya</span></div>
                </div>
                <ul><li>Contributing to an internal Mini ERP system used to manage business operations.</li><li>Building backend APIs and internal business workflows.</li><li>Contributing to database design and developing administrative interfaces for internal operations.</li></ul>
              </div>
            </article>
            <article className="timeline-row">
              <div className="timeline-date"><strong>6-month internship</strong><span>Mogadishu, Somalia</span></div>
              <span className="timeline-dot" />
              <div className="experience-card">
                <div className="experience-header">
                  <span className="icon-tile"><Building2 size={22} /></span>
                  <div><h3>Tabaarak ICT Solutions</h3><p>Software Developer Intern</p></div>
                  <div className="experience-facts"><span><CalendarDays size={15} /> 6-month internship</span><span><MapPin size={15} /> Mogadishu, Somalia</span></div>
                </div>
                <ul><li>Built and contributed to real-world web and mobile software with the engineering team.</li><li>Worked on the <strong>Fuel Price Tracking System</strong> across admin web, supplier app, consumer app, and backend API.</li><li>Worked on the <strong>Hall Booking System</strong> across admin web, manager app, customer app, and backend API.</li><li>Gained hands-on experience with REST APIs, databases, authentication, deployment, and Git collaboration.</li></ul>
              </div>
            </article>
          </div>
        </section>

        <section className="section content-section" id="projects">
          <SectionHeading label="Projects" title="Featured Projects" description="A selection of real-world systems I&apos;ve built, from digital-government platforms to business tools." />
          <div className="project-list">
            <article className="project-showcase">
              <div className="project-shot"><Image src="/screenshots/vrs.png" alt="Vehicle Registration and Verification System homepage" fill sizes="(max-width: 760px) 100vw, 48vw" /></div>
              <div className="project-content">
                <div className="project-badges"><span><Trophy size={13} /> SomNOG8 — 1st Place</span><span>Digital Government Project</span></div>
                <h3>Vehicle Registration &amp; Verification System</h3>
                <p>A digital public service for online vehicle registration, ownership verification, and administrative review.</p>
                <p className="project-role"><UserRound size={18} /><span><small>My role</small>Lead Developer</span></p>
                <div className="tech-list"><Tech>Next.js</Tech><Tech>NestJS</Tech><Tech>PostgreSQL</Tech><Tech>Prisma</Tech><Tech>Docker</Tech><Tech>Kubernetes</Tech></div>
                <div className="project-links"><ProjectLink href="https://vehicle-registration-system-nine.vercel.app/">Live Demo</ProjectLink><ProjectLink href="https://github.com/somnog/Vehicle-Registration-System">GitHub</ProjectLink></div>
              </div>
            </article>
            <article className="project-showcase">
              <div className="project-shot"><Image src="/screenshots/property_system.png" alt="Property Registration System sign-in screen" fill sizes="(max-width: 760px) 100vw, 48vw" /></div>
              <div className="project-content">
                <div className="project-badges"><span><Trophy size={13} /> SomNOG7 — 1st Place</span><span>Digital Government Project</span></div>
                <h3>Property Registration System</h3>
                <p>A digital property registration platform for secure land and property workflows, ownership verification, and administrative approval.</p>
                <p className="project-role"><UserRound size={18} /><span><small>My role</small>Lead Developer</span></p>
                <div className="tech-list"><Tech>MongoDB</Tech><Tech>Express</Tech><Tech>React</Tech><Tech>Node.js</Tech></div>
                <div className="project-links"><ProjectLink href="https://propertymanagmentfrontend.vercel.app/">Live Demo</ProjectLink><ProjectLink href="https://github.com/babukre1/SomNOG7-Property-Managment">GitHub</ProjectLink></div>
              </div>
            </article>
            <article className="project-showcase">
              <div className="project-shot"><Image src="/screenshots/fuel_track_system.png" alt="Fuel Price Tracking System administration dashboard" fill sizes="(max-width: 760px) 100vw, 48vw" /></div>
              <div className="project-content">
                <p className="project-type">Industry project</p>
                <h3>Fuel Price Tracking System</h3>
                <p>A multi-platform system for comparing fuel prices, finding nearby lower-cost stations, and managing station information.</p>
                <p className="project-role"><UserRound size={18} /><span><small>My role</small>Software Developer Intern</span></p>
                <div className="tech-list"><Tech>Admin Web</Tech><Tech>Flutter</Tech><Tech>Node.js</Tech><Tech>MongoDB</Tech></div>
              </div>
            </article>
            <article className="project-showcase no-image">
              <div className="project-placeholder"><CalendarDays size={38} /><span>Multi-role booking platform</span></div>
              <div className="project-content">
                <p className="project-type">Industry project</p>
                <h3>Hall Booking System</h3>
                <p>A multi-role booking platform with separate workflows for administrators, venue managers, and customers.</p>
                <p className="project-role"><UserRound size={18} /><span><small>My role</small>Software Developer Intern</span></p>
                <div className="tech-list"><Tech>PostgreSQL</Tech><Tech>Prisma</Tech><Tech>Express</Tech><Tech>React</Tech><Tech>Flutter</Tech></div>
              </div>
            </article>
          </div>
        </section>

        <section className="section content-section" id="achievements">
          <SectionHeading label="Achievements" title="Achievements" description="Recognition and participation in competitions, hackathons, and community events." />
          <div className="achievement-list">
            <Achievement year="2025" title="1st Place — SomNOG8 Software Development Track" description="Won 1st place in the Software Development Track at SomNOG8." winner />
            <Achievement year="2024" title="1st Place — SomNOG7 Software Development Track" description="Won 1st place in the Software Development Track at SomNOG7." winner />
            <Achievement year="2025" title="PyCon Somalia Participant" description="Participated in PyCon Somalia." />
            <Achievement year="2024" title="PyCon Somalia Participant" description="Participated in PyCon Somalia." />
            <Achievement year="2025" title="MTI Institute Hackathon Participant" description="Participated in the MTI Institute Hackathon." />
          </div>
        </section>

        <section className="contact section" id="contact">
          <div><SectionLabel>Contact</SectionLabel><h2>Let&apos;s connect.</h2><p>I&apos;m open to Software Engineering, Backend, Full-Stack, and digital systems opportunities.</p></div>
          <div className="contact-details">
            <a href={links.email}><Mail size={17} /><span><small>Email</small>abubakar4official@gmail.com</span></a>
            <a href={links.phone}><Phone size={17} /><span><small>Phone</small>+252 611602428</span></a>
            <a href={links.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17} /><span><small>LinkedIn</small>View profile</span></a>
            <a href={links.github} target="_blank" rel="noreferrer"><Github size={17} /><span><small>GitHub</small>babukre1</span></a>
          </div>
        </section>
      </main>

      <footer className="site-footer section"><p>© {new Date().getFullYear()} Abubakar Ali Abdulle</p><div><a href={links.github} target="_blank" rel="noreferrer">GitHub</a><a href={links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></div></footer>
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="section-label"><span />{children}</p>;
}

function SectionHeading({ label, title, description }: { label: string; title: string; description: string }) {
  return <div className="section-heading"><SectionLabel>{label}</SectionLabel><h2>{title}</h2><p>{description}</p></div>;
}

function Achievement({ year, title, description, winner = false }: { year: string; title: string; description: string; winner?: boolean }) {
  return (
    <article className={`achievement${winner ? " winner" : ""}`}>
      <span className="achievement-icon">{winner ? <Trophy size={22} /> : <Users size={22} />}</span>
      <strong className="achievement-year">{year}</strong>
      <div><h3>{title}</h3><p>{description}</p></div>
      {winner && <span className="winner-badge">Winner</span>}
    </article>
  );
}
