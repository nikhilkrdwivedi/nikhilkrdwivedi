import { useState, useEffect } from "react";
import { 
  Github, 
  Linkedin, 
  Globe, 
  Award, 
  Code, 
  Database, 
  Server, 
  Layout, 
  Wrench, 
  Cloud, 
  BookOpen, 
  Mail, 
  Phone, 
  ChevronRight, 
  ChevronUp,
  Menu,
  X,
  ExternalLink,
  FileUser
} from "lucide-react";
import ContactForm from "./ContactForm";

export default function Resume() {
  const [activeSection, setActiveSection] = useState("hero");
  const [navOpen, setNavOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Handle scroll events for navigation highlighting and scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollPosition = window.scrollY + 300;

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(section.id);
        }
      });

      // Show/hide scroll to top button
      if (window.scrollY > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to section
  const scrollToSection = (sectionId) => {
    setNavOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 70,
        behavior: "smooth"
      });
    }
  };

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  // Handle contact form submission
  const handleSubmit = () => {
    alert(`Thank you for your message, ${name}! I'll get back to you soon.`);
    setName("");
    setEmail("");
    setMessage("");
  };

  // Personal data
  const personalInfo = {
    name: "Nikhil Kumar",
    title: "Senior Full Stack Developer",
    email: "nikhil.dwivedi@outlook.com",
    location: "Bengaluru, Karnataka, India",
    objective: "A curious learner and creative team player, interested in the role of Software Developer, where I can utilize my understanding of coding and software development to efficiently fulfill the requirements of organization."
  };

  // Work experience data
  const experiences = [
    {
      company: "Undocked Technologies India Pvt Ltd",
      role: "Full Stack Developer",
      period: "Feb 2022 - Present",
      responsibilities: [
        "Working on supply chain domain",
        "Designed and developed high-quality reusable components using ReactJS and Tailwind",
        "Developing APIs based on product requirements using NodeJS, GraphQL and REST",
        "Participating in sprint planning and grooming of stories",
        "Implemented localization service in UI using i18Next",
        "Implemented bulk user creation using S3, SQS and Email service",
        "Given sessions on technology like React, NodeJs, and other stacks"
      ]
    },
    {
      company: "Salesbook",
      role: "Backend Developer",
      period: "May 2021 - Jan 2022",
      responsibilities: [
        "Worked on core system designing and microservices",
        "Handled communication, admin invitation, and core product services",
        "Developed APIs based on product requirements using NodeJS, GraphQL, and REST",
        "Designed and developed high-quality reusable components using AngularJS and Bootstrap"
      ]
    },
    {
      company: "MoveInSync Technology Solutions",
      role: "Software Engineer",
      period: "Jan 2020 - May 2021",
      responsibilities: [
        "Worked on multiple microservices",
        "Developed responsive UI components, REST APIs, and integration of third-party services",
        "Handled contract, data refresh, new billing dashboard, and trip domain services",
        "Design and develop with own suggestions after gathering requirements from LEAD and PM",
        "Worked on Google app script for report generation and real-time tracking dashboard",
        "Optimise code quality and performance of web app"
      ]
    }
  ];

  // Skills data
  const skills = {
    "Programming Languages": ["C", "C++", "JavaScript", "TypeScript", "Python", "Basic Solidity"],
    "Database": ["MongoDB", "Redis", "MySQL", "Postgres"],
    "Libraries and Software": ["RayGun", "Slack Integration", "Bootstrap", "Tailwind CSS", "Material CSS", "App Script"],
    "Web Development": ["HTML", "CSS", "Basic Docker", "Figma"],
    "Frameworks": ["NodeJS", "React", "Basic React-Native", "Angular", "GraphQL", "Express", "Koa"],
    "Cloud Platform": ["AWS", "Firebase", "Digital Ocean"]
  };

  // Achievements data
  const achievements = [
    "Highflyer Award Q3 2023 in Undocked Technologies India Pvt Ltd",
    "AWS Certified Cloud Practitioner (30th Jan 2023)",
    "Torch Bearer Uplift Awards Q4 2022 in Undocked Technologies India Pvt Ltd",
    "JavaScript, Angular, Java and C++ certification by HackerRank",
    "Fire in the belly in technology in Q2 and Q3 2020 in MoveinSync",
    "Hindi story \"मज़बूरी किसकी?\" published on प्रभात प्रकाशन एवं साहित्य अमृत"
  ];

  // Education data
  const education = [
    {
      degree: "B. Tech (CSE)",
      institution: "Lovely Professional University, Phagwara",
      year: "2020",
      score: "9.04/10"
    },
    {
      degree: "XII (CBSE)",
      institution: "Jawahar Navodaya Vidyalaya, Fatehpur",
      year: "2016",
      score: "71.40%"
    },
    {
      degree: "X (CBSE)",
      institution: "Jawahar Navodaya Vidyalaya, Fatehpur",
      year: "2014",
      score: "9.2/10"
    }
  ];

  // Social links
  const socialLinks = [
    {
      name: "Resume",
      url: "https://drive.google.com/file/d/1dSQKz2IG2bmilpvAuH2_4iko66VUI3dS/view",
      icon: <FileUser size={20} />
    },
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/nikhilkrdwivedi",
        icon: <Linkedin size={20} />
      },
    {
      name: "GitHub",
      url: "https://github.com/nikhilkrdwivedi",
      icon: <Github size={20} />
    },
    {
      name: "Website",
      url: "https://whoisnikhil.com",
      icon: <Globe size={20} />
    },
    {
      name: "HackerRank",
      url: "https://www.hackerrank.com/nikhilkrdwivedi",
      icon: <Code size={20} />
    },
    {
      name: "HackerEarth",
      url: "https://www.hackerearth.com/@NikhilKr",
      icon: <Code size={20} />
    }
  ];

  // Navigation items
  const navItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "skills", label: "Skills" },
    { id: "education", label: "Education" },
    { id: "achievements", label: "Achievements" },
    { id: "contact", label: "Contact" }
  ];

  // Skill icon mapping
  const getSkillIcon = (category) => {
    switch(category) {
      case "Programming Languages": return <Code size={24} />;
      case "Database": return <Database size={24} />;
      case "Libraries and Software": return <Wrench size={24} />;
      case "Web Development": return <Layout size={24} />;
      case "Frameworks": return <Server size={24} />;
      case "Cloud Platform": return <Cloud size={24} />;
      default: return <Code size={24} />;
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen font-sans text-gray-800">
      {/* Header/Navigation */}
      <header className="fixed top-0 left-0 right-0 bg-white shadow z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="text-xl font-bold text-indigo-600">NK</div>
            
            {/* Mobile menu button */}
            <button 
              className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
              onClick={() => setNavOpen(!navOpen)}
            >
              {navOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            
            {/* Desktop navigation */}
            <nav className="hidden md:flex space-x-6">
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-2 py-1 text-sm font-medium transition-colors duration-200 ${
                    activeSection === item.id 
                      ? "text-indigo-600 border-b-2 border-indigo-600" 
                      : "text-gray-600 hover:text-indigo-500"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        </div>
        
        {/* Mobile Navigation Menu */}
        {navOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="container mx-auto px-4 py-2">
              <div className="flex flex-col space-y-2">
                {navItems.map(item => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`px-4 py-2 text-left rounded ${
                      activeSection === item.id 
                        ? "bg-indigo-50 text-indigo-600" 
                        : "text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </header>

      <main className="pt-20">
        {/* Hero Section */}
        <section id="hero" className="min-h-screen flex items-center bg-gradient-to-br from-indigo-50 via-white to-purple-50">
          <div className="container mx-auto px-4 py-16">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2 mb-10 md:mb-0 animate-fadeIn">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
                  Hi, I'm <span className="text-indigo-600">Nikhil Kumar</span>
                </h1>
                <h2 className="text-2xl md:text-3xl font-medium text-gray-600 mb-6">
                  Senior Full Stack Developer
                </h2>
                <p className="text-gray-600 text-lg mb-8 max-w-lg">
                  {personalInfo.objective}
                </p>
                <div className="flex flex-wrap gap-4">
                  <button 
                    onClick={() => scrollToSection("contact")}
                    className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium flex items-center transition-all duration-300 transform hover:-translate-y-1"
                  >
                    Contact Me
                    <ChevronRight size={18} className="ml-2" />
                  </button>
                  <button 
                    onClick={() => scrollToSection("experience")}
                    className="bg-white hover:bg-gray-100 text-indigo-600 border border-indigo-600 px-6 py-3 rounded-lg font-medium flex items-center transition-all duration-300 transform hover:-translate-y-1"
                  >
                    View Experience
                    <ChevronRight size={18} className="ml-2" />
                  </button>
                </div>
                <div className="mt-10 flex space-x-4">
                  {socialLinks.map((link, index) => (
                    <a 
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-md hover:shadow-lg hover:bg-indigo-50 text-indigo-600 transition-all duration-300"
                      aria-label={link.name}
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>
              <div className="md:w-1/2 flex justify-center animate-float">
                <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-indigo-600 rounded-full overflow-hidden shadow-xl">
                  <div className="absolute inset-1 bg-white rounded-full flex items-center justify-center">
                    <img src="/assets/nikhilkrdwivedi.webp" alt="Nikhil Kumar" className="object-contain h-full w-full rounded-full scale-x-[-1]"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-gray-600 mb-6">
                I'm a dedicated Full Stack Developer with extensive experience in building modern web applications and
                microservices. My expertise spans across front-end and back-end technologies, with a strong focus on
                React, Node.js, and cloud services.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Currently working at Undocked in the supply chain domain, I design and develop high-quality, reusable 
                components using ReactJS and Tailwind CSS, while also creating robust APIs using NodeJS, GraphQL, and REST.
              </p>
              <p className="text-lg text-gray-600">
                I'm passionate about clean code, system design, and sharing knowledge with my peers through technical sessions.
                My goal is to leverage my skills to create efficient, scalable applications that solve real-world problems.
              </p>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Work Experience</h2>
            <div className="max-w-4xl mx-auto">
              {experiences.map((exp, index) => (
                <div 
                  key={index}
                  className="mb-12 bg-white rounded-lg shadow-md p-6 md:p-8 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                    <div>
                      <h3 className="text-xl font-bold text-indigo-600">{exp.role}</h3>
                      <p className="text-lg font-medium text-gray-700">{exp.company}</p>
                    </div>
                    <div className="mt-2 md:mt-0">
                      <span className="inline-block bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium">
                        {exp.period}
                      </span>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <ChevronRight size={18} className="text-indigo-500 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {Object.entries(skills).map(([category, skillsList], index) => (
                <div 
                  key={index} 
                  className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-lg bg-indigo-100 flex items-center justify-center text-indigo-600 mr-4">
                      {getSkillIcon(category)}
                    </div>
                    <h3 className="text-lg font-bold">{category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {skillsList.map((skill, i) => (
                      <span 
                        key={i} 
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>  
              ))}
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Education</h2>
            <div className="max-w-3xl mx-auto">
              <div className="relative pl-8 border-l-2 border-indigo-200">
                {education.map((edu, index) => (
                  <div 
                    key={index} 
                    className="mb-10 relative animate-fadeIn" 
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <div className="absolute -left-5 w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 border-4 border-white">
                      <BookOpen size={16} />
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6 ml-4">
                      <h3 className="text-xl font-bold text-indigo-600">{edu.degree}</h3>
                      <p className="text-gray-700 font-medium">{edu.institution}</p>
                      <div className="flex justify-between items-center mt-2">
                        <span className="text-gray-500">{edu.year}</span>
                        <span className="inline-block bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium">
                          {edu.score}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section id="achievements" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Achievements & Certifications</h2>
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div 
                  key={index} 
                  className="flex bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-6 hover:shadow-md transition-all duration-300 transform hover:scale-105"
                >
                  <div className="mr-4 flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
                      <Award size={24} />
                    </div>
                  </div>
                  <div>
                    <p className="text-gray-700">{achievement}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 bg-indigo-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Get In Touch</h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white rounded-lg shadow-md p-8">
                  <h3 className="text-xl font-bold mb-6 text-indigo-600">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 mr-4">
                        <Mail size={20} />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Email</p>
                        <a href={`mailto:${personalInfo.email}`} className="text-gray-700 hover:text-indigo-600">
                          {personalInfo.email}
                        </a>
                      </div>
                    </div>
                    
                    {/* <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 mr-4">
                        <Phone size={20} />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Phone</p>
                        <a href={`tel:${personalInfo.phone}`} className="text-gray-700 hover:text-indigo-600">
                          {personalInfo.phone}
                        </a>
                      </div>
                    </div> */}
                    
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 mr-4">
                        <Globe size={20} />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Location</p>
                        <p className="text-gray-700">{personalInfo.location}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <h4 className="font-medium text-gray-700 mb-4">Connect with me</h4>
                    <div className="flex space-x-4">
                      {socialLinks.map((link, index) => (
                        <a 
                          key={index}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-indigo-100 text-gray-600 hover:text-indigo-600 transition-colors duration-300"
                          aria-label={link.name}
                        >
                          {link.icon}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                {/* FORM */}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold">Nikhil Kumar</h3>
              <p className="text-gray-300">Senior Full Stack Developer</p>
            </div>
            
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          
          <div className="mt-8 pt-6 border-t border-gray-700 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Nikhil Kumar. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Scroll to top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed right-6 bottom-6 w-12 h-12 bg-indigo-600 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-indigo-700 transition-colors duration-300 animate-fadeIn"
          aria-label="Scroll to top"
        >
          <ChevronUp size={24} />
        </button>
      )}

      {/* CSS animations */}
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
}