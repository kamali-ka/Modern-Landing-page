export const SITE_CONFIG = {
  name: "Professional Freelancer",
  title: "Full-Stack Developer & Designer",
  description: "Transforming ideas into exceptional digital experiences",
  email: "kamalikaazhakar@gmail.com",
  phone: "+91 8015070528",
  location: "Remote, Worldwide",
  social: {
    github: "https://github.com/kamali-ka",
    linkedin: "https://www.linkedin.com/in/kamalika-t-9764b631b/",
  },
};

export const SERVICES = [
  {
    id: 1,
    title: "Web Development",
    description: "Custom websites and web applications built with modern technologies like React, Next.js, and Node.js.",
    icon: "code",
  },
  {
    id: 2,
    title: "UI/UX Design",
    description: "Beautiful, intuitive interfaces designed with user experience at the forefront.",
    icon: "palette",
  },
  {
    id: 3,
    title: "E-Commerce Solutions",
    description: "Complete online stores with payment integration using stripe and inventory management.",
    icon: "shopping",
  },
  {
    id: 4,
    title: "API Development",
    description: "RESTful and GraphQL APIs with secure authentication and scalable architecture.",
    icon: "database",
  },
  {
    id: 5,
    title: "Consulting",
    description: "Technical consulting and project architecture planning for your business needs.",
    icon: "lightbulb",
  },
];

export const SKILLS = [
  { name: "React", level: 95 },
  { name: "Next.js", level: 90 },
  { name: "TypeScript", level: 88 },
  { name: "Node.js", level: 85 },
  { name: "Tailwind CSS", level: 92 },
  { name: "UI/UX Design", level: 98 },
  { name: "PostgreSQL", level: 83 },
  { name: "AWS", level: 80 },
];

// export const PROJECTS = [
//   {
//     id: 1,
//     title: "E-Commerce Platform",
//     category: "Web Development",
//     description: "A full-featured online shopping platform with payment integration",
//     image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
//     technologies: ["Next.js", "PostgreSQL"],
//     link: "#",
//   },
//   {
//     id: 2,
//     title: "Task Management App",
//     category: "Mobile & Web",
//     description: "Cross-platform productivity app with real-time collaboration",
//     image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
//     technologies: ["React Native", "Firebase", "Redux"],
//     link: "#",
//   },
//   {
//     id: 3,
//     title: "Portfolio Website",
//     category: "Design",
//     description: "Modern portfolio with animations and interactive elements",
//     image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80",
//     technologies: ["Next.js", "Framer Motion", "Tailwind"],
//     link: "#",
//   },
//   {
//     id: 4,
//     title: "Analytics Dashboard",
//     category: "Web Development",
//     description: "Real-time data visualization and reporting dashboard",
//     image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
//     technologies: ["React", "D3.js", "Node.js"],
//     link: "#",
//   },
// ];

// export const TESTIMONIALS = [
//   {
//     id: 1,
//     name: "Sarah Johnson",
//     role: "CEO, TechStart Inc.",
//     content: "Exceptional work! The website exceeded our expectations. Professional, responsive, and delivered on time.",
//     rating: 5,
//     avatar: "https://i.pravatar.cc/150?img=1",
//   },
//   {
//     id: 2,
//     name: "Michael Chen",
//     role: "Product Manager, Digital Co.",
//     content: "Outstanding developer with great communication skills. Turned our vision into reality flawlessly.",
//     rating: 5,
//     avatar: "https://i.pravatar.cc/150?img=3",
//   },
//   {
//     id: 3,
//     name: "Emily Davis",
//     role: "Founder, Creative Studio",
//     content: "Highly skilled and professional. The UI/UX work was phenomenal. Will definitely work together again!",
//     rating: 5,
//     avatar: "https://i.pravatar.cc/150?img=5",
//   },
// ];

export const PRICING_PLANS = [
  {
    id: 1,
    name: "Basic",
    price: "$80",
    description: "Perfect for single page websites or small businesses",
    features: [
      "Responsive landing page",
      "Up to 3 sections",
      "Basic SEO setup",
      "5 days delivery",
      "2 revisions",
    ],
    highlighted: false,
  },
  {
    id: 2,
    name: "Standard",
    price: "$150",
    description: "Ideal for small to medium websites with custom features",
    features: [
      "Full website (up to 6 pages)",
      "Custom design & animations",
      "Advanced SEO",
      "2 weeks delivery",
      "3 revisions",
      "1 month support",
    ],
    highlighted: true,
  },
  {
    id: 3,
    name: "Premium",
    price: "$250+",
    description: "Complete solution for large websites and web applications",
    features: [
      "Unlimited pages",
      "Custom web application",
      "API development",
      "Database design",
      "4+ weeks delivery",
      "Unlimited revisions",
      "3 months support",
      "Priority support",
    ],
    highlighted: false,
  },
];

export const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
  { name: "Portfolio", href: "#portfolio" },
  // { name: "Testimonials", href: "#testimonials" },
  { name: "Pricing", href: "#pricing" },
  { name: "Contact", href: "#contact" },
];
