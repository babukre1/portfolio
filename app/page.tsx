import Image from "next/image";
import {
  ArrowRight,
  Download,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Menu,
  Phone,
  Trophy,
} from "lucide-react";

const links = {
  github: "https://github.com/babukre1",
  linkedin: "https://www.linkedin.com/in/abuubakarali/",
  email: "mailto:abubakar4official@gmail.com",
  phone: "tel:+252611602428",
  cv: "/Abubakar-Ali-Abdulle-CV.pdf",
};

const navItems = ["About", "Experience", "Projects", "Achievements", "Contact"];

const toolkit = [
  ["Backend", "Node.js, Express, NestJS, Prisma"],
  ["Frontend", "React, Next.js"],
  ["Mobile", "Flutter"],
  ["Databases", "PostgreSQL, MongoDB"],
  ["Tools", "Git, Docker, CI/CD, Kubernetes"],
  ["Programming", "JavaScript, Python, Golang"],
];

function Tech({ children }: { children: React.ReactNode }) {
  return <span className="tech">{children}</span>;
}

function ProjectLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      {children} <ExternalLink size={13} aria-hidden="true" />
    </a>
  );
}

export default function Home() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="nav-wrap">
          <a className="brand" href="#home" aria-label="Abubakar Ali Abdulle, home">
            Abubakar<span>.</span>
          </a>
          <nav className="desktop-nav" aria-label="Primary navigation">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`}>{item}</a>
            ))}
          </nav>
          <a className="cv-link" href={links.cv} download>
            Download CV <Download size={14} />
          </a>
          <details className="mobile-menu">
            <summary aria-label="Open navigation"><Menu size={21} /></summary>
            <nav aria-label="Mobile navigation">
              {navItems.map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`}>{item}</a>
              ))}
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
            <p className="hero-summary">
              Software Engineer with hands-on experience building complete platforms,
              backend APIs, administrative systems, and digital service workflows.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#projects">View projects <ArrowRight size={16} /></a>
              <a className="button secondary" href={links.cv} download>Download CV <Download size={16} /></a>
            </div>
            <div className="social-links">
              <a href={links.github} target="_blank" rel="noreferrer"><Github size={15} /> GitHub</a>
              <a href={links.linkedin} target="_blank" rel="noreferrer"><Linkedin size={15} /> LinkedIn</a>
            </div>
          </div>
          <Image
            className="hero-photo"
            src="/profile.png"
            alt="Abubakar Ali Abdulle"
            width={320}
            height={380}
            priority
            sizes="(max-width: 720px) 220px, 300px"
          />
        </section>

        <section className="section content-section" id="about">
          <div className="section-intro">
            <p className="section-label">About</p>
            <h2>Practical software for real workflows.</h2>
          </div>
          <div className="about-content">
            <div className="about-copy">
              <p>I am a Software Engineer focused on building practical digital systems across web, mobile, and backend platforms.</p>
              <p>My experience includes REST APIs, administrative dashboards, mobile applications, databases, authentication, and multi-role business workflows. I have also led two award-winning digital-government projects through SomNOG.</p>
            </div>
            <dl className="toolkit" aria-label="Technical toolkit">
              {toolkit.map(([label, value]) => (
                <div key={label}><dt>{label}</dt><dd>{value}</dd></div>
              ))}
            </dl>
          </div>
        </section>

        <section className="section content-section" id="experience">
          <div className="section-intro">
            <p className="section-label">Experience</p>
            <h2>Real-world software development.</h2>
          </div>
          <div className="experience-list">
            <article className="experience-item">
              <div className="experience-meta"><span>Present</span><strong>Fiddo Technology</strong><small>Nairobi, Kenya</small></div>
              <div>
                <h3>Software Engineer</h3>
                <p>Contributing to an internal Mini ERP system used to manage business operations.</p>
                <ul>
                  <li>Building backend APIs and internal business workflows.</li>
                  <li>Contributing to database design and software architecture.</li>
                  <li>Developing administrative interfaces for internal operations.</li>
                </ul>
              </div>
            </article>
            <article className="experience-item">
              <div className="experience-meta"><span>6-month internship</span><strong>Tabaarak ICT Solutions</strong><small>Mogadishu, Somalia</small></div>
              <div>
                <h3>Software Developer Intern</h3>
                <p>Built and contributed to real-world web and mobile software with the engineering team.</p>
                <ul>
                  <li><strong>Fuel Price Tracking:</strong> admin web, supplier app, consumer app, and backend API.</li>
                  <li><strong>Hall Booking:</strong> admin web, manager app, customer app, and backend API.</li>
                  <li>Worked across REST APIs, databases, authentication, deployment, and Git collaboration.</li>
                </ul>
              </div>
            </article>
          </div>
        </section>

        <section className="section content-section" id="projects">
          <div className="section-intro project-intro">
            <div><p className="section-label">Projects</p><h2>Selected systems I have built.</h2></div>
            <p>Four projects that show complete workflows across web, mobile, backend, and administration.</p>
          </div>
          <div className="projects-grid">
            <article className="project featured">
              <div className="project-labels"><span className="award"><Trophy size={13} /> SomNOG8 — 1st Place</span><span>Digital Government Project</span></div>
              <h3>Vehicle Registration &amp; Verification System</h3>
              <p>A digital platform for vehicle registration and verification, including online submissions, administrative review, approval or rejection, authentication, and centralized records.</p>
              <p className="role"><strong>Role:</strong> Lead Developer</p>
              <div className="tech-list"><Tech>NestJS</Tech><Tech>PostgreSQL</Tech><Tech>Prisma</Tech><Tech>Next.js</Tech><Tech>Docker</Tech><Tech>Kubernetes</Tech></div>
              <div className="project-links"><ProjectLink href="https://vehicle-registration-system-nine.vercel.app/">Live demo</ProjectLink><ProjectLink href="https://github.com/somnog/Vehicle-Registration-System">GitHub</ProjectLink></div>
            </article>
            <article className="project featured">
              <div className="project-labels"><span className="award"><Trophy size={13} /> SomNOG7 — 1st Place</span><span>Digital Government Project</span></div>
              <h3>Property Registration System</h3>
              <p>A digital property and owner registration platform replacing manual workflows with centralized records, administrative verification, approval, and role-based access.</p>
              <p className="role"><strong>Role:</strong> Lead Developer</p>
              <div className="tech-list"><Tech>MongoDB</Tech><Tech>Express</Tech><Tech>React</Tech><Tech>Node.js</Tech></div>
              <div className="project-links"><ProjectLink href="https://propertymanagmentfrontend.vercel.app/">Live demo</ProjectLink><ProjectLink href="https://github.com/babukre1/SomNOG7-Property-Managment">GitHub</ProjectLink></div>
            </article>
            <article className="project">
              <p className="project-type">Industry project</p>
              <h3>Fuel Price Tracking System</h3>
              <p>A multi-platform system that lets users compare fuel prices and discover nearby, lower-cost fuel stations.</p>
              <p className="components">Admin Web · Supplier Mobile App · Consumer Mobile App</p>
              <div className="tech-list"><Tech>MERN</Tech><Tech>Flutter</Tech></div>
            </article>
            <article className="project">
              <p className="project-type">Industry project</p>
              <h3>Hall Booking System</h3>
              <p>A multi-role booking platform with separate workflows for administrators, venue managers, and customers.</p>
              <p className="components">Admin Web · Manager Mobile App · Customer Mobile App</p>
              <div className="tech-list"><Tech>PostgreSQL</Tech><Tech>Prisma</Tech><Tech>Express</Tech><Tech>React</Tech><Tech>Flutter</Tech></div>
            </article>
          </div>
        </section>

        <section className="section content-section" id="achievements">
          <div className="section-intro">
            <p className="section-label">Achievements</p>
            <h2>Recognition and participation.</h2>
          </div>
          <div className="achievement-list">
            <article className="achievement major"><span>2025</span><h3>1st Place — SomNOG8 Software Development Track</h3><strong>Winner</strong></article>
            <article className="achievement major"><span>2024</span><h3>1st Place — SomNOG7 Software Development Track</h3><strong>Winner</strong></article>
            <article className="achievement"><span>2025</span><h3>PyCon Somalia Participant</h3></article>
            <article className="achievement"><span>2024</span><h3>PyCon Somalia Participant</h3></article>
            <article className="achievement"><span>2025</span><h3>MTI Institute Hackathon Participant</h3></article>
          </div>
        </section>

        <section className="contact section" id="contact">
          <div>
            <p className="section-label">Contact</p>
            <h2>Let&apos;s connect.</h2>
            <p>I&apos;m open to Software Engineering, Backend, Full-Stack, and digital systems opportunities.</p>
          </div>
          <div className="contact-details">
            <a href={links.email}><Mail size={16} /><span><small>Email</small>abubakar4official@gmail.com</span></a>
            <a href={links.phone}><Phone size={16} /><span><small>Phone</small>+252 611602428</span></a>
            <a href={links.linkedin} target="_blank" rel="noreferrer"><Linkedin size={16} /><span><small>LinkedIn</small>View profile</span></a>
            <a href={links.github} target="_blank" rel="noreferrer"><Github size={16} /><span><small>GitHub</small>babukre1</span></a>
          </div>
        </section>
      </main>

      <footer className="site-footer section">
        <p>© {new Date().getFullYear()} Abubakar Ali Abdulle</p>
        <div><a href={links.github} target="_blank" rel="noreferrer">GitHub</a><a href={links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></div>
      </footer>
    </div>
  );
}
