"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  ExternalLink, 
  Lock, 
  Server, 
  Database, 
  Layout, 
  Terminal, 
  Code2, 
  Briefcase, 
  MapPin,
  ChevronDown,
  Menu,
  X,
  User,
  Download,
  ArrowLeft,
  ArrowRight 
} from 'lucide-react';

interface Project {
  title: string;
  type: string;
  tech: string[];
  desc: string;
  status: string;
  link: string | null;
  screenshots?: string[];
}

interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
}

interface SkillGroup {
  category: string;
  icons: string[];
  iconType: any; 
}

const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
  e.preventDefault();
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

const personalInfo = {
  name: "Adrian Fajar Ramdani",
  role: "Software Developer",
  location: "Bandung, Indonesia",
  contact: {
    email: "adrianramdani856@gmail.com",
    phone: "+62 81324436004",
    linkedin: "https://www.linkedin.com/in/adrian-fajar-0521091b4/" ,
    gitHub: "https://github.com/adrianRamdani"
  },
  summary: "With 4+ years of experience, I specialize in building scalable web applications. From complex backend systems monitoring thousands of machines to polished frontend interfaces for e-commerce. I combine technical depth in PHP/Laravel and JavaScript/React with a pragmatic approach to solving business problems."
};

const skills: SkillGroup[] = [
  { category: "Backend", icons: ["PHP", "Laravel", "Javascript", "Node.js", "Go"], iconType: Server },
  { category: "Frontend", icons: ["React", "Next.js", "Vue.js", "Tailwind", "jQuery", "HTML/CSS"], iconType: Layout },
  { category: "Database", icons: ["MySQL", "PostgreSQL"], iconType: Database },
  { category: "Tools", icons: ["Git", "Docker", "Linux"], iconType: Terminal },
];

const experiences: Experience[] = [
  {
    company: "Trust Software",
    role: "Software Developer",
    period: "2023 - Present",
    location: "Remote (France based)",
    description: "Developing varied digital solutions for the French market, ranging from agricultural management to social platforms.",
    highlights: [
      "Built 'Cristosud.com', a specialized E-commerce platform for minerals using WooCommerce, handling custom product attributes and payment flows.",
      "Developed a Fullstack Next.js Booking Application, implementing complex calendar logic and reservation management systems.",
      "Created 'Espace-Foret', a land and commodity management platform for agricultural sectors.",
      "Built 'Monsouhait', a digital will platform supporting multimedia legacy formats (video/audio).",
      "Developed 'Celib-Holidays', a social dating platform with realtime chat features."
    ]
  },
  {
    company: "PT. Bali Business House (Indosoft)",
    role: "Software Developer",
    period: "2021 - 2023",
    location: "Remote (Denmark based)",
    description: "Focused on logistics and feature expansion for Danish hospitality and retail clients.",
    highlights: [
      "Engineered a 'Send Package' tracking feature for Risskov Autoferien, integrating with logistics APIs.",
      "Developed shipping label generation and package tracking for Koimad.dk using PostNord.",
      "Implemented a comprehensive rating and review system for e-commerce products."
    ]
  },
  {
    company: "PT. Bringin Inti Teknologi",
    role: "Software Developer",
    period: "2020 - 2021",
    location: "Jakarta, Indonesia",
    description: "Enterprise-level development for banking infrastructure and internal HR systems.",
    highlights: [
      "Developed a high-scale internal monitoring dashboard for 2,748 CRM (Cash Recycling Machines) across Indonesia, tracking cash flow and hardware health in real-time.",
      "Created an algorithm to categorize and calculate distances between Branch offices and CRMs for logistics optimization.",
      "Built a secure Employee Assessment and Recruitment portal to streamline HR processes."
    ]
  },
  {
    company: "PT. Svara Inovasi Indonesia",
    role: "Android Developer (Internship)",
    period: "2019",
    location: "Bandung, Indonesia",
    description: "Mobile application development for media streaming.",
    highlights: [
      "Contributed to the Svara app, developing the Music Library and 'Top Music' chart features."
    ]
  }
];

const projects: Project[] = [
  {
    title: "Svara",
    type: "Public",
    tech: ["Java"],
    desc: "Contributed to the Svara app, developing the Music Library and 'Top Music' chart features.",
    status: "Live",
    link: "https://svara.id/",
    screenshots: [
        "/images/svara/1.png", 
    ]
  },
  {
    title: "Corporate HR Assessment System",
    type: "NDA",
    tech: ["PHP", "Laravel", "MySQL", "Reporting Engine"],
    desc: "A centralized platform for employee performance reviews and recruitment. Digitized the entire hiring workflow, making the process transparent and data-driven for HR departments.",
    status: "Internal / Confidential",
    link: null
  },
  {
    title: "Nationwide CRM Monitoring",
    type: "NDA",
    tech: ["PHP", "Laravel", "Google Maps API"],
    desc: "An enterprise dashboard monitoring the cash flow and hardware status of 2,748 banking machines (CRMs) across Indonesia. Reduced downtime by providing real-time alerts to maintenance teams.",
    status: "Internal / Confidential",
    link: null
  },
  {
    title: "Risskov Autoferien",
    type: "Public",
    tech: ["Laravel"],
    desc: "Engineered a 'Send Package' tracking feature for Risskov Autoferien, integrating with logistics APIs.",
    status: "Live",
    link: "https://www.risskov.com/",
    screenshots: [
        "/images/risskov/1.png",
        "/images/risskov/2.png",
    ]
  },
  {
    title: "Koimad",
    type: "Public",
    tech: ["PHP Native"],
    desc: "Developed shipping label generation and package tracking for Koimad.dk using PostNord.",
    status: "Live",
    link: "https://www.koimad.dk/",
    screenshots: [
        "/images/koimad/1.png",
        "/images/koimad/2.png",
    ]
  },
  {
    title: "Espace-Foret",
    type: "Internal",
    tech: ["Laravel", "PostgreSQL", "JQuery"],
    desc: "land and commodity management platform for agricultural sectors.",
    status: "Internal / Confidential",
    link: "https://sylvalink.com/",
    screenshots: [
        "/images/espace/1.png",
        "/images/espace/2.png",
        "/images/espace/3.png",
    ]
  },
  {
    title: "Cristosud Minerals Store",
    type: "Public",
    tech: ["WordPress", "WooCommerce", "PHP", "CSS3"],
    desc: "A custom E-commerce solution for selling mineral specimens. Heavily customized WooCommerce templates to showcase unique product details and manage inventory.",
    status: "Live",
    link: "https://cristosud.com",
    screenshots: [
        "/images/cristosud/1.png",
        "/images/cristosud/2.png",
        "/images/cristosud/3.png",
    ]
  },
  {
    title: "Internal Booking Platform",
    type: "Internal",
    tech: ["Next.js", "React", "Node.js", "PostgreSQL"],
    desc: "A modern reservation system allowing users to book appointments and manage schedules. Features include Multi Language EN and FR, dynamic calendar availability, user accounts, and admin dashboard.",
    status: "Live",
    link: "https://pliiz.processus.marketing/",
    screenshots: [
        "/images/booking/1.png",
        "/images/booking/2.png",
        "/images/booking/3.png",
        "/images/booking/4.png",
    ]
  },
];

// --- Animation Variants ---
const containerVariant = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariant = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const sectionVariant = {
  offscreen: { opacity: 0, y: 50 },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      bounce: 0.4,
      duration: 0.8
    }
  }
};

// --- Project Carousel Component ---
const ProjectCarousel = ({ screenshots, title }: { screenshots: string[], title: string }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === screenshots.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? screenshots.length - 1 : prevIndex - 1
    );
  };
  
  const sliderVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <div className="relative h-48 w-full overflow-hidden bg-slate-900 border-b border-slate-800">
      <AnimatePresence initial={false} mode="wait">
        <motion.img
          key={screenshots[currentIndex]}
          custom={currentIndex}
          variants={sliderVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
          src={screenshots[currentIndex]}
          alt={`${title} Screenshot ${currentIndex + 1}`}
          className="absolute inset-0 w-full h-full object-cover transition-transform"
          onError={(e) => { 
            e.currentTarget.src = "https://placehold.co/600x400/5C6BC0/FFFFFF?text=Image+Missing";
            e.currentTarget.onerror = null;
          }}
        />
      </AnimatePresence>

      {/* Navigation Controls */}
      {screenshots.length > 1 && (
        <>
          <button 
            onClick={prevSlide} 
            className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-slate-800/70 hover:bg-slate-700/90 text-white z-20 transition-all shadow-md"
            aria-label="Previous slide"
          >
            <ArrowLeft size={16} />
          </button>
          <button 
            onClick={nextSlide} 
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-slate-800/70 hover:bg-slate-700/90 text-white z-20 transition-all shadow-md"
            aria-label="Next slide"
          >
            <ArrowRight size={16} />
          </button>
        </>
      )}

      {/* Dots Indicator */}
      {screenshots.length > 1 && (
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-20 flex gap-1">
          {screenshots.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full cursor-pointer transition-colors ${
                index === currentIndex ? 'bg-blue-400 scale-110' : 'bg-slate-500/50 hover:bg-slate-400/80'
              }`}
              onClick={() => setCurrentIndex(index)}
            ></div>
          ))}
        </div>
      )}
    </div>
  );
};


// --- Components ---
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "about" },
    { name: "Skills", href: "skills" },
    { name: "Experience", href: "experience" },
    { name: "Projects", href: "projects" },
  ];
  
  const navVariants = {
    top: { 
      backgroundColor: 'rgba(16, 24, 40, 0)',
      paddingTop: 24,
      paddingBottom: 24, 
    },
    scrolled: {
      backgroundColor: 'rgba(15, 23, 42, 0.95)',
      paddingTop: 16,
      paddingBottom: 16,
    }
  };

  return (
    <motion.nav 
      className={`fixed w-full z-50 backdrop-blur-sm shadow-lg border-b border-slate-800/70`}
      variants={navVariants}
      animate={scrolled ? 'scrolled' : 'top'}
      transition={{ duration: 0.3 }}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="/" className="text-xl font-bold text-white tracking-tighter flex items-center gap-2">
          <Code2 className="text-blue-500" />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center"> 
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={`#${link.href}`}
              onClick={(e) => handleScrollToSection(e, link.href)}
              className="text-slate-300 hover:text-white hover:text-blue-400 transition-colors text-sm font-medium"
            >
              {link.name}
            </a>
          ))}
          <a href={`mailto:${personalInfo.contact.email}`} className="text-blue-400 border border-blue-400/30 px-4 py-1.5 rounded-full text-sm font-medium hover:bg-blue-500/10 transition-colors">
            Contact Me
          </a>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-slate-300">
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-full left-0 w-full bg-slate-900 border-b border-slate-800 p-6 flex flex-col gap-4 shadow-2xl"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={`#${link.href}`} 
                onClick={(e) => {
                   setIsOpen(false);
                   handleScrollToSection(e, link.href);
                }}
                className="text-slate-300 hover:text-blue-400 font-medium"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden bg-slate-950">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col-reverse lg:flex-row items-center gap-12">
        
        {/* Animated Text Content */}
        <motion.div 
          variants={containerVariant} 
          initial="hidden" 
          animate="show" 
          className="lg:w-1/2 space-y-8 text-center lg:text-left"
        >
          <motion.div variants={containerVariant} className="space-y-4">
            <motion.h2 variants={itemVariant} className="text-blue-400 font-medium tracking-wide uppercase text-sm">Software Developer</motion.h2>
            <motion.h1 variants={itemVariant} className="text-5xl lg:text-7xl font-bold text-white leading-tight">
              Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Robust</span> Systems.
            </motion.h1>
            <motion.p variants={itemVariant} className="text-lg text-slate-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              I'm Adrian, a developer based in Bandung. I help companies build scalable enterprise solutions and web applications using Laravel, React, and other modern tech.
            </motion.p>
          </motion.div>
          
          <motion.div variants={itemVariant} className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
            <a 
              href="#projects" 
              onClick={(e) => handleScrollToSection(e, 'projects')}
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all shadow-lg shadow-blue-500/25 w-full sm:w-auto text-center"
            >
              View My Work
            </a>
            
            <a 
              href="/cv/Resume-New.pdf" 
              download="CV-Adrian-Fajar-Ramdani.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-slate-900 border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white rounded-lg font-medium transition-all flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              <Download size={18} />
              <span>Download CV</span>
            </a>

          </motion.div>

          <motion.div variants={itemVariant} className="flex gap-6 justify-center lg:justify-start pt-4">
            <a href={personalInfo.contact.linkedin} className="text-slate-400 hover:text-blue-400 transition-colors"><Linkedin size={24} /></a>
            <a href={`mailto:${personalInfo.contact.email}`} className="text-slate-400 hover:text-blue-400 transition-colors"><Mail size={24} /></a>
            <a href={personalInfo.contact.gitHub} className="text-slate-400 hover:text-blue-400 transition-colors"><Github size={24} /></a>
          </motion.div>
        </motion.div>

        {/* Image / Avatar */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="lg:w-1/2 flex justify-center"
        >
          <div className="relative w-64 h-64 lg:w-96 lg:h-96">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-indigo-500 rounded-full blur-2xl opacity-20 animate-pulse"></div>
            <div className="relative w-full h-full rounded-full border-4 border-slate-800 bg-slate-900 overflow-hidden shadow-2xl">
                <img 
                  src="/images/Profile.jfif" 
                  alt="Adrian Fajar Ramdani" 
                  className="w-full h-full object-cover"
                />
            </div>
            
            {/* Floaters */}
            <div className="absolute -bottom-4 -right-4 bg-slate-800 p-4 rounded-xl border border-slate-700 shadow-xl flex items-center gap-3 animate-bounce-slow">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
              <span className="text-sm font-medium text-white">Open to Work</span>
            </div>
          </div>
        </motion.div>
      </div>
      
      <a 
        href="#about"
        onClick={(e) => handleScrollToSection(e, 'about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-slate-500"
      >
        <ChevronDown />
      </a>
    </section>
  );
};

const AboutAndSkills = () => {
  return (
    <motion.section 
      id="about" 
      className="py-20 bg-slate-950 border-t border-slate-900/50"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariant}
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* About */}
          <div className="lg:w-1/2">
            <div className="flex items-center gap-2 mb-6">
              <User className="text-blue-500" size={20} />
              <h3 className="text-xl font-bold text-white">About Me</h3>
            </div>
            <p className="text-slate-400 leading-7 mb-6 text-lg">
              {personalInfo.summary}
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-slate-300">
                <MapPin className="text-slate-500" size={18} />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <Phone className="text-slate-500" size={18} />
                <span>{personalInfo.contact.phone}</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <Mail className="text-slate-500" size={18} />
                <span>{personalInfo.contact.email}</span>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div id="skills" className="lg:w-1/2">
             <div className="flex items-center gap-2 mb-6">
              <Terminal className="text-blue-500" size={20} />
              <h3 className="text-xl font-bold text-white">Technical Arsenal</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skills.map((skillGroup, index) => (
                <motion.div 
                  key={skillGroup.category} 
                  className="bg-slate-900/50 border border-slate-800 p-5 rounded-xl hover:border-slate-700 transition-colors"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                >
                  <div className="flex items-center gap-3 mb-4 text-white font-medium">
                    <skillGroup.iconType size={18} className="text-indigo-400" />
                    {skillGroup.category}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.icons.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-slate-800 text-slate-300 text-xs rounded-full border border-slate-700">
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </motion.section>
  );
};

const Experience = () => {
  return (
    <motion.section 
      id="experience" 
      className="py-20 bg-slate-900"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariant}
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-16">
          <div className="p-2 bg-blue-500/10 rounded-lg mb-4"><Briefcase className="text-blue-500" size={24} /></div>
          <h2 className="text-3xl lg:text-4xl font-bold text-white text-center">Work History</h2>
        </div>

        <motion.div 
          className="max-w-4xl mx-auto space-y-12 relative"
          variants={containerVariant} 
          initial="hidden" 
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Vertical Line */}
          <div className="absolute left-4 lg:left-0 top-2 bottom-2 w-0.5 bg-slate-800"></div>

          {experiences.map((exp, index) => (
            <motion.div 
              key={index} 
              className="relative pl-12 lg:pl-0"
              variants={itemVariant}
            >
              {/* Dot */}
              <div className="absolute left-4 lg:left-0 top-0 -translate-x-[5px] lg:-translate-x-1/2 w-3 h-3 bg-blue-500 rounded-full border-4 border-slate-900 shadow-lg shadow-blue-500/50 z-10"></div>
              
              <div className={`flex flex-col lg:flex-row gap-4 lg:gap-16 ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}>
                
                {/* Date Mobile */}
                <div className="lg:hidden text-sm font-medium text-blue-400 mb-1">{exp.period}</div>

                {/* Content */}
                <div className="lg:w-1/2">
                  <div className={`bg-slate-950 p-6 rounded-2xl border border-slate-800 shadow-sm hover:border-slate-700 transition-all ${index % 2 === 0 ? 'lg:text-left' : 'lg:text-right'}`}>
                    <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                    <div className={`flex flex-col gap-1 mb-4 text-sm text-slate-400 ${index % 2 === 0 ? 'lg:items-start' : 'lg:items-end'}`}>
                      <span className="font-medium text-blue-400">@{exp.company}</span>
                      <span>{exp.location}</span>
                    </div>
                    <p className="text-slate-300 text-sm leading-relaxed mb-4">{exp.description}</p>
                    <ul className={`space-y-2 ${index % 2 === 0 ? '' : 'lg:items-end flex flex-col'}`}>
                      {exp.highlights.slice(0,3).map((hl, i) => (
                        <li key={i} className="text-slate-400 text-sm flex gap-2 items-start text-left">
                          <span className="text-blue-500 mt-1.5 min-w-[4px] h-[4px] bg-blue-500 rounded-full"></span>
                          {hl}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Date Desktop */}
                <div className={`hidden lg:flex lg:w-1/2 items-start pt-1 ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                  <span className="text-lg font-bold text-slate-500">{exp.period}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

const ProjectCard = ({ project }: { project: Project }) => {
  const isNDA = project.type === "NDA";
  const hasScreenshots = (project.type === 'Public' || project.type === 'Internal') && project.screenshots && project.screenshots.length > 0;
  const isInternal = project.type === "Internal";

  const ProjectVisual = () => {
    if (hasScreenshots) {
      return <ProjectCarousel screenshots={project.screenshots || []} title={project.title} />;
    } else if (isNDA) {
      return (
        <div className="h-48 w-full p-8 flex flex-col justify-center items-center text-center relative overflow-hidden bg-slate-950">
          <div className="absolute inset-0 opacity-10">
            {/* Background Pattern */}
            <svg className="w-full h-full" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs><pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="1"/>
              </pattern></defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>
          <div className="z-10 flex flex-col items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center border border-red-500/20">
              <Lock className="text-red-400" size={20} />
            </div>
            <span className="text-xs font-bold tracking-widest text-red-400 uppercase border border-red-500/30 px-3 py-1 rounded-full bg-red-500/5">
              {isNDA ? 'Confidential / NDA' : 'Internal Project'}
            </span>
          </div>
        </div>
      );
    } else {
      return (
        <div className="h-48 w-full p-8 flex flex-col justify-center items-center text-center relative overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800">
          <Layout className="text-blue-400 w-12 h-12 mb-3 mx-auto opacity-80" strokeWidth={1.5} />
          <div className="text-slate-500 text-xs font-mono uppercase tracking-widest">{project.title} (No Visuals)</div>
        </div>
      );
    }
  };


  return (
    <motion.div 
      className="group relative bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300"
      variants={itemVariant}
    >
      
      {/* Visual Component Render */}
      <ProjectVisual />
      
      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>
        
        <p className="text-slate-400 text-sm leading-relaxed mb-6 h-20 overflow-hidden text-ellipsis">
          {project.desc}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((t) => (
            <span key={t} className="px-3 py-1 bg-slate-800 text-slate-300 text-xs rounded-full border border-slate-700/50">
              {t}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center pt-4 border-t border-slate-800">
          <span className={`text-xs font-medium ${isNDA || isInternal ? 'text-slate-500' : 'text-green-400 flex items-center gap-1'}`}>
            {isNDA ? 'Confidential' : isInternal ? 'Internal Use Only' : 'Live Production'}
          </span>
          
          {!(isNDA || isInternal) && project.link && (
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-white hover:text-blue-400 transition-colors">
              View Project <ExternalLink size={14} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <motion.section 
      id="projects" 
      className="py-24 bg-slate-950"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariant}
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <div className="text-blue-500 font-bold tracking-wider uppercase text-sm mb-2">Portfolio</div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white">Selected Works</h2>
          </div>
          <p className="text-slate-400 max-w-md text-sm md:text-right">
            A mix of open-source work, freelance projects, and high-scale enterprise systems developed under NDA.
          </p>
        </div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-12">
      <div className="container mx-auto px-6 text-center">
        <div className="flex justify-center items-center gap-2 mb-6">
            <Code2 className="text-slate-600" size={32} />
        </div>
        <p className="text-slate-400 mb-8 max-w-lg mx-auto">
          Open for opportunities. If you have a project that needs robust backend architecture or a polished frontend experience, let's talk.
        </p>
        <div className="flex justify-center gap-8 mb-8">
          <a href={personalInfo.contact.linkedin} className="text-slate-500 hover:text-white transition-colors">LinkedIn</a>
          <a href={personalInfo.contact.gitHub} className="text-slate-500 hover:text-white transition-colors">GitHub</a>
          <a href={`mailto:${personalInfo.contact.email}`} className="text-slate-500 hover:text-white transition-colors">Email</a>
        </div>
        <div className="text-slate-600 text-sm">
          © {new Date().getFullYear()} Adrian Fajar Ramdani. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

const App = () => {
  return (
    <div className="bg-slate-950 min-h-screen text-slate-200 selection:bg-blue-500/30">
      <Navbar />
      <Hero />
      <AboutAndSkills />
      <Experience />
      <Projects />
      <Footer />
    </div>
  );
};

export default App;