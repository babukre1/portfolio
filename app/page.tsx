import Image from "next/image";
import { ArrowRight, Building2, CheckCircle2, ChevronRight, Code2, Database, ExternalLink, Github, GraduationCap, Layers3, Linkedin, Mail, MapPin, Menu, ServerCog, Smartphone, Trophy, Workflow } from "lucide-react";

const github = "https://github.com/babukre1";
const linkedin = "https://www.linkedin.com/in/abuubakarali/";
const email = "mailto:abubakrwindowz@gmail.com";
const skills = [
  { label: "Backend", icon: ServerCog, items: ["Node.js", "Express.js", "NestJS", "REST APIs", "Prisma"] },
  { label: "Frontend", icon: Code2, items: ["React", "Next.js", "JavaScript", "TypeScript"] },
  { label: "Mobile", icon: Smartphone, items: ["Flutter"] },
  { label: "Databases", icon: Database, items: ["PostgreSQL", "MongoDB"] },
  { label: "Programming", icon: Layers3, items: ["JavaScript", "Python", "Golang"] },
  { label: "DevOps & tools", icon: Workflow, items: ["Git", "GitHub", "Docker", "CI/CD", "Kubernetes"] },
];
const navItems = ["About", "Experience", "Projects", "Skills", "Achievements", "Contact"];

function ArrowLink({ href, children, external = false }: { href: string; children: React.ReactNode; external?: boolean }) {
  return <a className="text-link" href={href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined}>{children}{external ? <ExternalLink size={14} aria-hidden="true" /> : <ArrowRight size={15} aria-hidden="true" />}</a>;
}
function Tag({ children }: { children: React.ReactNode }) { return <span className="tag">{children}</span>; }

export default function Home() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="nav-wrap">
          <a href="#home" className="brand" aria-label="Abubakar Ali Abdulle, home">Abubakar<span>.</span></a>
          <nav className="desktop-nav" aria-label="Primary navigation">{navItems.map((item) => <a key={item} href={`#${item.toLowerCase()}`}>{item}</a>)}</nav>
          <a className="nav-cta" href="#projects">View projects <ArrowRight size={15} /></a>
          <details className="mobile-menu"><summary aria-label="Open navigation"><Menu size={22} /></summary><nav aria-label="Mobile navigation">{navItems.map((item) => <a key={item} href={`#${item.toLowerCase()}`}>{item}</a>)}</nav></details>
        </div>
      </header>

      <main>
        <section className="hero section" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot" /> Open to software engineering opportunities</div>
            <p className="hero-kicker">Abubakar Ali Abdulle</p>
            <h1>Software Engineer building reliable digital systems.</h1>
            <p className="hero-lede">I build web, mobile, and backend systems that solve real-world problems—from multi-role business platforms to digital public-service workflows.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">View my work <ArrowRight size={17} /></a>
              <a className="button button-secondary" href={github} target="_blank" rel="noreferrer"><Github size={17} /> GitHub</a>
              <a className="icon-button" href={linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={19} /></a>
            </div>
          </div>
          <div className="hero-visual" aria-label="Profile">
            <div className="portrait-wrap"><Image src="/profile.png" alt="Abubakar Ali Abdulle" width={520} height={620} priority sizes="(max-width: 768px) 80vw, 420px" /></div>
          </div>
        </section>

        <section className="stats section" aria-label="Professional highlights">
          <div><strong>2×</strong><span>SomNOG Best Project Winner</span></div><div><strong>6 months</strong><span>Industry internship experience</span></div><div><strong>4</strong><span>Complete systems highlighted</span></div><div><strong>Web + Mobile</strong><span>Multi-platform development</span></div>
        </section>

        <section className="section split-section" id="about">
          <div><p className="section-label">01 / About</p><h2>Practical engineering, grounded in real workflows.</h2></div>
          <div className="about-copy"><p>I am a Software Engineer focused on designing and building practical digital systems. My experience spans backend APIs, web applications, mobile applications, database-driven platforms, and administrative systems.</p><p>I built production-oriented projects during a six-month software development internship and currently contribute to an internal ERP platform for a Nairobi-based technology startup. I also led award-winning digital-government projects at SomNOG7 and SomNOG8.</p></div>
        </section>

        <section className="section" id="experience">
          <div className="section-heading"><div><p className="section-label">02 / Experience</p><h2>Building systems beyond the classroom.</h2></div><p>Hands-on experience across architecture, APIs, databases, administrative interfaces, mobile apps, deployment, and team collaboration.</p></div>
          <div className="timeline">
            <article className="timeline-item"><div className="timeline-marker" /><div className="timeline-meta"><span>Current</span><strong>Nairobi-based technology startup</strong></div><div className="timeline-content"><h3>Software Developer</h3><p>Contributing to an internal Mini ERP that supports business workflows and day-to-day operations, with work spanning backend architecture, database design, APIs, and administrative interfaces.</p><div className="tag-list"><Tag>Mini ERP</Tag><Tag>Business workflows</Tag><Tag>Backend architecture</Tag></div></div></article>
            <article className="timeline-item"><div className="timeline-marker" /><div className="timeline-meta"><span>6 months</span><strong>Tabaarak ICT Solutions</strong></div><div className="timeline-content"><h3>Software Developer Intern</h3><p>Worked on complete web and mobile products, including REST APIs, authentication and authorization, database-backed workflows, deployment, and Git-based collaboration.</p><ul className="compact-list"><li><strong>Fuel Price Tracking System:</strong> web administration, supplier and consumer mobile apps, and a shared backend API.</li><li><strong>Hall Booking System:</strong> admin dashboard, manager and customer mobile apps, and a multi-role booking API.</li></ul></div></article>
          </div>
        </section>

        <section className="section" id="projects">
          <div className="section-heading"><div><p className="section-label">03 / Featured work</p><h2>Complete systems, not isolated demos.</h2></div><p>Selected work showing how I translate real operational problems into structured, multi-role digital products.</p></div>
          <div className="featured-grid">
            <article className="project-card project-featured">
              <div className="project-image"><Image src="/vehicle-registration.png" alt="Vehicle Registration and Verification System interface" fill sizes="(max-width: 900px) 100vw, 50vw" /></div>
              <div className="project-body"><div className="badge-row"><span className="award-badge"><Trophy size={14} /> 1st Place — SomNOG8</span><span className="category-badge">Digital Government Project</span></div><p className="project-index">Featured project / 01</p><h3>Vehicle Registration &amp; Verification System</h3><p>A digital public-service workflow for online vehicle registration, administrative review, approval or rejection, and record verification. I led development of the role-based system and its structured backend workflow.</p><div className="component-list"><span>Citizen submission</span><span>Administrative review</span><span>Vehicle verification</span></div><div className="tag-list"><Tag>NestJS</Tag><Tag>PostgreSQL</Tag><Tag>Prisma</Tag><Tag>Next.js</Tag><Tag>Docker</Tag><Tag>Kubernetes</Tag></div><div className="project-links"><ArrowLink href="https://vehicle-registration-system-nine.vercel.app/" external>Live system</ArrowLink><ArrowLink href="https://github.com/somnog/Vehicle-Registration-System" external>Source code</ArrowLink></div></div>
            </article>
            <article className="project-card project-featured">
              <div className="project-image"><Image src="/property-management.png" alt="Property Registration System interface" fill sizes="(max-width: 900px) 100vw, 50vw" /></div>
              <div className="project-body"><div className="badge-row"><span className="award-badge"><Trophy size={14} /> 1st Place — SomNOG7</span><span className="category-badge">Digital Government Project</span></div><p className="project-index">Featured project / 02</p><h3>Property Registration System</h3><p>A digital property and owner registration platform replacing manual paperwork with centralized records, administrative verification, approval workflows, and role-based access. I served as lead developer.</p><div className="component-list"><span>Digital registration</span><span>Centralized records</span><span>Approval workflow</span></div><div className="tag-list"><Tag>MongoDB</Tag><Tag>Express</Tag><Tag>React</Tag><Tag>Node.js</Tag></div><div className="project-links"><ArrowLink href="https://propertymanagmentfrontend.vercel.app/" external>Live system</ArrowLink><ArrowLink href="https://github.com/babukre1/SomNOG7-Property-Managment" external>Source code</ArrowLink></div></div>
            </article>
          </div>
          <div className="supporting-grid">
            <article className="supporting-card"><div className="card-icon"><MapPin /></div><p className="project-index">Industry project / 03</p><h3>Fuel Price Tracking System</h3><p>Helps consumers locate nearby fuel stations and compare prices while giving suppliers tools to maintain fuel information and administrators oversight of the platform.</p><div className="architecture"><strong>System components</strong><span>Admin web dashboard · Supplier Flutter app · Consumer Flutter app · REST API</span></div><div className="tag-list"><Tag>MongoDB</Tag><Tag>Express</Tag><Tag>React</Tag><Tag>Node.js</Tag><Tag>Flutter</Tag></div></article>
            <article className="supporting-card"><div className="card-icon"><Building2 /></div><p className="project-index">Industry project / 04</p><h3>Hall Booking System</h3><p>A complete multi-role venue booking platform connecting customer reservations with manager operations and centralized administration.</p><div className="architecture"><strong>System components</strong><span>Admin web dashboard · Manager Flutter app · Customer Flutter app · Backend API</span></div><div className="tag-list"><Tag>PostgreSQL</Tag><Tag>Prisma</Tag><Tag>Express</Tag><Tag>React</Tag><Tag>Flutter</Tag></div></article>
          </div>
        </section>

        <section className="government-section"><div className="section government-inner"><div className="government-copy"><p className="section-label light">Digital public services</p><h2>Building clearer, more accountable service workflows.</h2><p>My SomNOG projects explore how thoughtful software can replace fragmented, manual processes with structured digital services—without losing sight of the people and administrators who use them.</p></div><div className="government-capabilities">{["Digital registration", "Centralized records", "Verification workflows", "Administrative approval", "Role-based permissions", "Secure APIs & structured data"].map((item) => <div key={item}><CheckCircle2 size={18} />{item}</div>)}</div></div></section>

        <section className="section" id="skills"><div className="section-heading"><div><p className="section-label">04 / Capabilities</p><h2>A practical full-stack toolkit.</h2></div><p>Technologies I use to build and deliver backend, web, mobile, and infrastructure solutions.</p></div><div className="skills-grid">{skills.map(({ label, icon: Icon, items }) => <article className="skill-card" key={label}><Icon size={21} /><h3>{label}</h3><div className="tag-list">{items.map((item) => <Tag key={item}>{item}</Tag>)}</div></article>)}</div></section>

        <section className="section achievement-layout" id="achievements">
          <div><p className="section-label">05 / Recognition</p><h2>Achievements &amp; education.</h2><p className="muted">Competition wins and community participation supporting a strong technical foundation.</p></div>
          <div className="achievement-list"><article className="achievement major"><Trophy /><div><span>2025 · Software Development Track</span><h3>1st Place — SomNOG8</h3></div><strong>Best Project</strong></article><article className="achievement major"><Trophy /><div><span>2024 · Software Development Track</span><h3>1st Place — SomNOG7</h3></div><strong>Best Project</strong></article><article className="achievement"><Code2 /><div><span>2024 &amp; 2025</span><h3>PyCon Somalia Participant</h3></div></article><article className="achievement"><Code2 /><div><span>2025</span><h3>MTI Institute Hackathon Participant</h3></div></article><article className="education-card"><GraduationCap /><div><span>Expected September 2026</span><h3>Bachelor in Computer Applications</h3><p>Jamhuuriya University of Science &amp; Technology</p><div className="education-metrics"><strong>3.8 CGPA</strong><strong>Top 5% of department</strong></div></div></article></div>
        </section>

        <section className="contact-section section" id="contact"><div><p className="section-label light">Let&apos;s connect</p><h2>Let&apos;s build something useful.</h2><p>I&apos;m open to Software Engineering, Backend, Full-Stack, and digital-systems opportunities. If you&apos;re building a practical product or modernizing a service, I&apos;d be glad to talk.</p></div><div className="contact-actions"><a className="button button-light" href={email}><Mail size={18} /> Get in touch</a><a href={github} target="_blank" rel="noreferrer">GitHub <ChevronRight size={16} /></a><a href={linkedin} target="_blank" rel="noreferrer">LinkedIn <ChevronRight size={16} /></a></div></section>
      </main>
      <footer className="site-footer section"><a href="#home" className="brand">Abubakar<span>.</span></a><p>Software Engineer · Backend, full-stack &amp; digital systems</p><p>© {new Date().getFullYear()} Abubakar Ali Abdulle</p></footer>
    </div>
  );
}
