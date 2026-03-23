// ============================================================
// CONTENT.TS — Edit all site copy and data here
// ============================================================

// REPLACE: Add your real Calendly booking link
export const CALENDLY_URL = "https://calendly.com/YOUR_LINK_HERE";

// ============================================================
// NAVIGATION
// ============================================================
export const navLinks = [
  { label: "Philosophy", href: "/philosophy" },
  { label: "About", href: "/about" },
  { label: "Why Us", href: "/why-us" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Services", href: "/services" },
];

// ============================================================
// FOUNDERS / COUNSELORS
// ============================================================
export const counselors = [
  {
    id: "adit",
    name: "Adit Mittal",
    title: "Co-Founder",
    school: "UC Berkeley (Haas + CS)",
    image: "/founders/aditimage1.png",
    sat: "1580",
    admittedTo: ["UC Berkeley (Haas + CS)", "Carnegie Mellon", "UT Austin", "UC San Diego", "UC Davis", "UC Irvine"],
    activities: ["DECA", "Entrepreneurship", "FundFacts (501c3)", "Robotics"],
    bio: "Adit works with students to identify what they're genuinely passionate about and build their application around that. He helps with everything from finding the right projects to pursue, to developing a narrative that ties all of your activities together, to writing essays that actually sound like you. Having gone through the process himself at UC Berkeley Haas and CS, he understands what moves the needle in admissions and stays involved from the first strategy session through final submission.",
    linkedin: "https://www.linkedin.com/in/adit-mittal14/",
  },
  {
    id: "aum",
    name: "Aum Narkar",
    title: "Co-Founder",
    school: "NYU Stern (Early Decision)",
    image: "/founders/aumimage1.jpeg",
    sat: "1560",
    admittedTo: ["NYU Stern (ED)"],
    activities: ["Valedictorian", "DECA", "FundFacts", "Political Campaign Work", "Robotics World Championship"],
    bio: "Aum helps students figure out what makes them genuinely distinctive and then build on it. He works closely with students on project development, essay writing, and strategic positioning, always pushing for specificity and authenticity over generic advice. His own experience getting into NYU Stern through Early Decision gave him a clear understanding of what admissions committees respond to, and he brings that perspective to every student he works with.",
    linkedin: "https://www.linkedin.com/in/aum-narkar-912017217/",
  },
];

// ============================================================
// TESTIMONIALS — REPLACE with real quotes
// ============================================================
export const testimonials = [
  {
    id: 1,
    quote: "They didn't try to rewrite my story. They helped me understand it better. By the time I submitted, I actually felt proud of my essays, not just relieved.",
    name: "Alex M.",
    type: "High School Senior",
    accepted: "Yale University",
    year: "2025",
  },
  {
    id: 2,
    quote: "After working with two other counselors who gave me cookie-cutter advice, this was completely different. They actually listened. My essays finally sounded like me.",
    name: "Priya K.",
    type: "High School Senior",
    accepted: "Stanford University",
    year: "2025",
  },
  {
    id: 3,
    quote: "What made them different is that they actually helped me build things, not just write about them. My application felt real because it was.",
    name: "James L.",
    type: "High School Senior",
    accepted: "Columbia University",
    year: "2024",
  },
  {
    id: 4,
    quote: "As a parent, I was skeptical of consulting services. But these two genuinely cared about my daughter. She grew so much through the process, not just as an applicant, but as a person.",
    name: "Dr. Rebecca T.",
    type: "Parent",
    accepted: "UChicago",
    year: "2025",
  },
  {
    id: 5,
    quote: "I was a first-gen applicant with no idea where to start. They didn't just help me apply, they helped me believe I belonged at these schools.",
    name: "Maria S.",
    type: "First-Gen Applicant",
    accepted: "Brown University",
    year: "2024",
  },
];

// ============================================================
// SERVICES — Hourly model
// ============================================================
export const services = [
  {
    name: "20-Hour Package",
    description: "Targeted support for students who need help refining their profile, building key projects, and crafting their narrative across applications.",
    price: "$2,750",
    features: [
      "Full access to both founders",
      "Profile-building strategy sessions",
      "Project ideation and development support",
      "Essay development and feedback",
      "Activities list positioning",
      "School list guidance",
    ],
    highlighted: false,
  },
  {
    name: "40-Hour Package",
    description: "Comprehensive, end-to-end support. From building your profile and launching real projects to writing every essay and preparing for interviews.",
    price: "$5,000",
    features: [
      "Full access to both founders",
      "Complete profile-building from the ground up",
      "Project development and launch support",
      "Full essay writing across all schools",
      "Activities and honors positioning",
      "Interview preparation",
      "Unlimited check-ins between sessions",
    ],
    highlighted: true,
  },
];

// ============================================================
// FAQ
// ============================================================
export const faqs = [
  {
    question: "How is this different from other college counseling services?",
    answer: "Most services focus on polishing what you already have. We actually help you build it. That means working with you on projects, initiatives, and experiences that make your application genuinely stronger, not just better written.",
  },
  {
    question: "What do you mean by 'profile-building'?",
    answer: "It means we don't just help you write about your activities. We help you create them. Whether that's launching a project, starting an initiative, or deepening your involvement in something you care about, we help you build the substance behind your application.",
  },
  {
    question: "How many students do you work with?",
    answer: "We keep it small on purpose. We work with a limited number of students each cycle so we can actually get to know you and give you real, personal attention, not recycled advice.",
  },
  {
    question: "When should we start?",
    answer: "The earlier the better. If you start sophomore or junior year, we can actually help you build meaningful projects and experiences before application season. That said, we've worked effectively with students starting the summer before senior year.",
  },
  {
    question: "Can we talk to families you've worked with?",
    answer: "Absolutely. During or after your intro call, just ask. We're happy to connect you with past families who can share their experience.",
  },
  {
    question: "Do you write essays for students?",
    answer: "No. We believe the essay should be genuinely yours. We guide your thinking, help you find your strongest material, give direct feedback on drafts, and push you to go deeper. The writing is always yours.",
  },
  {
    question: "What does 'full access to both founders' mean?",
    answer: "It means you're working directly with Adit and Aum, not interns, not junior staff. You'll be assigned one of us as your primary counselor, but both of us stay involved with every student. Both founders review every essay and every application before submission. You can also request to work with either of us on any specific area.",
  },
];

// ============================================================
// FOOTER
// ============================================================
export const footerNav = {
  explore: [
    { label: "Why Us", href: "/why-us" },
    { label: "About", href: "/about" },
    { label: "How It Works", href: "/how-it-works" },
    { label: "Services", href: "/services" },
  ],
  resources: [
    { label: "Philosophy", href: "/philosophy" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "FAQ", href: "/faq" },
  ],
  connect: [
    { label: "Book a Call", href: "/book" },
    { label: "Contact", href: "/contact" },
  ],
  contact: {
    email: "hello@vergeconsulting.com",   // REPLACE
    location: "Remote",
    instagram: "#",                        // REPLACE
    linkedin: "#",                         // REPLACE
  },
};
