import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { notFound } from "next/navigation";
import { getProject, projects, type ProjectImage } from "../projects";
import ScrollToTop from "./scroll-to-top";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  return {
    title: `${project.title} | Abubakar Ali Abdulle`,
    description: project.summary,
    alternates: { canonical: `/projects/${slug}` },
    openGraph: { title: project.title, description: project.summary, url: `/projects/${slug}`, type: "article", images: project.cover ? [project.cover.src] : project.previewPhones ? [project.previewPhones[0].src] : [] },
  };
}

function Screenshot({ image, kind, featured = false }: { image: ProjectImage; kind: "web" | "mobile"; featured?: boolean }) {
  return (
    <figure className={`detail-shot ${kind}${featured ? " featured" : ""}`}>
      <a href={image.src} target="_blank" rel="noreferrer" aria-label={`Open full-size image: ${image.caption}`}>
        <Image src={image.src} alt={image.alt} fill sizes={kind === "mobile" ? "(max-width: 640px) 30vw, 260px" : featured ? "(max-width: 760px) 90vw, 1100px" : "(max-width: 760px) 90vw, 550px"} />
      </a>
      <figcaption>{image.caption}</figcaption>
    </figure>
  );
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const index = projects.indexOf(project);
  const next = projects[(index + 1) % projects.length];

  return (
    <div className="site-shell project-page">
      <ScrollToTop slug={slug} />
      <header className="site-header">
        <div className="nav-wrap">
          <Link className="brand" href="/#home" aria-label="Abubakar Ali Abdulle, home">Abubakar<span>.</span></Link>
          <nav className="detail-nav" aria-label="Primary navigation">
            <Link href="/#experience">Experience</Link>
            <Link href="/#projects">Projects</Link>
            <Link href="/#contact">Contact</Link>
          </nav>
          <Link className="detail-nav-back" href="/#projects"><ArrowLeft size={15} /> All projects</Link>
        </div>
      </header>

      <main className="detail-main section">
        <Link className="detail-return" href="/#projects"><ArrowLeft size={16} /> All projects</Link>
        <div className="detail-hero">
          <div className="detail-hero-copy">
            <p className="detail-kicker"><span>{String(index + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}</span>{project.category}</p>
            <h1>{project.title}</h1>
            <p className="detail-deck">{project.summary}</p>
            {project.award && <p className="detail-award">{project.award}</p>}
          </div>
          <aside className="detail-facts" aria-label="Project facts">
            <div><span>My role</span><strong>{project.role}</strong></div>
            <div><span>Built with</span><strong>{project.stack.join(" · ")}</strong></div>
            {project.links && <div className="detail-external-links"><span>Explore</span>{project.links.map((link) => <a key={link.href} href={link.href} target="_blank" rel="noreferrer">{link.label} <ExternalLink size={14} /></a>)}</div>}
          </aside>
        </div>

        <section className="detail-intro" aria-labelledby="overview-title">
          <div className="detail-section-label">Overview</div>
          <div>
            <h2 id="overview-title">What the system does</h2>
            {project.overview.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            <ul className="detail-points">{project.points.map((point) => <li key={point}>{point}</li>)}</ul>
          </div>
        </section>

        {project.sections.map((section, sectionIndex) => (
          <section className="detail-section" key={section.label} aria-labelledby={`section-${sectionIndex}`}>
            <div className="detail-section-label">{section.label}</div>
            <div className="detail-section-body">
              <h2 id={`section-${sectionIndex}`}>{section.title}</h2>
              <p>{section.description}</p>
              {section.images && <div className={`detail-gallery ${section.kind === "mobile" ? "mobile-gallery" : "web-gallery-detail"}`}>
                {section.images.map((image, imageIndex) => <Screenshot key={image.src} image={image} kind={section.kind ?? "web"} featured={section.kind !== "mobile" && imageIndex === 0 && section.images!.length > 1} />)}
              </div>}
            </div>
          </section>
        ))}

        <nav className="detail-next" aria-label="More projects">
          <Link href="/#projects"><ArrowLeft size={16} /> All projects</Link>
          <Link href={`/projects/${next.slug}`}><span>Next project</span><strong>{next.title}</strong><ArrowRight size={18} /></Link>
        </nav>
      </main>
      <footer className="site-footer section"><p>© {new Date().getFullYear()} Abubakar Ali Abdulle</p><div><Link href="/#projects">Projects</Link><Link href="/#contact">Contact</Link></div></footer>
    </div>
  );
}
