import * as THREE from "three";
import "./styles.css";

const BASE = import.meta.env.BASE_URL || "/";
const publicAsset = (path) => `${BASE}${String(path).replace(/^\/+/, "")}`;

// Project details below are based on the supplied CV. No project screenshots are required.
const PROJECTS = [
  {
    name: "Payroll & HR Management System",
    category: "HR & Payroll",
    icon: "payroll",
    hue: 202,
    desc: "The central HR and payroll platform supporting employee records, pay-related workflows, and attendance monitoring for 3,000+ employees.",
    features: [
      "Employee profiling for active, resigned, terminated, and AWOL employees, plus contracts and payroll reports.",
      "Deductions and loans, HMO, travel allowance, Service Incentive Leave (SIL), holiday and Saturday-off schedules.",
      "Memos, employee messages and concerns, plus office/site attendance with AWOL and late monitoring.",
    ],
    stack: ["PHP", "MySQL", "JavaScript", "AJAX", "Tailwind", "Bootstrap"],
  },
  {
    name: "HR Incentive System",
    category: "HR & Payroll",
    icon: "incentive",
    hue: 260,
    desc: "Automates collection of site employee incentive records and connects the results directly to payroll.",
    features: [
      "Replaced a manual spreadsheet-based incentive collection process.",
      "Automatically collects incentive records for site employees.",
      "Integrated directly with the Payroll System.",
    ],
    stack: ["PHP", "MySQL", "Spreadsheet automation"],
  },
  {
    name: "Executive Attendance Dashboard",
    category: "Attendance",
    icon: "dashboard",
    hue: 190,
    desc: "The main company attendance dashboard used for monitoring workforce status and displayed on the office monitor.",
    features: [
      "Separates office and site attendance and displays a weekly graph.",
      "Shows Direct, Indirect, and Staff totals; present/absent counts and total headcount by department.",
      "Exports attendance information to Excel.",
    ],
    stack: ["PHP", "MySQL", "JavaScript", "Excel export"],
  },
  {
    name: "Attendance Tracker",
    category: "Attendance",
    icon: "mobile",
    hue: 177,
    desc: "Flutter mobile app for employee self-service on iOS and Android, synchronized with the Payroll System.",
    features: [
      "Supports timekeeping, leave, overtime, undertime, payslips, and attendance checking.",
      "Shows whether an employee filing was submitted and recorded.",
      "Provides memos and concern chat.",
    ],
    stack: ["Flutter", "Dart", "PHP API", "MySQL", "iOS", "Android"],
  },
  {
    name: "Manager Approval System",
    category: "Attendance",
    icon: "approval",
    hue: 216,
    desc: "Manager-facing workflow for approving employee filings and reviewing department attendance and incidents.",
    features: [
      "Allows managers to approve filings from employees in their department.",
      "Synchronized with the Attendance Tracker.",
      "Displays team attendance, rates, and incident records.",
    ],
    stack: ["PHP", "MySQL", "Shared data workflows"],
  },
  {
    name: "Shift Approval",
    category: "Attendance",
    icon: "calendar",
    hue: 234,
    desc: "Timekeeper workflow for reviewing employee shifts and ensuring approved shifts are reflected consistently.",
    features: [
      "Reviews shifts filed in the Attendance Tracker for a single day, weeks, or months.",
      "Approved shifts automatically update the Attendance Tracker and Payroll System.",
      "Keeps the attendance records aligned across connected systems.",
    ],
    stack: ["PHP", "MySQL", "Attendance integration"],
  },
  {
    name: "Biometric Attendance Automation",
    category: "Operations",
    icon: "fingerprint",
    hue: 173,
    desc: "Integration that retrieves attendance logs directly from biometric devices without manual export/import.",
    features: [
      "VB.NET application uses the biometric device SDK to retrieve logs.",
      "A PHP API writes the attendance data into the database.",
      "Records synchronize with the Attendance Tracker, Payroll System, and Manager Approval System.",
    ],
    stack: ["VB.NET", "ZKTeco SDK", "PHP API", "MySQL"],
  },
  {
    name: "Site Biometric Operations",
    category: "Operations",
    icon: "devices",
    hue: 195,
    desc: "Daily operations and consolidation for the company’s 20 site biometric devices and timekeeper tablet submissions.",
    features: [
      "Manages and monitors 20 site biometric devices and uploads records daily.",
      "Retrieves attendance records shared by site timekeepers through Gmail and uploads them to the system.",
      "Keeps records reflected in the Dashboard, Payroll System, and Attendance Tracker.",
    ],
    stack: ["ZKTeco", "Gmail", "Excel / CSV", "Data reconciliation"],
  },
  {
    name: "CCTV Attendance Review",
    category: "Operations",
    icon: "cctv",
    hue: 36,
    desc: "Attendance verification process for employees with missing time-in or time-out records.",
    features: [
      "Reviews CCTV footage to verify cases of missing time-in/time-out.",
      "Records findings in the system so corrections are reflected in the Attendance Tracker.",
    ],
    stack: ["CCTV review", "Attendance validation"],
  },
  {
    name: "Employee Relations System",
    category: "HR & Payroll",
    icon: "people",
    hue: 279,
    desc: "Records employee incident reports and synchronizes updates with the Manager Approval System.",
    features: [
      "Supports uploads using spreadsheet templates.",
      "Displays total record completion and other reports.",
      "Exports data into a new reporting format.",
    ],
    stack: ["PHP", "MySQL", "Excel / spreadsheet templates"],
  },
  {
    name: "Clinic Management System",
    category: "Operations",
    icon: "clinic",
    hue: 154,
    desc: "Clinic record management for three company clinic locations, with employee Fit-to-Work status available to HR.",
    features: [
      "Imports Google Sheet data and records manual consultations.",
      "Allows doctors to issue prescriptions through the system.",
      "Provides role-based accounts for nurses, doctors, other staff, and admins; HR can see Fit-to-Work status, including employees not yet cleared to start work.",
    ],
    stack: ["PHP", "MySQL", "Google Sheets", "Role-based access"],
  },
  {
    name: "HDEC-AI · Company AI Assistant",
    category: "AI & Security",
    icon: "ai",
    hue: 251,
    desc: "On-premise AI assistant running locally and answering employee questions using company data.",
    features: [
      "Provides dynamic answers, generates reports, and offers work-related guidance.",
      "Runs on a local server using Ollama and the Qwen model with a Python backend.",
      "Security includes a server firewall, folder encryption at rest, PII masking, input sanitization, and prompt-injection guardrails.",
    ],
    stack: [
      "Python",
      "Ollama",
      "Qwen LLM",
      "PII masking",
      "Input sanitization",
    ],
  },
];

const SKILLS = {
  "Backend & databases": {
    icon: "database",
    items: ["PHP", "MySQL", "SQL", "Python", "Query optimization"],
  },
  "Web & mobile": {
    icon: "code",
    items: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "AJAX",
      "Bootstrap",
      "Tailwind",
      "Flutter",
      "Dart",
      "React JS",
      "Vite",
    ],
  },
  "APIs & data automation": {
    icon: "workflow",
    items: [
      "REST APIs",
      "Firebase",
      "ZKTeco SDK",
      "VB.NET",
      "Excel / CSV / PDF",
      "Google Apps Script",
    ],
  },
  "AI & security": {
    icon: "shield",
    items: [
      "Ollama",
      "Qwen LLM",
      "PII masking",
      "Input sanitization",
      "Prompt-injection guardrails",
      "Data-at-rest encryption",
    ],
  },
};

const EXPERIENCE = [
  {
    date: "JUL 17, 2025 — PRESENT",
    title: "IT Engineer / End-to-End System Software Specialist",
    company: "Hyundai Dongah Joint Venture (HDJV) · Human Resources – IT",
    bullets: [
      "Primary developer and technical owner of the company’s HR-IT systems ecosystem: 10+ interconnected systems for 3,000+ employees.",
      "Production support including SQL optimization, bug fixing, deployment validation, backups, regression testing, data reconciliation, user support, and system documentation.",
    ],
  },
  {
    date: "MAY 10 — JUL 16, 2025",
    title: "Site Timekeeper",
    company: "Hyundai Dongah Joint Venture (HDJV)",
    bullets: [
      "Collected, validated, and organized employee attendance and work-hour records; maintained Excel timekeeping masterlists.",
      "Prepared accurate timekeeping inputs for payroll processing and employee attendance monitoring.",
    ],
  },
  {
    date: "FEB 3 — MAY 9, 2025",
    title: "OJT — Site Timekeeper",
    company: "Hyundai Dongah Joint Venture (HDJV)",
    bullets: [
      "Assisted with BIR Form 2316 processing and maintained HR files and Excel masterlists.",
      "Built practical knowledge of timekeeping, payroll inputs, employee data, and HR workflows.",
    ],
  },
  {
    date: "2018 — 2025",
    title: "Bachelor of Science in Information Technology",
    company: "Pamantasan ng Cabuyao",
    bullets: [],
  },
];

const ICONS = {
  payroll:
    '<rect x="4" y="5" width="16" height="15" rx="2"/><path d="M8 3v4m8-4v4M4 10h16M8 14h3m-3 3h8"/>',
  incentive:
    '<path d="m12 3 1.9 5.8L20 11l-6.1 2.2L12 19l-1.9-5.8L4 11l6.1-2.2L12 3Z"/><path d="m19 15 .9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9L19 15Z"/>',
  dashboard:
    '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M7 15v-3m5 3V8m5 7v-5M6 17h12"/>',
  mobile:
    '<rect x="7" y="2" width="10" height="20" rx="2"/><path d="M10 5h4m-3 13h2"/>',
  approval:
    '<path d="M12 3 20 6v5c0 5-3.5 8.2-8 10-4.5-1.8-8-5-8-10V6l8-3Z"/><path d="m8.5 11.5 2.2 2.2 4.8-5"/>',
  calendar:
    '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 3v4m10-4v4M3 10h18m-13 4 2 2 4-4"/>',
  fingerprint:
    '<path d="M12 11a2 2 0 0 0-2 2c0 3-.4 5.4-1.5 7M12 7a6 6 0 0 0-6 6c0 2.3-.3 4.2-1.2 6M12 3a10 10 0 0 0-10 10m10-2a2 2 0 0 1 2 2c0 4 .8 6.4 2 8m-4-14a6 6 0 0 1 6 6c0 2.8.5 5.1 1.6 7M16.7 5.6A10 10 0 0 1 22 13"/>',
  devices:
    '<rect x="3" y="4" width="12" height="16" rx="2"/><rect x="17" y="8" width="4" height="9" rx="1"/><path d="M7 7h4m-4 3h4m-2 6h.01M18.5 11h1"/>',
  cctv: '<path d="m3 8 12-4 4 5-12 4-4-5Z"/><path d="m7 13 2 5h7m1-9 4 1v4l-5 1M4 17h4"/>',
  people:
    '<circle cx="9" cy="8" r="3"/><path d="M3 20v-2a6 6 0 0 1 12 0v2M16 5a3 3 0 0 1 0 6m2 3a5 5 0 0 1 3 4v2"/>',
  clinic: '<path d="M3 21V7l9-4 9 4v14M7 21v-6h10v6M10 10h4m-2-2v4"/>',
  ai: '<path d="M12 3a4 4 0 0 0-4 4v1a3 3 0 0 0-3 3v1a3 3 0 0 0 3 3v2a4 4 0 0 0 8 0v-2a3 3 0 0 0 3-3v-1a3 3 0 0 0-3-3V7a4 4 0 0 0-4-4Z"/><path d="M8 11h.01M16 11h.01M9 15h6M12 1v2M3 12H1m22 0h-2"/>',
  database:
    '<ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/>',
  code: '<path d="m8 7-5 5 5 5m8-10 5 5-5 5m-3-13-2 16"/>',
  workflow:
    '<rect x="3" y="3" width="6" height="6" rx="1"/><rect x="15" y="15" width="6" height="6" rx="1"/><rect x="15" y="3" width="6" height="6" rx="1"/><path d="M9 6h6m-3 0v12h3"/>',
  shield:
    '<path d="M12 3 20 6v5c0 5-3.5 8.2-8 10-4.5-1.8-8-5-8-10V6l8-3Z"/><path d="m9 12 2 2 4-4"/>',
};

const esc = (value) =>
  String(value).replace(
    /[&<>"']/g,
    (char) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        char
      ],
  );
const icon = (name, className = "") =>
  `<svg class="icon ${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.55" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name] || ICONS.code}</svg>`;
const chips = (items) =>
  `<div class="stack">${items.map((item) => `<span>${esc(item)}</span>`).join("")}</div>`;

// Compact, self-contained technology marks: no external image/icon CDN is needed.
const TECH_MARKS = {
  PHP: { glyph: "php", color: "#a8b4eb", shape: "wordmark" },
  MySQL: { icon: "database", color: "#f1a33c" },
  SQL: { icon: "database", color: "#7db8ee" },
  Python: { glyph: "Py", color: "#f5d15b", shape: "python" },
  "Query optimization": { icon: "chart", color: "#65d9b0" },
  HTML5: { glyph: "5", color: "#ff865e", shape: "shield" },
  CSS3: { glyph: "3", color: "#60a5fa", shape: "shield" },
  JavaScript: { glyph: "JS", color: "#f7df65", shape: "square" },
  AJAX: { glyph: "</>", color: "#87a9ff", shape: "wordmark" },
  Bootstrap: { glyph: "B", color: "#b69bff", shape: "square" },
  Tailwind: { icon: "tailwind", color: "#38c7e8" },
  Flutter: { icon: "flutter", color: "#62c9f5" },
  Dart: { glyph: "◆", color: "#5cbaf7", shape: "diamond" },
  "React JS": { icon: "react", color: "#61dafb" },
  Vite: { icon: "bolt", color: "#b9a1ff" },
  "REST APIs": { glyph: "API", color: "#91b3ff", shape: "wordmark" },
  Firebase: { icon: "flame", color: "#ffbf45" },
  "ZKTeco SDK": { icon: "fingerprint", color: "#77e1d0" },
  "VB.NET": { glyph: ".NET", color: "#9a9dff", shape: "wordmark" },
  "Excel / CSV / PDF": { glyph: "XLS", color: "#65d7a5", shape: "wordmark" },
  "Google Apps Script": { glyph: "GAS", color: "#f6c75b", shape: "wordmark" },
  Ollama: { icon: "ollama", color: "#d7e6ff" },
  "Qwen LLM": { glyph: "Q", color: "#8fa9ff", shape: "square" },
  "PII masking": { icon: "shield", color: "#84c7ff" },
  "Input sanitization": { icon: "checkShield", color: "#72dfb3" },
  "Prompt-injection guardrails": { icon: "guard", color: "#ffb86c" },
  "Data-at-rest encryption": { icon: "lock", color: "#b5a0ff" },
  iOS: { glyph: "iOS", color: "#d7e3f7", shape: "wordmark" },
  Android: { glyph: "A", color: "#79d69d", shape: "square" },
  "PHP API": { glyph: "API", color: "#a8b4eb", shape: "wordmark" },
  "Shared data workflows": { icon: "workflow", color: "#8db9ff" },
  "Excel export": { glyph: "XLS", color: "#65d7a5", shape: "wordmark" },
  "Spreadsheet automation": { icon: "chart", color: "#65d7a5" },
  "Attendance integration": { icon: "workflow", color: "#8db9ff" },
  ZKTeco: { icon: "fingerprint", color: "#77e1d0" },
  Gmail: { glyph: "M", color: "#ff8b8b", shape: "square" },
  "Excel / CSV": { glyph: "XLS", color: "#65d7a5", shape: "wordmark" },
  "Data reconciliation": { icon: "checkShield", color: "#72dfb3" },
  "CCTV review": { icon: "eye", color: "#9ab8ff" },
  "Attendance validation": { icon: "checkShield", color: "#72dfb3" },
  "Excel / spreadsheet templates": {
    glyph: "XLS",
    color: "#65d7a5",
    shape: "wordmark",
  },
  "Google Sheets": { glyph: "GS", color: "#72d8a0", shape: "wordmark" },
  "Role-based access": { icon: "shield", color: "#84c7ff" },
  Ollama: { icon: "ollama", color: "#d7e6ff" },
  "Qwen LLM": { glyph: "Q", color: "#8fa9ff", shape: "square" },
  "PII masking": { icon: "shield", color: "#84c7ff" },
  "Input sanitization": { icon: "checkShield", color: "#72dfb3" },
  "Prompt-injection guardrails": { icon: "guard", color: "#ffb86c" },
  "Data-at-rest encryption": { icon: "lock", color: "#b5a0ff" },
};

const TECH_SVGS = {
  database:
    '<ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/>',
  chart: '<path d="M4 19V5m0 14h17M7 15l4-4 3 2 5-6"/><path d="M16 7h3v3"/>',
  tailwind:
    '<path d="M3 9c2-4 5-4 7-1 2 4 5 4 8 0 1-1 2-1 3-1-2 4-5 6-8 4-2-1-4-1-6 1-1 1-2 1-4 1 1-2 1-3 0-4Z" fill="currentColor" stroke="none"/><path d="M3 16c2-3 5-3 7-1 2 3 5 3 8 0 1-1 2-1 3-1-2 3-5 5-8 4-2-1-4-1-6 1-1 1-2 1-4 1 1-2 1-3 0-4Z" fill="currentColor" stroke="none"/>',
  flutter:
    '<path d="M4 14 15 3h6L9 15 4 20Z" fill="currentColor" stroke="none"/><path d="m12 17 4-4 5 5h-6l-3-1Z" fill="currentColor" stroke="none" opacity=".7"/>',
  react:
    '<ellipse cx="12" cy="12" rx="9.5" ry="3.6"/><ellipse cx="12" cy="12" rx="9.5" ry="3.6" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="9.5" ry="3.6" transform="rotate(120 12 12)"/><circle cx="12" cy="12" r="1.7" fill="currentColor" stroke="none"/>',
  bolt: '<path d="M13.5 2 5 13h6l-.5 9L19 10h-6l.5-8Z" fill="currentColor" stroke="none"/>',
  flame:
    '<path d="M13 2c1 5-4 6-2 10 1-2 3-3 4-5 4 4 5 7 3 11-1.5 3-4 4-7 4-4 0-7-3-7-7 0-3 2-6 5-9 0 4 1 5 2 6 0-4 2-7 2-10Z" fill="currentColor" stroke="none"/>',
  fingerprint:
    '<path d="M12 11a2 2 0 0 0-2 2c0 3-.4 5.4-1.5 7M12 7a6 6 0 0 0-6 6c0 2.3-.3 4.2-1.2 6M12 3a10 10 0 0 0-10 10m10-2a2 2 0 0 1 2 2c0 4 .8 6.4 2 8m-4-14a6 6 0 0 1 6 6c0 2.8.5 5.1 1.6 7M16.7 5.6A10 10 0 0 1 22 13"/>',
  shield:
    '<path d="M12 3 20 6v5c0 5-3.5 8.2-8 10-4.5-1.8-8-5-8-10V6l8-3Z"/><path d="M9 12h6"/>',
  checkShield:
    '<path d="M12 3 20 6v5c0 5-3.5 8.2-8 10-4.5-1.8-8-5-8-10V6l8-3Z"/><path d="m8.5 12 2.2 2.2 4.8-4.8"/>',
  guard:
    '<path d="M12 3 20 6v5c0 5-3.5 8.2-8 10-4.5-1.8-8-5-8-10V6l8-3Z"/><path d="M12 8v5m0 3h.01"/>',
  lock: '<rect x="5" y="10" width="14" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3m-4 4v3"/>',
  workflow:
    '<rect x="3" y="3" width="6" height="6" rx="1"/><rect x="15" y="15" width="6" height="6" rx="1"/><rect x="15" y="3" width="6" height="6" rx="1"/><path d="M9 6h6m-3 0v12h3"/>',
  eye: '<path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Z"/><circle cx="12" cy="12" r="2.5"/>',
};

function techIcon(skill) {
  const mark = TECH_MARKS[skill] || {
    glyph: String(skill).slice(0, 2),
    color: "#8ebaff",
    shape: "square",
  };
  const symbol =
    mark.icon && TECH_SVGS[mark.icon]
      ? `<svg viewBox="0 0 24 24" aria-hidden="true">${TECH_SVGS[mark.icon]}</svg>`
      : `<span class="tech-glyph tech-glyph--${mark.shape || "icon"}">${esc(mark.glyph || "")}</span>`;
  return `<span class="tech-icon${mark.shape ? ` tech-icon--${mark.shape}` : ""}" style="--tech-color:${mark.color}" aria-hidden="true">${symbol}</span>`;
}

const skillChips = (items) =>
  `<div class="stack skill-stack">${items.map((item) => `<span class="skill-tech-chip">${techIcon(item)}<span>${esc(item)}</span></span>`).join("")}</div>`;

function renderProjects(filter = "All") {
  const filtered = PROJECTS.filter(
    (project) => filter === "All" || project.category === filter,
  );
  document.querySelector("#list").innerHTML = filtered
    .map(
      (project, i) => `
    <article class="project-card reveal" style="--accent-hue:${project.hue};--card-delay:${(i % 3) * 70}ms">
      <div class="card-topline"><span class="project-code">SYSTEM / ${String(PROJECTS.indexOf(project) + 1).padStart(2, "0")}</span><span class="project-category">${esc(project.category)}</span></div>
      <div class="project-icon-wrap">${icon(project.icon, "project-icon")}<span class="icon-orbit" aria-hidden="true"></span><span class="project-serial">${String(PROJECTS.indexOf(project) + 1).padStart(2, "0")}</span></div>
      <h3>${esc(project.name)}</h3>
      <p class="project-desc">${esc(project.desc)}</p>
      <div class="feature-label"><span class="tiny-line"></span> CORE CAPABILITIES</div>
      <ul class="feature-list">${project.features.map((feature) => `<li><span class="feature-check" aria-hidden="true">↳</span><span>${esc(feature)}</span></li>`).join("")}</ul>
      ${chips(project.stack)}
      <div class="project-footer"><span>HDJV · HR-IT ECOSYSTEM</span><span class="project-status"><i></i> INTEGRATED</span></div>
    </article>`,
    )
    .join("");
  observeReveals(document.querySelectorAll("#list .reveal"));
  enableCardTilt(document.querySelectorAll(".project-card"));
}

function renderSkills() {
  document.querySelector("#skills-grid").innerHTML = Object.entries(SKILLS)
    .map(
      ([label, data], index) => `
    <article class="skill-card reveal" style="--i:${index}">
      <div class="skill-card-head">${icon(data.icon, "skill-icon")}<span class="skill-index">CAPABILITY / ${String(index + 1).padStart(2, "0")}</span></div>
      <h3>${esc(label)}</h3><p class="skill-card-copy">${
        [
          "Building database-backed platforms and optimizing queries.",
          "Creating responsive web experiences and cross-platform mobile tools.",
          "Connecting applications, device data, and reporting workflows.",
          "Protecting sensitive information while enabling useful local AI.",
        ][index]
      }</p>
      ${skillChips(data.items)}
    </article>`,
    )
    .join("");
  const technologyItems = Object.values(SKILLS).flatMap((group) => group.items);
  document.querySelector("#marquee-track").innerHTML = [...Array(2)]
    .map(() =>
      technologyItems
        .map(
          (skill) =>
            `<span class="marquee-item">${techIcon(skill)}<span>${esc(skill.toUpperCase())}</span></span>`,
        )
        .join(""),
    )
    .join("");
  observeReveals(document.querySelectorAll("#skills-grid .reveal"));
}

function renderExperience() {
  document.querySelector("#exp").innerHTML = EXPERIENCE.map(
    (item, index) => `
    <article class="timeline-item reveal">
      <div class="timeline-marker">${String(index + 1).padStart(2, "0")}</div>
      <div class="timeline-main"><span class="timeline-date">${esc(item.date)}</span><h3>${esc(item.title)}</h3><p class="timeline-company">${esc(item.company)}</p>${item.bullets.length ? `<ul>${item.bullets.map((bullet) => `<li>${esc(bullet)}</li>`).join("")}</ul>` : '<p class="education-note">Completed academic program.</p>'}</div>
    </article>`,
  ).join("");
  observeReveals(document.querySelectorAll("#exp .reveal"));
}

function observeReveals(elements) {
  if (!("IntersectionObserver" in window)) {
    elements.forEach((element) => element.classList.add("in"));
    return;
  }
  const observer = new IntersectionObserver(
    (entries, activeObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("in");
        activeObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.08, rootMargin: "0px 0px -30px 0px" },
  );
  elements.forEach((element) => observer.observe(element));
}

renderProjects();
renderSkills();
renderExperience();
document.querySelector("#year").textContent = new Date().getFullYear();
document.querySelector("#hero-year").textContent = new Date().getFullYear();
observeReveals(
  document.querySelectorAll(
    ".intro-copy.reveal, .section-head.reveal, .filter-row.reveal, .systems-note.reveal",
  ),
);

// Portfolio filters make the 12-project system catalog easier to explore.
document.querySelectorAll(".filter-chip").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter-chip").forEach((chip) => {
      const active = chip === button;
      chip.classList.toggle("active", active);
      chip.setAttribute("aria-pressed", String(active));
    });
    renderProjects(button.dataset.filter || "All");
  });
});

// Set paths centrally, so both GitHub Pages subpaths and Netlify root hosting work.
const cvUrl = publicAsset("Chris%20Allan%20Dimla%20resume.pdf");
document.querySelectorAll(".resume-link").forEach((link) => {
  link.href = cvUrl;
  link.setAttribute("download", "Chris Allan Dimla resume.pdf");
});

// Neutral in-code portrait fallback means the site has a polished look before chris.png is added.
const portraitFallback =
  "data:image/svg+xml," +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 460 620"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#2c8df0" stop-opacity=".68"/><stop offset="1" stop-color="#101b4b" stop-opacity=".16"/></linearGradient></defs><circle cx="230" cy="195" r="86" fill="url(#g)" stroke="#6ddfff" stroke-opacity=".7" stroke-width="2"/><path d="M70 620c3-143 61-232 160-232s157 89 160 232" fill="url(#g)" stroke="#6ddfff" stroke-opacity=".55" stroke-width="2"/><path d="M125 196c0-72 45-118 105-118s105 46 105 118" fill="none" stroke="#6ddfff" stroke-opacity=".35" stroke-width="3"/><circle cx="230" cy="300" r="4" fill="#83eaff"/></svg>',
  );
document.querySelectorAll("img.me").forEach((image) => {
  image.src = publicAsset("images/chris.png");
  const useFallback = () => {
    if (!image.src.startsWith("data:image/svg+xml"))
      image.src = portraitFallback;
  };
  image.addEventListener("error", useFallback, { once: true });
  if (image.complete && image.naturalWidth === 0) useFallback();
});

// Mobile navigation
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("#main-nav");
menuToggle.addEventListener("click", () => {
  const open = menuToggle.getAttribute("aria-expanded") !== "true";
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.setAttribute(
    "aria-label",
    open ? "Close navigation" : "Open navigation",
  );
  nav.classList.toggle("nav-open", open);
});
nav.querySelectorAll('a[href^="#"]').forEach((link) =>
  link.addEventListener("click", (event) => {
    const target = document.querySelector(link.getAttribute("href"));
    if (target) {
      event.preventDefault();
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      target.scrollIntoView({
        behavior: reduceMotion ? "auto" : "smooth",
        block: "start",
      });
      if (window.location.hash !== link.hash)
        history.pushState(null, "", link.hash);
    }
    nav.classList.remove("nav-open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");
  }),
);

// Scroll progress, subtle header shift and active-section navigation.
const progressBar = document.querySelector("#scroll-progress-bar");
const topbar = document.querySelector("#topbar");
let scrollQueued = false;
const updateScroll = () => {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  progressBar.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`;
  topbar.classList.toggle("top--scrolled", window.scrollY > 24);
  scrollQueued = false;
};
window.addEventListener(
  "scroll",
  () => {
    if (scrollQueued) return;
    scrollQueued = true;
    requestAnimationFrame(updateScroll);
  },
  { passive: true },
);
updateScroll();

if ("IntersectionObserver" in window) {
  const trackedSections = [
    ...document.querySelectorAll("main section[id], footer[id]"),
  ];
  const navLinks = [...document.querySelectorAll(".nav a")];
  const activeObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const current = `#${entry.target.id}`;
        navLinks.forEach((link) =>
          link.classList.toggle(
            "active",
            link.getAttribute("href") === current,
          ),
        );
      });
    },
    { rootMargin: "-35% 0px -55% 0px", threshold: 0 },
  );
  trackedSections.forEach((section) => activeObserver.observe(section));
}

// Animated metric counters.
const countUp = (element) => {
  const end = Number(element.dataset.count || 0);
  const suffix = element.dataset.suffix || "";
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    element.textContent = `${end.toLocaleString("en-US")}${suffix}`;
    return;
  }
  const start = performance.now();
  const tick = (now) => {
    const t = Math.min((now - start) / 1200, 1);
    element.textContent = `${Math.round(end * (1 - Math.pow(1 - t, 3))).toLocaleString("en-US")}${suffix}`;
    if (t < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
};
if ("IntersectionObserver" in window) {
  const countObserver = new IntersectionObserver(
    (entries, observer) =>
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        countUp(entry.target);
        observer.unobserve(entry.target);
      }),
    { threshold: 0.5 },
  );
  document
    .querySelectorAll("[data-count]")
    .forEach((element) => countObserver.observe(element));
} else {
  document.querySelectorAll("[data-count]").forEach(countUp);
}

// Cursor tilt adds depth on desktop; touch users get the same card design without tilt.
function enableCardTilt(cards) {
  if (
    !window.matchMedia("(hover: hover) and (pointer: fine)").matches ||
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  )
    return;
  cards.forEach((card) => {
    card.addEventListener("pointermove", (event) => {
      const rect = card.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width;
      const y = (event.clientY - rect.top) / rect.height;
      card.style.setProperty("--tilt-x", `${(0.5 - y) * 3.2}deg`);
      card.style.setProperty("--tilt-y", `${(x - 0.5) * 3.2}deg`);
      card.style.setProperty("--pointer-x", `${x * 100}%`);
      card.style.setProperty("--pointer-y", `${y * 100}%`);
    });
    card.addEventListener("pointerleave", () => {
      card.style.setProperty("--tilt-x", "0deg");
      card.style.setProperty("--tilt-y", "0deg");
      card.style.setProperty("--pointer-x", "50%");
      card.style.setProperty("--pointer-y", "50%");
    });
  });
}

// Three.js network background. CSS effects remain if WebGL is not supported.
function initScene() {
  const canvas = document.querySelector("#webgl-bg");
  if (!canvas || window.matchMedia("(prefers-reduced-motion: reduce)").matches)
    return;
  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: "low-power",
    });
  } catch (error) {
    canvas.style.display = "none";
    console.warn("WebGL is unavailable; CSS background remains active.", error);
    return;
  }
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
  renderer.setClearColor(0x030713, 0);
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    52,
    window.innerWidth / window.innerHeight,
    0.1,
    100,
  );
  camera.position.set(0, 0, 19);

  const geometryGroup = new THREE.Group();
  geometryGroup.position.set(5, 0.3, -2.5);
  scene.add(geometryGroup);
  const outerShape = new THREE.Mesh(
    new THREE.IcosahedronGeometry(2.55, 1),
    new THREE.MeshBasicMaterial({
      color: 0x287edb,
      wireframe: true,
      transparent: true,
      opacity: 0.19,
    }),
  );
  const innerShape = new THREE.Mesh(
    new THREE.IcosahedronGeometry(1.65, 1),
    new THREE.MeshBasicMaterial({
      color: 0x4bd6ff,
      wireframe: true,
      transparent: true,
      opacity: 0.13,
    }),
  );
  innerShape.rotation.set(0.5, -0.3, 0.25);
  geometryGroup.add(outerShape, innerShape);
  const orbitA = new THREE.Mesh(
    new THREE.TorusGeometry(3.45, 0.012, 5, 120),
    new THREE.MeshBasicMaterial({
      color: 0x398eff,
      wireframe: true,
      transparent: true,
      opacity: 0.23,
    }),
  );
  orbitA.rotation.set(0.95, 0.35, 0.2);
  const orbitB = new THREE.Mesh(
    new THREE.TorusGeometry(3.05, 0.009, 5, 120),
    new THREE.MeshBasicMaterial({
      color: 0x6c69ff,
      wireframe: true,
      transparent: true,
      opacity: 0.18,
    }),
  );
  orbitB.rotation.set(0.35, 1.12, -0.45);
  geometryGroup.add(orbitA, orbitB);

  const starCount = window.innerWidth < 700 ? 230 : 440;
  const starPositions = new Float32Array(starCount * 3);
  for (let i = 0; i < starCount; i += 1) {
    starPositions[i * 3] = (Math.random() - 0.5) * 35;
    starPositions[i * 3 + 1] = (Math.random() - 0.5) * 22;
    starPositions[i * 3 + 2] = -12 + Math.random() * 20;
  }
  const starGeometry = new THREE.BufferGeometry();
  starGeometry.setAttribute(
    "position",
    new THREE.BufferAttribute(starPositions, 3),
  );
  const stars = new THREE.Points(
    starGeometry,
    new THREE.PointsMaterial({
      color: 0x7ebaff,
      size: 0.042,
      transparent: true,
      opacity: 0.52,
      sizeAttenuation: true,
      depthWrite: false,
    }),
  );
  scene.add(stars);

  const nodeCount = window.innerWidth < 700 ? 60 : 100;
  const nodeBase = new Float32Array(nodeCount * 3);
  const nodePositions = new Float32Array(nodeCount * 3);
  const nodePhase = new Float32Array(nodeCount);
  for (let i = 0; i < nodeCount; i += 1) {
    nodeBase[i * 3] = (Math.random() - 0.5) * 32;
    nodeBase[i * 3 + 1] = (Math.random() - 0.5) * 18;
    nodeBase[i * 3 + 2] = -8 + Math.random() * 14;
    nodePhase[i] = Math.random() * Math.PI * 2;
  }
  nodePositions.set(nodeBase);
  const connections = [];
  for (let i = 0; i < nodeCount; i += 1) {
    const neighbors = [];
    for (let j = i + 1; j < nodeCount; j += 1) {
      const dx = nodeBase[i * 3] - nodeBase[j * 3];
      const dy = nodeBase[i * 3 + 1] - nodeBase[j * 3 + 1];
      const dz = nodeBase[i * 3 + 2] - nodeBase[j * 3 + 2];
      const distance = dx * dx + dy * dy + dz * dz;
      if (distance < 13.5) neighbors.push({ index: j, distance });
    }
    neighbors
      .sort((a, b) => a.distance - b.distance)
      .slice(0, 2)
      .forEach((neighbor) => connections.push([i, neighbor.index]));
  }
  const linePositions = new Float32Array(connections.length * 6);
  const lineGeometry = new THREE.BufferGeometry();
  lineGeometry.setAttribute(
    "position",
    new THREE.BufferAttribute(linePositions, 3),
  );
  const network = new THREE.LineSegments(
    lineGeometry,
    new THREE.LineBasicMaterial({
      color: 0x2769b9,
      transparent: true,
      opacity: 0.14,
      depthWrite: false,
    }),
  );
  scene.add(network);
  const nodeGeometry = new THREE.BufferGeometry();
  nodeGeometry.setAttribute(
    "position",
    new THREE.BufferAttribute(nodePositions, 3),
  );
  const nodes = new THREE.Points(
    nodeGeometry,
    new THREE.PointsMaterial({
      color: 0x55cfff,
      size: 0.055,
      transparent: true,
      opacity: 0.45,
      sizeAttenuation: true,
      depthWrite: false,
    }),
  );
  scene.add(nodes);

  let pointerX = 0,
    pointerY = 0,
    targetX = 0,
    targetY = 0,
    frame = 0,
    pageVisible = !document.hidden;
  const onPointerMove = (event) => {
    targetX = (event.clientX / Math.max(window.innerWidth, 1) - 0.5) * 1.1;
    targetY = (event.clientY / Math.max(window.innerHeight, 1) - 0.5) * 0.7;
  };
  const resize = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    camera.aspect = width / Math.max(height, 1);
    camera.position.z = width < 700 ? 23 : width < 1100 ? 21 : 19;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height, false);
    geometryGroup.position.x = width < 700 ? 3.2 : width < 1100 ? 4.2 : 5.0;
    geometryGroup.position.y = width < 700 ? -1.5 : 0.3;
  };
  const tick = (now) => {
    frame = requestAnimationFrame(tick);
    if (!pageVisible) return;
    const time = now * 0.00025;
    pointerX += (targetX - pointerX) * 0.025;
    pointerY += (targetY - pointerY) * 0.025;
    geometryGroup.rotation.y = time * 0.75 + pointerX * 0.12;
    geometryGroup.rotation.x = Math.sin(time * 0.7) * 0.1 + pointerY * 0.09;
    innerShape.rotation.y = -time * 1.05;
    innerShape.rotation.x = 0.5 + Math.sin(time) * 0.1;
    orbitA.rotation.z += 0.00055;
    orbitB.rotation.x -= 0.00035;
    stars.rotation.y = time * 0.045 + pointerX * 0.006;
    const updatedLines = lineGeometry.attributes.position.array;
    for (let i = 0; i < nodeCount; i += 1) {
      const phase = time * 2.7 + nodePhase[i];
      nodePositions[i * 3] = nodeBase[i * 3] + Math.sin(phase) * 0.09;
      nodePositions[i * 3 + 1] =
        nodeBase[i * 3 + 1] + Math.cos(phase * 0.82) * 0.075;
      nodePositions[i * 3 + 2] =
        nodeBase[i * 3 + 2] + Math.sin(phase * 0.65) * 0.1;
    }
    for (let i = 0; i < connections.length; i += 1) {
      const [a, b] = connections[i];
      const offset = i * 6;
      updatedLines[offset] = nodePositions[a * 3];
      updatedLines[offset + 1] = nodePositions[a * 3 + 1];
      updatedLines[offset + 2] = nodePositions[a * 3 + 2];
      updatedLines[offset + 3] = nodePositions[b * 3];
      updatedLines[offset + 4] = nodePositions[b * 3 + 1];
      updatedLines[offset + 5] = nodePositions[b * 3 + 2];
    }
    nodeGeometry.attributes.position.needsUpdate = true;
    lineGeometry.attributes.position.needsUpdate = true;
    renderer.render(scene, camera);
  };
  document.addEventListener("visibilitychange", () => {
    pageVisible = !document.hidden;
  });
  window.addEventListener("pointermove", onPointerMove, { passive: true });
  window.addEventListener("resize", resize, { passive: true });
  resize();
  tick(0);
  window.addEventListener(
    "pagehide",
    () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("resize", resize);
      renderer.dispose();
      starGeometry.dispose();
      lineGeometry.dispose();
      nodeGeometry.dispose();
    },
    { once: true },
  );
}
initScene();
