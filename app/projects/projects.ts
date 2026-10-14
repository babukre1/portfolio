export type ProjectImage = {
  src: string;
  alt: string;
  caption: string;
};

export type ProjectSection = {
  label: string;
  title: string;
  description: string;
  images?: ProjectImage[];
  kind?: "web" | "mobile";
};

export type Project = {
  slug: string;
  title: string;
  category: string;
  award?: string;
  summary: string;
  overview: string[];
  role: string;
  stack: string[];
  points: string[];
  cover?: ProjectImage;
  previewPhones?: ProjectImage[];
  sections: ProjectSection[];
  links?: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    slug: "vehicle-registration",
    title: "Vehicle Registration & Verification System",
    category: "Digital public service",
    award: "SomNOG8 · 1st place",
    summary: "Online vehicle registration, ownership verification, and administrative review in one digital workflow.",
    overview: [
      "This system moves vehicle registration and verification from manual submissions into a structured digital process. People can submit vehicle and ownership information online, while administrators review applications and approve or reject them.",
      "Authentication, role-based access, and centralized records support the public and administrative sides of the service.",
    ],
    role: "Lead Developer",
    stack: ["Next.js", "NestJS", "PostgreSQL", "Prisma", "Docker", "Kubernetes"],
    points: ["Online registration and supporting records", "Administrative review and decisions", "Ownership verification and centralized vehicle records"],
    cover: { src: "/screenshots/vrs.png", alt: "Vehicle Registration Service public registration homepage", caption: "Public vehicle registration service" },
    sections: [
      { label: "The service", title: "A clear route from submission to review", description: "Applicants provide vehicle and ownership details through the public service. Administrators can authenticate, inspect submissions, and make a recorded approval or rejection decision.", images: [{ src: "/screenshots/vrs.png", alt: "Vehicle Registration Service homepage showing the registration entry point", caption: "Public registration entry point" }], kind: "web" },
    ],
    links: [
      { label: "Visit live site", href: "https://vrs.abubakr.so/" },
      { label: "View GitHub", href: "https://github.com/somnog/Vehicle-Registration-System" },
    ],
  },
  {
    slug: "property-registration",
    title: "Property Registration System",
    category: "Digital public service",
    award: "SomNOG7 · 1st place",
    summary: "A property and owner registration platform with verification, approvals, and centralized records.",
    overview: [
      "The platform replaces disconnected, manual property registration steps with a single place to record property and owner information. Administrative staff can verify submissions and manage approval workflows.",
      "Role-based access keeps public-facing and administrative tasks distinct while the system maintains centralized property records.",
    ],
    role: "Lead Developer",
    stack: ["React", "Node.js", "Express", "MongoDB"],
    points: ["Digital property and owner registration", "Administrative verification and approvals", "Role-based access to centralized records"],
    cover: { src: "/screenshots/property_system.png", alt: "Property Registration System sign-in page", caption: "Property registration sign-in" },
    sections: [
      { label: "The service", title: "Registration with administrative checks", description: "The system brings property records, ownership information, verification, and approval into one workflow for municipal staff and registered users.", images: [{ src: "/screenshots/property_system.png", alt: "Property Registration System sign-in page for municipal officers and the public", caption: "Sign-in for public and administrative users" }], kind: "web" },
    ],
    links: [
      { label: "Visit live site", href: "https://property.abubakr.so/" },
      { label: "View GitHub", href: "https://github.com/babukre1/SomNOG7-Property-Managment" },
    ],
  },
  {
    slug: "somnog9-workshop",
    title: "SomNOG9 Workshop Platform",
    category: "Public resource platform",
    summary: "A no-login home for the Software Development Track schedule, workshop files, and technical guides.",
    overview: [
      "Built for the Somali Network Operators Group's SomNOG9 Software Development Track, the platform gives participants one place to follow the three-day workshop and find the resources they need during each session.",
      "It combines a public event website with searchable Markdown documentation. Materials can be viewed online where supported or downloaded in formats including PDF, presentation, document, spreadsheet, and archive files.",
    ],
    role: "Developer",
    stack: ["React", "TypeScript", "Vite", "Docusaurus", "Docker", "GitHub Actions"],
    points: ["Three-day agenda with sessions and facilitators", "Learning materials organized by day", "Searchable guides with code examples and sidebar navigation"],
    cover: { src: "/screenshots/somnog9-workshop/home.png", alt: "SomNOG9 Workshop Platform homepage", caption: "Workshop homepage" },
    sections: [
      { label: "Workshop website", title: "Schedule and resources in one place", description: "Participants can check the agenda, open resources by day, and download files without creating an account.", kind: "web", images: [
        { src: "/screenshots/somnog9-workshop/home.png", alt: "Workshop homepage with links to the schedule and materials", caption: "Workshop home" },
        { src: "/screenshots/somnog9-workshop/schedule.png", alt: "Three-day workshop schedule with session times and facilitators", caption: "Three-day schedule" },
        { src: "/screenshots/somnog9-workshop/materials.png", alt: "Workshop learning materials grouped by day", caption: "Learning materials" },
      ] },
      { label: "Documentation", title: "Guides built for the sessions", description: "Docusaurus and Markdown provide structured instructions, code examples, session notes, and searchable navigation.", kind: "web", images: [
        { src: "/screenshots/somnog9-workshop/documentation.png", alt: "SomNOG9 technical documentation showing code examples and navigation", caption: "Technical documentation" },
      ] },
    ],
    links: [{ label: "Visit platform", href: "https://sd.somnog.so/" }],
  },
  {
    slug: "somfuel",
    title: "SomFuel — Fuel Price Tracking System",
    category: "Web and mobile platform",
    summary: "Customers compare nearby fuel prices while suppliers publish updates and administrators keep the data trustworthy.",
    overview: [
      "SomFuel helps people find nearby stations, compare current petrol, diesel, and kerosene prices, and identify a cheaper option. It connects two Flutter mobile apps, a React admin dashboard, and a Node.js/Express API backed by MongoDB.",
      "Suppliers maintain station prices. The backend validates updates and flags suspicious changes for administrative review. When an accepted price changes, the previous price remains in history and followers of that station can receive a Firebase push notification.",
    ],
    role: "Software Developer Intern",
    stack: ["Flutter", "React", "Node.js", "Express", "MongoDB", "Firebase"],
    points: ["Nearby discovery, search, favorites, and price history", "Supplier station management and price submissions", "Administrative review of flagged updates and notifications"],
    previewPhones: [
      { src: "/screenshots/fueltrack-customer/nearby-stations.jpg", alt: "Customer app showing nearby stations and comparable fuel prices", caption: "Find nearby" },
      { src: "/screenshots/fueltrack-supplier/update-prices.jpeg", alt: "Supplier app for updating petrol, diesel, and kerosene prices", caption: "Update prices" },
      { src: "/screenshots/fueltrack-customer/station-details.jpg", alt: "Customer station detail with directions and price history", caption: "Review history" },
    ],
    sections: [
      { label: "01 / Admin web", title: "A central view of the network", description: "Administrators manage users, suppliers, stations, maps, fuel prices, notifications, and reports. Price validation flags unusual changes for review before those prices become visible to customers.", kind: "web", images: [
        { src: "/screenshots/fueltrack-admin/dashboard.png", alt: "FuelTrack admin dashboard with network totals and supplier status", caption: "Network overview" },
        { src: "/screenshots/fueltrack-admin/stations-map.png", alt: "Admin map showing fuel stations across Mogadishu", caption: "Station map" },
        { src: "/screenshots/fueltrack-admin/fuel-prices.png", alt: "Admin dashboard for fuel price records and city averages", caption: "Fuel price management" },
        { src: "/screenshots/fueltrack-admin/stations.png", alt: "Admin table for station statuses and management", caption: "Station management" },
      ] },
      { label: "02 / Supplier app", title: "Station and price operations", description: "Suppliers manage their stations and branches, submit current fuel prices, review price history, receive administrative notices, and inspect reports.", kind: "mobile", images: [
        { src: "/screenshots/fueltrack-supplier/station-overview.jpeg", alt: "Supplier app station overview with current prices", caption: "Station overview" },
        { src: "/screenshots/fueltrack-supplier/update-prices.jpeg", alt: "Supplier app fuel price update form", caption: "Price updates" },
        { src: "/screenshots/fueltrack-supplier/price-history.jpeg", alt: "Supplier app fuel price history report", caption: "Price history" },
      ] },
      { label: "03 / Customer app", title: "Compare before filling up", description: "Customers discover and filter nearby stations, compare live prices, inspect a station's price history, save favorites, get directions, and receive price-change alerts.", kind: "mobile", images: [
        { src: "/screenshots/fueltrack-customer/nearby-stations.jpg", alt: "Customer app listing nearby stations and current fuel prices", caption: "Compare nearby" },
        { src: "/screenshots/fueltrack-customer/station-details.jpg", alt: "Customer station detail with directions and price history", caption: "Station details" },
        { src: "/screenshots/fueltrack-customer/favorites.jpg", alt: "Customer favorite stations list", caption: "Saved stations" },
      ] },
    ],
  },
  {
    slug: "justclick",
    title: "JustClick — Educational Resource Platform",
    category: "Web and mobile platform",
    summary: "Institutions publish course materials; students find, save, download, and study them on mobile.",
    overview: [
      "JustClick brings academic content management and student study tools into one system. The web platform organizes courses, semesters, chapters, and learning materials. A shared Flask backend handles authentication, academic data, materials, and study activity.",
      "The mobile app lets students browse and filter course resources, return to recently viewed materials, keep favorites, download files for offline use, rate materials, and ask an AI assistant questions about supported course content.",
    ],
    role: "Full-Stack Developer",
    stack: ["Flask", "REST API", "Web", "Mobile", "AI assistant"],
    points: ["Academic resources managed on web and available on mobile", "Search, favorites, Continue Studying, and offline downloads", "Material feedback, notifications, and content-based AI assistance"],
    previewPhones: [
      { src: "/screenshots/justclick/material-catalog.jpeg", alt: "JustClick mobile material catalog with search and filters", caption: "Browse materials" },
      { src: "/screenshots/justclick/offline-downloads.jpeg", alt: "JustClick mobile offline downloads", caption: "Study offline" },
      { src: "/screenshots/justclick/ai-assistant.jpeg", alt: "JustClick AI study assistant for a course material", caption: "Ask JustClick AI" },
    ],
    sections: [
      { label: "01 / Web platform", title: "Publish and organize academic content", description: "The public site introduces the service. Administrators manage the academic structure and publish materials through a dedicated workspace.", kind: "web", images: [
        { src: "/screenshots/justclick/public-landing.png", alt: "JustClick public website for course materials", caption: "Public platform" },
        { src: "/screenshots/justclick/admin-dashboard.png", alt: "JustClick admin dashboard showing materials and activity", caption: "Admin overview" },
        { src: "/screenshots/justclick/material-upload.png", alt: "JustClick admin form for uploading course material", caption: "Material publishing" },
      ] },
      { label: "02 / Student app", title: "Materials ready when students need them", description: "Students search by course and format, save useful resources, download files to open offline, and use the AI assistant to summarize, explain, or quiz them on supported material.", kind: "mobile", images: [
        { src: "/screenshots/justclick/material-catalog.jpeg", alt: "JustClick mobile catalog with course and file filters", caption: "Browse materials" },
        { src: "/screenshots/justclick/offline-downloads.jpeg", alt: "JustClick mobile downloads and offline files", caption: "Offline access" },
        { src: "/screenshots/justclick/ai-assistant.jpeg", alt: "JustClick AI study assistant with suggested study prompts", caption: "AI study assistant" },
      ] },
    ],
  },
  {
    slug: "hall-booking",
    title: "Hall Booking System",
    category: "Web and mobile platform",
    summary: "A hall booking platform with separate workflows for administrators, venue managers, and customers.",
    overview: [
      "The Hall Booking System connects an admin web dashboard, a manager Flutter app, a customer Flutter app, and a backend API. Each interface supports a different part of the booking process.",
      "The platform was built during my six-month software development internship at Tabaarak ICT Solutions. It brings venue operations and customer booking into a shared system rather than separate manual processes.",
    ],
    role: "Software Developer Intern",
    stack: ["React", "Flutter", "Express", "PostgreSQL", "Prisma"],
    points: ["Admin web dashboard", "Manager mobile application", "Customer mobile application and backend API"],
    sections: [
      { label: "The platform", title: "One booking system, three interfaces", description: "Administrators, venue managers, and customers use interfaces designed for their roles, connected through the same backend and database." },
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
