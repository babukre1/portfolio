import React from "react";
import {
  Github,
  Linkedin,
  Mail,
  Trophy,
  Globe,
  Atom,
  Calendar,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-green-100">
      {/* Navigation */}
      <nav className="flex justify-center space-x-8 py-6 text-sm font-medium text-gray-600 sticky top-0 bg-white/80 backdrop-blur-sm z-50">
        <a href="#" className="hover:text-black transition-colors">
          Home
        </a>
        <a href="#projects" className="hover:text-black transition-colors">
          Projects
        </a>
        <a href="#" className="hover:text-black transition-colors">
          Blog
        </a>
      </nav>

      <main className="max-w-5xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <section className="mb-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Hey there!, I'm{" "}
            <span className="text-black bg-gradient-to-r from-green-400/20 to-green-200/20 px-2 rounded-lg">
              [Abubakar]
            </span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mb-8">
            Software Engineer. Currently specializing in Backend (Goland /
            Node.js) and Full-stack Engineering.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href={"https://github.com/babukre1"} className="">
              <SocialButton icon={<Github size={18} />} label="GitHub" />
            </Link>
            <Link href={"https://www.linkedin.com/in/abuubakarali/"}>
              <SocialButton icon={<Linkedin size={18} />} label="LinkedIn" />
            </Link>
            <Link
              href={
                "https://mail.google.com/mail/u/0/?fs=1&to=abubakrwindowz@gmail.com"
              }
            >
              <SocialButton icon={<Mail size={18} />} label="Email" />
            </Link>
          </div>
        </section>

        {/* About Me Section */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold mb-10 border-b pb-4">About Me</h2>
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="relative group">
              {/* Decorative dots background */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[radial-gradient(#e5e7eb_2px,transparent_2px)] [background-size:12px_12px] -z-10 opacity-50 group-hover:opacity-100 transition-opacity" />
              <div className="w-48 h-48 rounded-2xl overflow-hidden bg-gray-200 grayscale hover:grayscale-0 transition-all duration-500 shadow-lg rotate-3 hover:rotate-0">
                <Image
                  src="/profile.png"
                  alt="Profile"
                  className="w-full h-full object-cover"
                  width={100}
                  height={100}
                />
              </div>
            </div>
            <div className="flex-1 space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                Hi Software Engineer. A self-taught developer with an interest
                in Computer Science. Currently specializing in Frontend (React /
                Next.js) in an environment of Full-stack Engineering.
              </p>
              <p>
                I experience with{" "}
                <span className="text-green-600 font-medium">
                  no-code tools
                </span>{" "}
                and{" "}
                <span className="text-green-600 font-medium">open source</span>.
                Currently experienced with no-code tools and communications,
                sample experience, software and development.
              </p>
              <p>
                I think and type to experience in interest with{" "}
                <span className="text-green-600 font-medium underline underline-offset-4 decoration-green-300">
                  open source
                </span>{" "}
                and open sources are incredibly customizable interests for
                extend or projects of software logic.
              </p>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-24">
          <h2 className="text-3xl font-bold mb-10 border-b pb-4">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              title="Property Management System"
              desc="A web application built with Next.js and Tailwind to solve a really interesting problem."
              tags={["React.js", "Node.js", "MongoDB"]}
              link="https://propertymanagmentfrontend.vercel.app/"
              image="/property-management.png"
            />
            <ProjectCard
              title="Vehicle Regsitration system"
              desc="A cross-platform mobile utility app aimed at improving productivity."
              tags={["Next.js", "Nest.js", "PostgreSQL", "Prisma"]}
              link="http://vehicle-registration-system-nine.vercel.app/"
              image="/vehicle-registration.png"
            />
            <ProjectCard
              title="Aura Interiors"
              desc="Interactive dashboard for visualizing complex data sets."
              tags={["Next.js", "Tailwind.css", "UI/UX"]}
              link="https://aura-interiors.vercel.app/"
              image="/aura-interiors.png"
            />
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold mb-10 border-b pb-4">Experience</h2>

          {/* <div className="mb-16">
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <span className="w-8 h-1 bg-green-500 rounded-full"></span>
              Work History
            </h3>
            <div className="space-y-0">
              <ExperienceItem
                date="Jan 2023"
                company="Company Name"
                title="Position title"
                desc="Develops as frontend engineer. development of full-stack mixtures and development workflows."
              />
              <ExperienceItem
                date="Dec 2021"
                company="Company Name"
                title="Position title"
                desc="Develops as frontend engineer. develop modern (React / Next.js) and full-stack engineers."
              />
              <ExperienceItem
                date="Feb 2023"
                company="Company Name"
                title="Position Engineer"
                desc="Develops as frontend engineer. develops modern software solutions and university engineers."
              />
              <ExperienceItem
                date="Jan 2023"
                isLast
                company="Company Name"
                title="Position Engineer"
                desc="Develops as frontend engineer. develops on full-stack projects."
              />
            </div>
          </div> */}

          <div>
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <span className="w-8 h-1 bg-green-500 rounded-full"></span>
              Workshops & Hackathons
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card
                icon={<Trophy className="text-green-600" />}
                title="SomNOG7 - Best Project"
                date="Dec 20, 2024"
                desc="SomNOG7 Workshops - software development track"
              />
              <Card
                icon={<Globe className="text-green-600" />}
                title="SomNOG8 - Best Project"
                date="Dec 17, 2025"
                desc="SomNOG8 Workshops - software development track..."
              />
              <Card
                icon={<Atom className="text-green-600" />}
                title="Pycon Somalia hackathon"
                date="Aug 20, 2023"
                desc="React Workshop in client with Next.js & components..."
              />
              <Card
                icon={<Atom className="text-green-600" />}
                title="Pycon Somalia hackathon"
                date="Aug 20, 2024"
                desc="React Workshop in client with Next.js & components..."
              />
              <Card
                icon={<Atom className="text-green-600" />}
                title="Ramadan Challenge - MTI institute"
                date="March 10, 2024"
                desc="React Workshop in client with Next.js & components..."
              />
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t pt-12 pb-8 text-center text-sm text-gray-500">
          <p className="mb-2">Contact info · 0611602428 or abubakrwindowz@gmail.com</p>
          <p>Designed and Developed by [Abubakar Ali] with Next.js</p>
        </footer>
      </main>
    </div>
  );
}

// Sub-components for cleaner code
function SocialButton({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <button className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-100 hover:scale-105 active:scale-95 transition-all duration-200 text-sm font-medium group cursor-pointer">
      <span className="group-hover:text-green-600 transition-colors">
        {icon}
      </span>{" "}
      {label}
    </button>
  );
}

function ProjectCard({
  title,
  desc,
  tags,
  link,
  image,
}: {
  title: string;
  desc: string;
  tags: string[];
  link: string;
  image?: string;
}) {
  return (
    <div className="group h-full flex flex-col rounded-2xl border border-gray-100 bg-gray-50/50 hover:bg-white hover:border-green-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
      <div className="h-48 overflow-hidden bg-gray-200 relative">
        {/* Image Placeholder or Actual Image */}
        <img
          src={image || "/api/placeholder/400/300"}
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-bold mb-2 group-hover:text-green-700 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 mb-6 flex-1 text-sm leading-relaxed">
          {desc}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-white border border-gray-200 rounded-md text-xs font-medium text-gray-500"
            >
              {tag}
            </span>
          ))}
        </div>

        <a
          href={link}
          className="mt-auto w-full py-2.5 px-4 bg-white border border-gray-200 text-gray-700 font-medium rounded-xl hover:bg-green-600 hover:text-white hover:border-green-600 transition-all duration-300 text-center flex items-center justify-center gap-2 text-sm shadow-sm group-hover:shadow-md"
        >
          View Project <span className="text-lg leading-none mb-0.5">→</span>
        </a>
      </div>
    </div>
  );
}

function ExperienceItem({ date, company, title, desc, isLast = false }: any) {
  return (
    <div className="flex gap-8 group">
      <div className="w-24 pt-1 text-sm text-gray-400 shrink-0 font-mono">
        {date}
      </div>
      <div className="relative pb-12 flex flex-col items-start">
        {!isLast && (
          <div className="absolute left-[7px] top-6 bottom-0 w-[1px] bg-gray-200 group-hover:bg-gray-300 transition-colors" />
        )}
        <div className="absolute left-0 top-2 w-[14px] h-[14px] rounded-full bg-green-400 border-4 border-white ring-1 ring-green-400 group-hover:scale-110 transition-transform shadow-sm" />
        <div className="pl-8 transition-transform group-hover:translate-x-1 duration-200">
          <h3 className="font-bold text-lg leading-none">{company}</h3>
          <p className="font-semibold text-gray-700 mt-1 mb-2">{title}</p>
          <p className="text-gray-500 text-sm max-w-lg leading-relaxed">
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
}

function Card({ icon, title, date, desc }: any) {
  return (
    <div className="p-6 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full">
      <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center mb-4 text-green-600">
        {React.cloneElement(icon as React.ReactElement<any>, { size: 24 })}
      </div>
      <h3 className="font-bold text-base mb-1">{title}</h3>
      <p className="text-xs text-gray-400 mb-3">{date}</p>
      <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
    </div>
  );
}
