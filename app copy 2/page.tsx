"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValue, useSpring } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Cloud,
  Code2,
  Database,
  Download,
  ExternalLink,
  Layers3,
  Award,
  Gauge,
  ShieldCheck,
  Mail,
  Menu,
  Sparkles,
  X,
} from "lucide-react";
import Lenis from "lenis";

const experience = [
  { date: "MAY 2026 — PRESENT", role: "Data Engineer 2", company: "Deloitte", text: "Building AWS infrastructure for Ataccama Data Quality for a leading U.S. banking organization, using AWS and Databricks across cloud infrastructure, data engineering, data quality and enterprise data governance.", current: true, highlights: ["AWS infrastructure and cloud foundations", "Databricks data engineering workflows", "Ataccama Data Quality + governance"] },
  { date: "NOV 2022 — MAY 2026", role: "Data Engineer", company: "Cognizant Technology Solutions", text: "Engineered scalable lakehouse platforms, ingestion frameworks, MDM/Golden Record solutions, APIs and governed ETL pipelines across regulated pharmaceutical data environments.", highlights: ["10TB+ legacy data migration to Apache Iceberg on AWS S3", "10M+ records/day ingestion with 99.9% data uptime", "30% reduction in Spark pipeline execution time and cloud compute cost", "40% reduction in clinical-trial reporting lag through API integrations", "15+ hours/week of manual setup eliminated through Python automation", "25% reduction in data-quality errors through programmatic validation"] },
  { date: "2018 — 2022", role: "Bachelor of Engineering", company: "Modern College of Engineering · SPPU", text: "Electronics & Telecommunications Engineering with Honors in AI/ML. CGPA 9.34/10.", highlights: ["Honors in Artificial Intelligence & Machine Learning", "Foundation in engineering, systems and applied AI"] },
];

const projects = [
  {
    id: "01", title: "AWS Data Quality Platform", short: "End-to-end cloud foundations for governed data-quality workloads, with AWS infrastructure, Terraform and Databricks in the delivery path.",
    detail: "At Deloitte, I work on AWS infrastructure supporting Ataccama Data Quality for a leading U.S. banking organization. My work sits across cloud foundations, infrastructure-as-code and the data-quality delivery path, with Databricks also part of the engineering stack. The portfolio intentionally keeps client-specific implementation details private.",
    tags: ["AWS", "Terraform", "Databricks", "IAM", "S3"], kind: "aws", metric: "CLOUD + DATA",
    context: "Deloitte · Data Engineer 2", role: "AWS infrastructure · Databricks · data quality",
    flow: ["Terraform-managed infrastructure", "AWS identity, storage & compute foundations", "Databricks data engineering workflows", "Ataccama Data Quality & governance"],
    technical: ["AWS S3", "IAM", "Terraform", "Databricks", "Python", "SQL", "Data Quality"],
    outcome: "Building production-ready foundations for governed enterprise data-quality workflows while keeping infrastructure repeatable and maintainable."
  },
  {
    id: "02", title: "Databricks Lakehouse", short: "10TB+ legacy data migration to Apache Iceberg on AWS S3, with scalable PySpark processing and governed lakehouse patterns.",
    detail: "An end-to-end lakehouse migration focused on moving 10TB+ of legacy data to Apache Iceberg on AWS S3. The work involved scalable ingestion and transformation patterns, PySpark processing, data validation and operational improvements that reduced pipeline execution time and cloud compute cost.",
    tags: ["Databricks", "PySpark", "Iceberg", "S3", "SQL"], kind: "lake", metric: "10TB+ DATA",
    context: "Enterprise data platform", role: "Data engineering · migration · optimization",
    flow: ["Legacy source extraction", "PySpark transformation & validation", "Apache Iceberg tables on S3", "Databricks-driven processing & downstream consumption"],
    technical: ["PySpark", "Python", "SQL", "Apache Iceberg", "AWS S3", "Databricks", "Spark"],
    outcome: "Migrated 10TB+ of legacy data and contributed to a 30% reduction in Spark pipeline execution time and cloud compute cost."
  },
  {
    id: "03", title: "Golden Record", short: "End-to-end MDM and identity-resolution workflows that reconcile disparate customer records into a trusted source of truth.",
    detail: "Designed and engineered data workflows around MDM and Golden Record concepts, using cross-reference mappings and programmatic validation to reconcile records from disparate sources. The work connected ingestion, transformation, quality checks and downstream consumption into a governed data flow.",
    tags: ["MDM", "XREF", "SQL", "PySpark", "Data Quality"], kind: "golden", metric: "TRUSTED DATA",
    context: "Regulated enterprise data", role: "Data engineering · MDM · data quality",
    flow: ["Source ingestion", "Standardization & transformation", "XREF / identity resolution", "Golden Record + downstream data quality"],
    technical: ["Python", "PySpark", "SQL", "MDM", "XREF", "Validation"],
    outcome: "Built governed data workflows that reduced data-quality errors by 25% through programmatic validation and reusable quality checks."
  },
];

const githubProjects = [
  { title: "SQL Lineage Visualizer", category: "DATA ENGINEERING", description: "Interactive table- and column-level SQL lineage with multi-dialect parsing, focus highlighting, query history, saved snippets and PNG export.", stack: ["Python", "FastAPI", "SQLGlot", "React Flow"], href: "https://github.com/yashdantale/sql-lineage-visualizer", demo: "https://sql-lineage-visualizer.netlify.app/", tone: "lime", number: "01" },
  { title: "SparkTune Pro", category: "BIG DATA", description: "A high-performance Apache Spark cluster resource calculator designed to help Data Engineers reason about cluster sizing and configuration across YARN and Kubernetes.", stack: ["Apache Spark", "React", "Vite"], href: "https://github.com/yashdantale/SparkTune-Pro", demo: "https://sparktunepro.netlify.app/", tone: "blue", number: "02" },
  { title: "Ether-Cloud", category: "WEB3 / STORAGE", description: "A decentralized cloud-storage application combining Ethereum smart-contract infrastructure with IPFS-based storage, developed around a blockchain-first architecture.", stack: ["Ethereum", "IPFS", "Truffle", "JavaScript"], href: "https://github.com/yashdantale/Ether-Cloud", demo: "", tone: "violet", number: "03" },
  { title: "Image Fourier Transform", category: "AI / COMPUTER VISION", description: "Streamlit application that converts uploaded images into frequency-domain representations, visualizes magnitude and phase spectra, and reconstructs images with the inverse Fourier transform.", stack: ["Python", "NumPy", "SciPy", "Streamlit"], href: "https://github.com/yashdantale/Image-Fourier-Transform-", demo: "https://yashdantale-image-fourier-transform--app-z0w9m2.streamlit.app/", tone: "cyan", number: "04" },
];

const credentials = [
  ["Databricks Certified Data Engineer Associate", "Data Engineering", "Certified", "DATABRICKS"],
  ["Databricks Certified Generative AI Engineer Associate", "Generative AI · RAG · LLM applications", "Certified", "GENAI"],
  ["Microsoft Certified: Azure Data Fundamentals", "Cloud + Data", "Certified", "AZURE"],
  ["GSI NVIDIA Technologies Curriculum", "AI / ML Foundations", "Curriculum", "AI / ML"],
];

const impact = [
  ["10TB+", "legacy data migrated", "Apache Iceberg · AWS S3"],
  ["10M+", "records processed daily", "enterprise ingestion"],
  ["30%", "pipeline execution improvement", "Spark optimization"],
  ["40%", "reporting lag reduced", "API integrations"],
  ["15+ hrs", "manual work removed weekly", "Python automation"],
  ["25%", "data-quality error reduction", "programmatic validation"],
];

const technologies = ["AWS", "Terraform", "PySpark", "Apache Iceberg", "Databricks", "Python", "SQL", "Spark", "Docker", "React", "Git", "Azure", "Hadoop", "Scala", "Airflow", "LangChain", "OpenAI APIs", "RAG", "Vector DBs"];
const skills = [
  { icon: Cloud, title: "Cloud", items: ["AWS", "Terraform", "Docker", "Infrastructure"] },
  { icon: Database, title: "Data", items: ["Databricks", "PySpark", "SQL", "Data Quality"] },
  { icon: Code2, title: "Development", items: ["Python", "JavaScript", "React", "Automation"] },
];

const techMeta: Record<string, { slug: string; color: string; mark: string }> = {
  AWS: { slug: "amazonaws", color: "ff9900", mark: "AWS" },
  Terraform: { slug: "terraform", color: "844fba", mark: "TF" },
  PySpark: { slug: "apachespark", color: "e25a1c", mark: "PS" },
  "Apache Iceberg": { slug: "apacheiceberg", color: "3b82f6", mark: "AI" },
  Databricks: { slug: "databricks", color: "ff3621", mark: "DB" },
  Python: { slug: "python", color: "3776ab", mark: "PY" },
  SQL: { slug: "postgresql", color: "4169e1", mark: "SQL" },
  Spark: { slug: "apachespark", color: "e25a1c", mark: "SP" },
  Docker: { slug: "docker", color: "2496ed", mark: "DK" },
  React: { slug: "react", color: "61dafb", mark: "R" },
  Git: { slug: "git", color: "f05032", mark: "G" },
  Azure: { slug: "microsoftazure", color: "0078d4", mark: "AZ" },
  Hadoop: { slug: "apachehadoop", color: "66ccff", mark: "HD" },
  Scala: { slug: "scala", color: "dc322f", mark: "SC" },
  Airflow: { slug: "apacheairflow", color: "017cee", mark: "AF" },
  LangChain: { slug: "langchain", color: "1c3c3c", mark: "LC" },
  "OpenAI APIs": { slug: "", color: "74aa9c", mark: "AI" },
  RAG: { slug: "", color: "67dcff", mark: "RAG" },
  "Vector DBs": { slug: "", color: "a88cff", mark: "VDB" },
};

function BrandIcon({ brand, size = 18 }: { brand: "github" | "linkedin"; size?: number }) {
  if (brand === "github") {
    return <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.835 2.809 1.305 3.495.998.108-.776.418-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.468-2.38 1.236-3.22-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.805 5.625-5.476 5.92.43.372.823 1.102.823 2.222 0 1.606-.014 2.896-.014 3.286 0 .322.216.696.825.577C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12z"/></svg>;
  }
  return <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V8.999h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.604 0 4.27 2.372 4.27 5.456v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.119 20.452H3.555V8.999h3.564v11.453zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/></svg>;
}

function TechIcon({ tech }: { tech: string }) {
  const meta = techMeta[tech] ?? { slug: "", color: "b8ff32", mark: tech.slice(0, 2).toUpperCase() };
  const [loaded, setLoaded] = useState(false);
  return <span className={`tech-logo ${tech === "AWS" ? "aws-logo" : ""}`} style={{ "--logo-color": `#${meta.color}` } as React.CSSProperties}>
    <b>{tech === "AWS" ? "aws" : meta.mark}</b>
    {meta.slug && tech !== "AWS" ? <img className={loaded ? "logo-loaded" : ""} src={`https://cdn.simpleicons.org/${meta.slug}/${meta.color}`} alt="" loading="lazy" onLoad={() => setLoaded(true)} onError={() => setLoaded(false)} /> : null}
    {tech === "AWS" && <i aria-hidden="true" />}
  </span>;
}

type Project = (typeof projects)[number];

function Reveal({ children, delay = 0, className = "", y = 30 }: { children: React.ReactNode; delay?: number; className?: string; y?: number }) {
  return <motion.div className={className} initial={{ opacity: 0, y }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}>{children}</motion.div>;
}

function Magnetic({ children, href, primary = false, className = "" }: { children: React.ReactNode; href: string; primary?: boolean; className?: string }) {
  const x = useMotionValue(0); const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 420, damping: 28 }); const sy = useSpring(y, { stiffness: 420, damping: 28 });
  return <motion.a href={href} className={`button ${primary ? "button-primary" : ""} ${className}`} style={{ x: sx, y: sy }} onMouseMove={(e) => { const r = e.currentTarget.getBoundingClientRect(); x.set((e.clientX - r.left - r.width / 2) * 0.12); y.set((e.clientY - r.top - r.height / 2) * 0.12); }} onMouseLeave={() => { x.set(0); y.set(0); }} whileTap={{ scale: 0.97 }}>{children}</motion.a>;
}

function Glass({ children, className = "", tilt = true, onClick }: { children: React.ReactNode; className?: string; tilt?: boolean; onClick?: () => void }) {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  return <motion.div className={`glass ${className}`} style={{ rotateX: tilt ? rotation.x : 0, rotateY: tilt ? rotation.y : 0 }} transition={{ type: "spring", stiffness: 280, damping: 24 }} onClick={onClick} onMouseMove={(e) => { const node = e.currentTarget; const r = node.getBoundingClientRect(); const px = (e.clientX - r.left) / r.width - 0.5; const py = (e.clientY - r.top) / r.height - 0.5; node.style.setProperty("--gx", `${(px + 0.5) * 100}%`); node.style.setProperty("--gy", `${(py + 0.5) * 100}%`); setRotation({ x: -py * 3.5, y: px * 3.5 }); }} onMouseLeave={() => setRotation({ x: 0, y: 0 })}><span className="glass-shine" /><span className="glass-border" />{children}</motion.div>;
}

function ProjectVisual({ kind, expanded = false }: { kind: string; expanded?: boolean }) {
  return <div className={`project-visual ${kind} ${expanded ? "expanded" : ""}`} aria-hidden="true">
    {kind === "aws" && <>
      <div className="aws-ring r1" /><div className="aws-ring r2" /><div className="aws-ring r3" /><div className="aws-core">AWS</div>
      {[[22,36],[50,20],[78,34],[67,63],[30,66]].map(([x,y],i)=><span className={`node n${i}`} style={{ left: `${x}%`, top: `${y}%` }} key={i} />)}
      <span className="route a" /><span className="route b" /><span className="route c" /><span className="route d" /><span className="data-stream s1" /><span className="data-stream s2" />
    </>}
    {kind === "lake" && <>
      <div className="lake-plane p1" /><div className="lake-plane p2" /><div className="lake-plane p3" /><div className="lake-plane p4" />
      <div className="lake-core"><Layers3 size={19} /><span>ICEBERG</span></div><span className="lake-pulse lp1" /><span className="lake-pulse lp2" /><span className="lake-pulse lp3" />
    </>}
    {kind === "golden" && <>
      <div className="golden-core">01</div>
      {[[22,31,"A"],[78,31,"B"],[27,67,"C"],[73,67,"D"]].map(([x,y,label],i)=><span key={i} className="record" style={{ left: `${x}%`, top: `${y}%` }}>{label}</span>)}
      <span className="gold-route g1" /><span className="gold-route g2" /><span className="gold-route g3" /><span className="gold-route g4" /><div className="gold-particles"><i/><i/><i/><i/><i/></div>
    </>}
  </div>;
}

function AppNav({ active, mobileOpen, setMobileOpen }: { active: string; mobileOpen: boolean; setMobileOpen: (v: boolean) => void }) {
  const links = [["Home","home"],["About","about"],["Experience","experience"],["Projects","projects"],["Contact","contact"]];
  return <header className="site-header"><div className="nav-shell">
    <a href="#home" className="brand-mark">YD</a>
    <nav className="desktop-nav">{links.map(([label,id]) => <a key={id} href={`#${id}`} className={active === id ? "active" : ""}>{label}</a>)}</nav>
    <div className="nav-actions"><span className="availability"><i/>Open to opportunities</span><a href="/resume.pdf" className="nav-resume">Resume <Download size={13}/></a></div>
    <button className="menu-button" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">{mobileOpen ? <X size={18}/> : <Menu size={18}/>}</button>
  </div><AnimatePresence>{mobileOpen && <motion.div className="mobile-nav" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>{links.map(([label,id]) => <a key={id} href={`#${id}`} onClick={() => setMobileOpen(false)}>{label}</a>)}</motion.div>}</AnimatePresence></header>;
}

export default function Home() {
  const shell = useRef<HTMLDivElement>(null); const progress = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState("home"); const [mobileOpen, setMobileOpen] = useState(false); const [selected, setSelected] = useState<Project | null>(null); const [activeExp, setActiveExp] = useState(0); const [loading, setLoading] = useState(true);

  useEffect(() => {
    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const touchDevice = matchMedia("(pointer: coarse)").matches;
    if (reduced || touchDevice) return;
    const lenis = new Lenis({ duration: 1.15, smoothWheel: true, syncTouch: false });
    let raf = 0;
    const loop = (t: number) => { lenis.raf(t); raf = requestAnimationFrame(loop); };
    raf = requestAnimationFrame(loop);
    return () => { cancelAnimationFrame(raf); lenis.destroy(); };
  }, []);

  useEffect(() => {
    const move = (e: MouseEvent) => { const x = e.clientX / innerWidth, y = e.clientY / innerHeight; shell.current?.style.setProperty("--mx", `${x * 100}%`); shell.current?.style.setProperty("--my", `${y * 100}%`); shell.current?.style.setProperty("--mouse-x", `${(x - .5) * 34}px`); shell.current?.style.setProperty("--mouse-y", `${(y - .5) * 26}px`); };
    addEventListener("mousemove", move, { passive: true }); return () => removeEventListener("mousemove", move);
  }, []);

  useEffect(() => {
    const ids = ["home","about","experience","projects","technologies","contact"];
    let raf = 0;
    const updateActive = () => {
      const marker = scrollY + Math.min(innerHeight * 0.46, 340);
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= marker) current = id;
      }
      setActive(current);
      raf = 0;
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(updateActive); };
    addEventListener("scroll", onScroll, { passive: true });
    updateActive();
    return () => { removeEventListener("scroll", onScroll); if (raf) cancelAnimationFrame(raf); };
  }, []);

  useEffect(() => {
    const items = Array.from(document.querySelectorAll<HTMLElement>(".timeline-item"));
    const observers = items.map((item, i) => { const o = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setActiveExp(i); }, { rootMargin: "-35% 0px -52% 0px" }); o.observe(item); return o; });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  useEffect(() => {
    let raf = 0;
    const scroll = () => {
      const max = document.documentElement.scrollHeight - innerHeight;
      const p = max ? scrollY / max : 0;
      const heroProgress = Math.min(1, Math.max(0, scrollY / Math.max(1, innerHeight * 0.92)));
      progress.current?.style.setProperty("transform", `scaleX(${p})`);
      shell.current?.style.setProperty("--scroll-y", `${scrollY}px`);
      shell.current?.style.setProperty("--hero-progress", `${heroProgress}`);
      raf = 0;
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(scroll); };
    addEventListener("scroll", onScroll, { passive: true }); scroll();
    return () => { removeEventListener("scroll", onScroll); if (raf) cancelAnimationFrame(raf); };
  }, []);
  useEffect(() => {
    const key = (e: KeyboardEvent) => {
      if (e.key === "Escape") { setSelected(null); setMobileOpen(false); }
    };
    addEventListener("keydown", key);
    return () => removeEventListener("keydown", key);
  }, []);

  useEffect(() => {
    const locked = Boolean(selected || mobileOpen);
    if (locked) document.body.classList.add("ui-locked");
    else document.body.classList.remove("ui-locked");
    return () => document.body.classList.remove("ui-locked");
  }, [selected, mobileOpen]);

  useEffect(() => {
    let cancelled = false;
    const key = "yd-portfolio-loader-seen";
    try {
      if (sessionStorage.getItem(key)) {
        document.documentElement.classList.add("app-ready");
        setLoading(false);
        return;
      }
      sessionStorage.setItem(key, "1");
    } catch {}
    const finish = () => {
      if (cancelled) return;
      document.documentElement.classList.add("app-ready");
      setTimeout(() => { if (!cancelled) setLoading(false); }, 220);
    };
    const timer = window.setTimeout(finish, matchMedia("(prefers-reduced-motion: reduce)").matches ? 420 : 1450);
    return () => { cancelled = true; window.clearTimeout(timer); };
  }, []);

  return <main ref={shell} className="site-shell">
    <AnimatePresence>{loading && <motion.div className="boot-loader" initial={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: .45, ease: [0.16, 1, .3, 1] }} aria-label="Loading portfolio"><div className="boot-inner"><div className="boot-brand">YD<span/></div><div className="boot-visual"><i/><i/><i/><i/><i/><b/></div><div className="boot-meta"><span>YASH DANTALE</span><span>DATA ENGINEERING / SYSTEMS</span></div><div className="boot-track"><span/></div></div></motion.div>}</AnimatePresence>
    <div className="noise"/><div className="cursor-glow"/><div className="global-light"/><div className="global-orb orb-a"/><div className="global-orb orb-b"/><div className="grid"/><div ref={progress} className="scroll-progress"/>
    <AppNav active={active} mobileOpen={mobileOpen} setMobileOpen={setMobileOpen}/>

    <section id="home" className="hero section">
      <div className="hero-world" aria-hidden="true"><div className="world-glow"/><div className="lens-flare"/><div className="aurora a1"/><div className="aurora a2"/><div className="planet"><span/><b/></div><div className="planet-small"/><div className="orbit o1"/><div className="orbit o2"/><div className="orbit o3"/><div className="constellation c1"/><div className="constellation c2"/><div className="mountain far"/><div className="mountain mid"/><div className="mountain near"/><div className="ground-light"/><div className="horizon-line"/>{[1,2,3,4,5,6,7,8,9,10,11,12,13,14].map(i => <i key={i} className={`star star-${i}`}/>)}<div className="floating-dust">{[1,2,3,4,5,6,7,8].map(i => <i key={i}/>)}</div></div>
      <div className="hero-copy-block"><Reveal><div className="eyebrow">HELLO, I&apos;M</div><h1><span>Yash</span><span>Dantale</span></h1><div className="hero-role">DATA ENGINEER</div><div className="accent-rule"/><p>Building scalable cloud, data and infrastructure systems — turning complex engineering problems into reliable, useful products.</p><div className="hero-buttons"><Magnetic href="#projects" primary>Explore My Work <ArrowRight size={16}/></Magnetic><Magnetic href="#contact">Get in Touch <ArrowRight size={16}/></Magnetic></div><div className="socials"><a href="https://github.com/yashdantale" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><BrandIcon brand="github" size={17}/></a><a href="https://www.linkedin.com/in/yashdantale" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><BrandIcon brand="linkedin" size={17}/></a><a href="mailto:yashdantale@gmail.com" aria-label="Email"><Mail size={17}/></a><a href="/resume.pdf" aria-label="Resume"><BriefcaseBusiness size={17}/></a></div></Reveal></div>
      <div className="hero-stack"><Glass className="hero-focus"><div className="mini-label"><Sparkles size={15}/> Currently focused on</div><div className="focus-list"><span>AWS</span><span>Databricks</span><span>Ataccama Data Quality</span><span>Data Engineering</span></div><ArrowUpRight size={17} className="stack-arrow"/></Glass><Glass className="hero-stat"><strong>03<span>+</span></strong><small>Years of Experience</small></Glass><Glass className="hero-stat"><strong>15<span>+</span></strong><small>Projects &amp; Deliverables</small></Glass></div>
      <div className="scroll-hint"><span>SCROLL TO EXPLORE</span><i/></div>
    </section>

    <section id="about" className="section divider about-section">
      <div className="section-kicker"><span>01</span> ABOUT ME</div>
      <div className="about-layout">
        <Reveal>
          <div className="about-intro">
            <h2 className="display-title">I like building things that make complicated systems feel simple.</h2>
            <p className="large-copy">I&apos;m a Data Engineer working across cloud infrastructure, data platforms and data quality. My work sits at the intersection of reliable infrastructure and useful data — from AWS foundations and lakehouse architecture to governed pipelines, MDM and AI-ready systems.</p>
            <p className="large-copy about-secondary">I started with Electronics &amp; Telecommunication Engineering and an Honors focus in AI/ML, then moved into enterprise data engineering. Today I&apos;m focused on building systems that are scalable, observable and practical to operate.</p>
            <div className="about-facts">
              <div><strong>03+</strong><span>years in data engineering</span></div>
              <div><strong>9.34</strong><span>engineering CGPA</span></div>
              <div><strong>AI/ML</strong><span>honors foundation</span></div>
            </div>
          </div>
        </Reveal>
        <div className="about-right">
          <div className="skill-grid">
            {skills.map((s,i) => <Reveal key={s.title} delay={i * .08}><Glass className="skill-card">
              <div className="skill-icon"><s.icon size={21}/></div><h3>{s.title}</h3>
              <div className="skill-items">{s.items.map(x => <span key={x}>{x}</span>)}</div><span className="card-number">0{i + 1}</span>
            </Glass></Reveal>)}
          </div>
        </div>
      </div>
      <Reveal className="about-profile" y={35}>
        <div className="profile-heading"><div><span className="mini-label">HOW I APPROACH ENGINEERING</span><h3>Reliable by design. Practical in execution.</h3></div><p>I care about the part that happens after the demo: maintainability, data correctness, automation, observability and clear ownership.</p></div>
        <div className="approach-grid">
          {[
            ["01","Build for reliability","Design cloud and data workflows with predictable failure handling, clear boundaries and operational simplicity."],
            ["02","Automate the repeatable","Use infrastructure-as-code, reusable patterns and automation to remove unnecessary manual work."],
            ["03","Treat data as a product","Prioritize quality, lineage, governance and consistency so downstream teams can trust the data."],
            ["04","Optimize what matters","Balance performance, scale and cost — especially across distributed processing and large data volumes."],
          ].map(([n,t,d]) => <Glass key={n} className="approach-card"><span className="approach-number">{n}</span><h4>{t}</h4><p>{d}</p></Glass>)}
        </div>
      </Reveal>
      <Reveal className="work-profile" y={35}>
        <div className="profile-heading"><div><span className="mini-label">WHAT I WORK ON</span><h3>Cloud foundations, data platforms and trustworthy data.</h3></div><p>My experience spans the infrastructure underneath data systems as well as the engineering patterns that make those systems dependable in production.</p></div>
        <div className="work-grid">
          {[
            ["CLOUD INFRASTRUCTURE", "AWS, Terraform and infrastructure patterns for enterprise data-quality workloads, with Databricks in the delivery stack."],
            ["DATA PLATFORMS", "Lakehouse architecture, Apache Iceberg, S3, PySpark and scalable data processing."],
            ["DATA QUALITY", "Ataccama Data Quality, MDM, Golden Record workflows and governed enterprise data."],
            ["ENGINEERING", "Python, PySpark, SQL, APIs, ETL pipelines and automation focused on maintainable systems."],
          ].map(([t,d], i) => <Glass key={t} className={`work-card work-card-${i + 1}`}><span>{String(i + 1).padStart(2, "0")}</span><h4>{t}</h4><p>{d}</p><b>↗</b></Glass>)}
        </div>
      </Reveal>
      <Reveal className="ai-profile" y={35}>
        <div className="profile-heading"><div><span className="mini-label">AI / ML IN PRACTICE</span><h3>Curious about AI. Grounded in engineering.</h3></div><p>I started with an Honors foundation in AI/ML and keep building on it through hands-on projects, modern AI tooling and practical data-engineering use cases.</p></div>
        <div className="ai-grid">
          <Glass className="ai-card ai-foundation"><span className="ai-index">01</span><div className="ai-orbit"><i/><i/><i/></div><h4>Foundation</h4><p>Honors in Artificial Intelligence &amp; Machine Learning, backed by an engineering mindset around data, systems and experimentation.</p><div className="ai-tags"><span>AI / ML</span><span>Computer Vision</span><span>Applied Computing</span></div></Glass>
          <Glass className="ai-card ai-applied"><span className="ai-index">02</span><div className="ai-stack-visual"><i/><i/><i/><i/></div><h4>Applied projects</h4><p>Built an Image Fourier Transform application and explored LLM / RAG workflows — learning by turning AI concepts into working software and measurable engineering patterns.</p><div className="ai-tags"><span>Python</span><span>NumPy</span><span>Streamlit</span><span>LLMs</span></div></Glass>
          <Glass className="ai-card ai-modern"><span className="ai-index">03</span><div className="ai-signal"><b>RAG</b><span>→</span><b>LLM</b><span>→</span><b>DATA</b></div><h4>Keeping up with the stack</h4><p>I use AI as an engineering layer: connect reliable data to retrieval, LLM APIs and evaluation rather than treating AI as a black box. I stay current through certifications, documentation and small experiments before bringing a new technique into a project.</p><div className="ai-tags"><span>LangChain</span><span>OpenAI APIs</span><span>RAG</span><span>Vector DBs</span></div></Glass>
        </div>
      </Reveal>
      <div className="metrics">{[["03+","Years Experience"],["10TB+","Data Migrated"],["10M+","Records / Day"],["99.9%","Data Uptime"]].map(([n,l]) => <div className="metric" key={l}><strong>{n}</strong><span>{l}</span></div>)}</div>
    </section>

    <section id="experience" className="section divider experience-section"><div className="section-kicker"><span>02</span> EXPERIENCE</div><div className="experience-layout"><Reveal><h2 className="display-title small">My Journey</h2><p className="large-copy">A timeline of my professional journey, learning, growing and building impactful data and cloud solutions.</p><Magnetic href="/resume.pdf">View Full Resume <ArrowRight size={15}/></Magnetic></Reveal><div className="timeline">{experience.map((item,i) => <Reveal key={item.date} delay={i * .06}><motion.article className={`timeline-item ${activeExp === i ? "active" : ""}`} whileHover={{ x: 4 }}><div className="timeline-marker"><span/></div><div className="timeline-main"><div className="timeline-date">{item.date}</div><h3>{item.role}</h3><h4>{item.company}</h4><p>{item.text}</p>{item.highlights && <ul className="timeline-highlights">{item.highlights.map(h => <li key={h}>{h}</li>)}</ul>}{item.current && <span className="current-badge"><i/> CURRENT</span>}</div></motion.article></Reveal>)}</div>
      </div>
      <Reveal className="credentials" y={35}><div className="profile-heading"><div><span className="mini-label">CREDENTIALS · 04</span><h3>Learning that stays close to the work.</h3></div><p>Certifications across data engineering, Databricks, cloud fundamentals and Generative AI — aligned with the systems I build in production.</p></div><div className="credential-grid">{credentials.map(([title,sub,meta,badge],i)=><Glass key={title} className={`credential-card credential-${i + 1}`} tilt={true}><div className="credential-top"><span className="credential-index">0{i + 1}</span><span className="credential-badge">{badge}</span></div><div className="credential-icon">{i === 0 ? <Gauge size={18}/> : i === 1 ? <Sparkles size={18}/> : i === 2 ? <ShieldCheck size={18}/> : <Award size={18}/>}</div><h4>{title}</h4><p>{sub}</p><span className="credential-status">{meta}</span><i className="credential-sweep"/></Glass>)}</div></Reveal>
    </section>

    <section id="projects" className="section divider projects-section"><div className="section-kicker"><span>03</span> SELECTED WORK</div><Reveal><div className="section-head"><div><h2 className="display-title small">Things I&apos;ve Built</h2><p className="large-copy">A mix of production engineering experience and hands-on projects — from enterprise lakehouse systems to developer tools and applied computing.</p></div><Magnetic href="https://github.com/yashdantale" className="desktop-only">View GitHub <ExternalLink size={15}/></Magnetic></div></Reveal><div className="project-grid-v5">{projects.map((p,i) => <Reveal key={p.id} delay={i * .08} className="project-reveal"><motion.button className={`project-v5 ${i === 0 ? "project-featured" : ""}`} aria-label={`Open case study: ${p.title}`} onClick={() => setSelected(p)} whileHover={{ y: -8 }} whileTap={{ scale: .995 }}><Glass className="project-glass"><ProjectVisual kind={p.kind}/><div className="project-meta"><span>{p.id}</span><span>{p.metric}</span><ArrowUpRight size={16}/></div><div className="project-bottom"><h3>{p.title}</h3><p>{p.short}</p><div className="tags">{p.tags.map(t => <span key={t}>{t}</span>)}</div></div></Glass></motion.button></Reveal>)}</div>
      <Reveal className="impact-block" y={40}><div className="profile-heading"><div><span className="mini-label">ENGINEERING IMPACT</span><h3>Numbers behind the systems.</h3></div><p>Scale, performance and reliability improvements from end-to-end data engineering work — from ingestion and migration to validation and APIs.</p></div><div className="impact-grid">{impact.map(([n,l,d])=><Glass key={n+l} className="impact-card" tilt={true}><strong>{n}</strong><h4>{l}</h4><span>{d}</span><i/></Glass>)}</div></Reveal>
      <Reveal className="github-work" y={40}><div className="profile-heading"><div><span className="mini-label">OPEN SOURCE &amp; PERSONAL BUILDS</span><h3>Projects I build when I want to explore.</h3></div><p>Independent projects that show how I think outside day-to-day enterprise work — visualization, distributed systems, developer tooling and applied mathematics.</p></div><div className="github-grid">{githubProjects.map((p,i)=><Glass key={p.title} className={`github-card tone-${p.tone}`} tilt={true}><div className="github-card-top"><span>{p.number} / {p.category}</span><Code2 size={18}/></div><div className={`github-art github-art-${p.number}`}><span className="art-grid"/><div className="art-shape"><i/><i/><i/><i/></div><b>{p.number}</b></div><h3>{p.title}</h3><p>{p.description}</p><div className="github-tags">{p.stack.map(t=><span key={t}>{t}</span>)}</div><div className="github-actions"><a href={p.href} target="_blank" rel="noreferrer">Source <ExternalLink size={13}/></a>{p.demo && <a href={p.demo} target="_blank" rel="noreferrer">Live demo <ArrowUpRight size={13}/></a>}</div></Glass>)}</div></Reveal>
    </section>

    <section id="technologies" className="section divider tech-section">
      <div className="section-kicker"><span>04</span> TOOLBOX</div>
      <Reveal><div className="section-head toolbox-head"><div><h2 className="display-title small">Tools I Work With</h2><p className="large-copy">The stack behind the systems I build — cloud, data, infrastructure and development tools, with their own visual language.</p></div><div className="toolbox-note"><span className="live-dot"/> Hands-on across cloud + data</div></div></Reveal>
      <div className="tech-cloud">{technologies.map((tech,i) => <Reveal key={tech} delay={i * .025}><Glass className="tech-pill"><TechIcon tech={tech}/><span className="tech-name">{tech}</span><span className="pill-arrow">↗</span></Glass></Reveal>)}</div>
    </section>

    <section id="contact" className="section contact-section"><Glass className="contact-panel" tilt={false}><div className="contact-bg"/><div className="contact-grid"/><div className="contact-copy"><div className="section-kicker"><span>05</span> LET&apos;S CONNECT</div><h2 className="contact-title">Let&apos;s Build Something.</h2><p>I&apos;m always open to interesting engineering opportunities, collaborations or simply a good conversation.</p><div className="hero-buttons"><Magnetic href="mailto:yashdantale@gmail.com" primary>Send a Message <ArrowRight size={15}/></Magnetic><Magnetic href="/resume.pdf">Resume <Download size={15}/></Magnetic></div></div><div className="contact-links"><a href="mailto:yashdantale@gmail.com"><span><Mail size={16}/>yashdantale@gmail.com</span><ArrowRight size={15}/></a><a href="https://www.linkedin.com/in/yashdantale" target="_blank" rel="noopener noreferrer"><span><BrandIcon brand="linkedin" size={15}/>linkedin.com/in/yashdantale</span><ArrowRight size={15}/></a><a href="https://github.com/yashdantale" target="_blank" rel="noopener noreferrer"><span><BrandIcon brand="github" size={15}/>github.com/yashdantale</span><ArrowRight size={15}/></a></div></Glass></section>

    <footer className="footer"><span className="footer-mark">YD</span><span>Engineering the flow · © 2026 Yash Dantale</span><a href="#home" aria-label="Back to top">↑</a></footer>

    <AnimatePresence>{selected && <motion.div className="project-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelected(null)}><motion.div className="project-sheet project-sheet-rich" initial={{ opacity: 0, y: 70, scale: .94 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 45, scale: .96 }} transition={{ type: "spring", stiffness: 240, damping: 26 }} onClick={e => e.stopPropagation()}><button className="sheet-close" onClick={() => setSelected(null)} aria-label="Close project"><X size={18}/></button><div className="sheet-visual"><ProjectVisual kind={selected.kind} expanded/></div><div className="sheet-content rich"><div className="sheet-heading"><div><div className="section-kicker"><span>{selected.id}</span> END-TO-END PROJECT</div><h2>{selected.title}</h2><p className="sheet-lede">{selected.detail}</p></div><div className="sheet-context"><span>{selected.context}</span><b>{selected.role}</b></div></div><div className="sheet-body"><div className="sheet-column"><span className="mini-label">DELIVERY FLOW</span><div className="flow-list">{selected.flow.map((step,i)=><div key={step} className="flow-step"><span>0{i + 1}</span><b>{step}</b></div>)}</div></div><div className="sheet-column"><span className="mini-label">TECHNICAL FOCUS</span><div className="technical-stack">{selected.technical.map(t=><span key={t}>{t}</span>)}</div><div className="sheet-outcome"><span className="mini-label">OUTCOME</span><p>{selected.outcome}</p></div></div></div><div className="tags sheet-tags">{selected.tags.map(t => <span key={t}>{t}</span>)}</div></div></motion.div></motion.div>}</AnimatePresence>
  </main>;
}
