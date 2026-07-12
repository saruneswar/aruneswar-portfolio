import { Profile, Stat, TimelineEvent } from "@/types";

export const profileData: Profile = {
  name: "Aruneswar S",
  role: "Electrical & Electronics Engineering Student",
  headline: "Architecting the Future of Energy & Automation",
  about: "Final year EEE student with a strong foundation in power systems and industrial automation. Passionate about designing robust electrical architectures and solving complex engineering challenges.",
  location: "Coimbatore, Tamil Nadu",
  email: "saruneswar@gmail.com",
  phone: "+91 77089 03030",
  resumeUrl: "/resume/Aruneswar_S_Resume.pdf",
  university: "SNS College of Technology",
  cgpa: "CGPA: 7.29 / 10",
  expectedGraduation: "Expected Graduation: 2027",
  githubUrl: "https://github.com/saruneswar",
  linkedinUrl: "https://www.linkedin.com/in/aruneswar-s",
};

export const professionalSummary = [
  "Performance-driven Electrical and Electronics Engineering student with hands-on experience in Industrial Automation, Embedded Systems, Electrical Panels, and Real-Time Hardware Development.",
  "Experienced in industrial control panel manufacturing, electrical wiring, PLC-based automation panels, embedded firmware development, electrical testing, troubleshooting, and hardware validation through internships and academic projects.",
  "Passionate about Industrial Automation, Power Systems, Protection & Control, Electrical Design, Renewable Energy, and intelligent electrical systems that solve real industrial problems."
];

export const engineeringFocus = [
  "Industrial Automation",
  "Power Systems",
  "Electrical Design",
  "Protection & Control",
  "HT & LT Panels",
  "PLC Systems",
  "Embedded Systems",
  "Renewable Energy"
];

export const timelineData: TimelineEvent[] = [
  {
    year: "2023",
    title: "Started Bachelor of Engineering in Electrical and Electronics Engineering at SNS College of Technology."
  },
  {
    year: "2024",
    title: "Developed an AI-Based Myoelectric Prosthetic Arm using ESP32, EMG Signal Processing and Servo Control for Smart India Hackathon."
  },
  {
    year: "2025",
    title: "Completed Embedded Systems Internship at Dot World Technologies.",
    points: [
      "Embedded Hardware Validation",
      "Electrical Troubleshooting",
      "Signal Tracing",
      "Testing",
      "Documentation"
    ]
  },
  {
    year: "December 2025",
    title: "Secured First Runner-Up at Technocognition 2025 held at Dayananda Sagar University (DSU)."
  },
  {
    year: "2026",
    title: "Completed Industrial Internship at Tech7 Automation Systems.",
    points: [
      "HT & LT Panels",
      "PLC Panels",
      "Servo Drives",
      "Electrical Schematics",
      "Panel Wiring",
      "Testing",
      "Commissioning",
      "Industrial Automation"
    ]
  },
  {
    year: "Present",
    title: "Building advanced Electrical Engineering solutions including:",
    points: [
      "Guardians of Grid (AI-based Smart Power Line Monitoring System)",
      "AI-driven Industrial Projects",
      "Engineering Portfolio",
      "Preparing for Graduate Engineer Trainee roles in core Electrical Engineering industries."
    ]
  }
];

export const professionalStats = [
  { label: "National Level", value: "Hackathon Projects" },
  { label: "2", value: "Industrial Internships" },
  { label: "Multiple", value: "Engineering Projects" },
  { label: "Focused On", value: "Industrial Automation\nPower Systems\nEmbedded Systems" },
];

export const seekingRoles = [
  { title: "Graduate Engineer Trainee (GET)", icon: "GraduationCap" },
  { title: "Industrial Automation Engineer", icon: "Settings" },
  { title: "Power Systems Engineer", icon: "Zap" },
  { title: "Electrical Design Engineer", icon: "PenTool" },
  { title: "Protection & Control Engineer", icon: "ShieldCheck" },
  { title: "HT/LT Panel Design Engineer", icon: "Cpu" },
  { title: "Renewable Energy Engineer", icon: "Sun" },
];

export const interestedIndustries = [
  "Power Generation",
  "Transmission & Distribution",
  "Industrial Automation",
  "Smart Grid",
  "Renewable Energy",
  "Manufacturing",
  "EPC",
  "Electrical Infrastructure"
];

export const highlightsData: Stat[] = [
  { label: "National Level Achievement", value: "1", icon: "Trophy" },
  { label: "Industrial Internships", value: "2", icon: "Briefcase" },
  { label: "Engineering Projects", value: "2", icon: "Cpu" },
  { label: "Technical Skills", value: "15+", icon: "Wrench" },
];
