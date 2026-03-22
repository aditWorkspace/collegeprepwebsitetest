// ============================================================
// CONTENT.TS — Edit all site copy and data here
// ============================================================

// REPLACE: Add your real Calendly booking link
export const CALENDLY_URL = "https://calendly.com/YOUR_LINK_HERE";

// ============================================================
// NAVIGATION
// ============================================================
export const navLinks = [
  { label: "Why Us", href: "/why-us" },
  { label: "About", href: "/about" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Services", href: "/services" },
  { label: "Results", href: "/results" },
];

// ============================================================
// CONSULTANTS — REPLACE with real info
// ============================================================
export const consultants = [
  {
    id: "consultant-1",
    name: "Dr. Julian Vance",              // REPLACE
    title: "Founder & Lead Strategist",    // REPLACE
    school: "Princeton University",        // REPLACE
    degree: "Ph.D.",                       // REPLACE
    image: null as string | null,          // REPLACE: e.g. "/images/julian.jpg"
    sat: "1590 / 99th Percentile",         // REPLACE
    admittedTo: ["Princeton", "Yale", "Columbia", "UPenn"], // REPLACE
    specialties: ["Ivy League Strategy", "STEM Narratives", "Research Profile"], // REPLACE
    bio: "PLACEHOLDER: A brief personal bio about your background, why you care about college consulting, and what makes your approach different.", // REPLACE
    highlights: [
      "PLACEHOLDER: Key accomplishment or credential",   // REPLACE
      "PLACEHOLDER: Key accomplishment or credential",   // REPLACE
      "PLACEHOLDER: Key accomplishment or credential",   // REPLACE
    ],
  },
  {
    id: "consultant-2",
    name: "Sarah Cheng",                   // REPLACE
    title: "Head of Narrative & Creative", // REPLACE
    school: "Stanford University",         // REPLACE
    degree: "MFA",                         // REPLACE
    image: null as string | null,          // REPLACE: e.g. "/images/sarah.jpg"
    sat: "1580 / 99th Percentile",         // REPLACE
    admittedTo: ["Stanford", "Brown", "Cornell", "Duke"], // REPLACE
    specialties: ["Essay Voice", "Humanities & Arts", "Transfer Applications"], // REPLACE
    bio: "PLACEHOLDER: A brief personal bio about your background, why you care about college consulting, and what makes your approach different.", // REPLACE
    highlights: [
      "PLACEHOLDER: Key accomplishment or credential",   // REPLACE
      "PLACEHOLDER: Key accomplishment or credential",   // REPLACE
      "PLACEHOLDER: Key accomplishment or credential",   // REPLACE
    ],
  },
];

// ============================================================
// TESTIMONIALS — REPLACE with real quotes
// ============================================================
export const testimonials = [
  {
    id: 1,
    quote: "They didn't try to rewrite my story — they helped me understand it better. By the time I submitted, I actually felt proud of my essays, not just relieved.", // REPLACE
    name: "Alex M.",          // REPLACE
    type: "High School Senior", // REPLACE
    accepted: "Yale University", // REPLACE
    year: "2025",              // REPLACE
  },
  {
    id: 2,
    quote: "After working with two other consultants who gave me cookie-cutter advice, this was completely different. They actually listened. My essays finally sounded like me.", // REPLACE
    name: "Priya K.",          // REPLACE
    type: "High School Senior", // REPLACE
    accepted: "Stanford University", // REPLACE
    year: "2025",              // REPLACE
  },
  {
    id: 3,
    quote: "The dual-mentor model is a game changer. Having two sharp perspectives on every essay — not just one — made my application so much stronger.", // REPLACE
    name: "James L.",          // REPLACE
    type: "Transfer Student",  // REPLACE
    accepted: "Columbia University", // REPLACE
    year: "2024",              // REPLACE
  },
  {
    id: 4,
    quote: "As a parent, I was skeptical of consulting services. But these two genuinely cared about my daughter. She grew so much through the process — not just as an applicant, but as a writer.", // REPLACE
    name: "Dr. Rebecca T.",    // REPLACE
    type: "Parent",            // REPLACE
    accepted: "UChicago",      // REPLACE
    year: "2025",              // REPLACE
  },
  {
    id: 5,
    quote: "I was a first-gen applicant with no idea where to start. They didn't just help me apply — they helped me believe I belonged at these schools.", // REPLACE
    name: "Maria S.",          // REPLACE
    type: "First-Gen Applicant", // REPLACE
    accepted: "Brown University", // REPLACE
    year: "2024",              // REPLACE
  },
];

// ============================================================
// STATS — REPLACE with real numbers
// ============================================================
export const stats = [
  { value: "100%", label: "Top 30 Placement" },     // REPLACE
  { value: "1,200+", label: "Essays Refined" },       // REPLACE
  { value: "15:1", label: "Student-to-Mentor Ratio" }, // REPLACE
  { value: "84%", label: "Client Referral Rate" },     // REPLACE
];

export const featuredColleges = [
  "Yale", "Stanford", "Columbia", "UChicago", "UPenn", "Brown", "Cornell", "Duke",
]; // REPLACE

// ============================================================
// SERVICES
// ============================================================
export const services = [
  {
    name: "Full Program",
    description: "End-to-end support from school list to final submission. Includes both mentors, unlimited essay reviews, and full strategic guidance.",
    price: "PLACEHOLDER",  // REPLACE: e.g. "$X,XXX"
    features: [
      "Dedicated primary mentor",
      "Full essay development (all schools)",
      "School list strategy",
      "Activities & honors positioning",
      "Second mentor review on every essay",
      "Interview preparation",
      "Unlimited check-ins",
    ],
    highlighted: true,
  },
  {
    name: "Essay Intensive",
    description: "Focused support on essay writing. Ideal for students who have their strategy but need expert help crafting their narrative.",
    price: "PLACEHOLDER",  // REPLACE
    features: [
      "Up to 8 essay drafts",
      "Narrative arc development",
      "Line-level editing & feedback",
      "Second mentor review included",
      "Supplement strategy",
    ],
    highlighted: false,
  },
  {
    name: "Hourly Advising",
    description: "Flexible, targeted sessions for students who need guidance on specific parts of their application.",
    price: "PLACEHOLDER",  // REPLACE: e.g. "$XXX/hr"
    features: [
      "Book individual sessions",
      "Essay review & feedback",
      "School list consultation",
      "Application strategy",
      "Interview prep",
    ],
    highlighted: false,
  },
];

// ============================================================
// FAQ
// ============================================================
export const faqs = [
  {
    question: "How is this different from other college consulting services?",
    answer: "Most services optimize for volume — they run students through a formula. We work with a deliberately small number of students and focus on helping each one find and communicate their real story. Both mentors are involved with every student, and we guarantee dual review on every essay before submission.",
  },
  {
    question: "How many students do you take per cycle?",
    answer: "We intentionally keep our cohort small — typically 15 students per application cycle. This allows us to give each student the depth of attention they deserve.",
  },
  {
    question: "When should we start?",
    answer: "Ideally, the summer before senior year. That said, we've worked effectively with students starting as late as October. The earlier we begin, the more thoughtful and less rushed the process feels.",
  },
  {
    question: "Can we talk to families you've worked with?",
    answer: "Absolutely. During or after your intro call, just ask — we're happy to connect you with past families who can share their experience.",
  },
  {
    question: "Do you write essays for students?",
    answer: "No. We believe the essay should be genuinely yours. We guide your thinking, help you find your strongest material, give direct feedback on drafts, and push you to go deeper — but the writing is always yours. That's the whole point.",
  },
  {
    question: "What does the dual-mentor model mean in practice?",
    answer: "Each student has a primary mentor who leads their strategy and is their main point of contact. The second mentor stays genuinely in the loop — available for sessions, and guaranteed to review every essay before it's submitted. Two sharp perspectives. No outsourcing.",
  },
  {
    question: "Do you offer financial aid or scholarship consulting?",
    answer: "We can provide general guidance on financial aid strategy, but we're not financial aid specialists. Our focus is on helping you present the strongest possible application.",
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
    { label: "Results", href: "/results" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "FAQ", href: "/faq" },
  ],
  connect: [
    { label: "Book a Call", href: "/book" },
    { label: "Contact", href: "/contact" },
  ],
  contact: {
    email: "hello@academicatelier.com",   // REPLACE
    location: "New York, NY",             // REPLACE or remove
    instagram: "#",                        // REPLACE
    linkedin: "#",                         // REPLACE
  },
};
