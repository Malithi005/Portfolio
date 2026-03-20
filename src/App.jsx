import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink, 
  Code2, 
  Database, 
  Layers, 
  Layout, 
  Terminal, 
  Cpu,
  GraduationCap,
  Briefcase,
  ChevronRight,
  Download,
  Menu,
  X,
  FileText
} from 'lucide-react';
import './App.css';

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const fadeInUp = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className="app-container">
      <div className="radial-bg" />
      
      {/* Navigation */}
      <nav className={`navbar ${isScrolled ? 'scrolled glass' : ''}`}>
        <div className="nav-content">
          <motion.div 
            className="logo heading-font"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            MN<span>.</span>
          </motion.div>

          <div className="nav-links desktop-only">
            {navLinks.map((link, i) => (
              <motion.a 
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                {link.name}
              </motion.a>
            ))}
            <motion.button 
              className="btn-primary"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
            >
              Resume <FileText size={18} />
            </motion.button>
          </div>

          <div className="mobile-only">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="menu-btn">
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className="mobile-menu glass"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
          >
            {navLinks.map(link => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        {/* Hero Section */}
        <section id="hero" className="hero-section">
          <div className="hero-content">
            <motion.div 
              className="hero-badge badge"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              Available for Internships
            </motion.div>
            
            <motion.h1 
              className="hero-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Building digital <br />
              <span className="gradient-text">experiences with precision.</span>
            </motion.h1>
            
            <motion.p 
              className="hero-subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              I'm <strong>Malithi Nadunika</strong>, a Computer Science Undergraduate passionate about Software Engineering and modern web technologies. Focused on building scalable systems and intuitive interfaces.
            </motion.p>
            
            <motion.div 
              className="hero-actions"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <a href="#projects" className="btn-primary">View My Work <ChevronRight size={20} /></a>
              <div className="social-links">
                <a href="https://github.com/Malithi005" target="_blank" rel="noreferrer" className="social-icon"><Github /></a>
                <a href="https://linkedin.com/in/malithi-nadunika-0a940a33" target="_blank" rel="noreferrer" className="social-icon"><Linkedin /></a>
                <a href="mailto:malithinadu@gmail.com" className="social-icon"><Mail /></a>
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="profile-wrapper">
              <div className="profile-image glass">
                <img src="https://ui-avatars.com/api/?name=Malithi+Nadunika&background=6366f1&color=fff&size=512" alt="Malithi Nadunika" />
              </div>
              <div className="stat-card glass p1">
                <Code2 size={24} className="text-secondary" />
                <div>
                  <div className="stat-val">React</div>
                  <div className="stat-label">Frontend Expert</div>
                </div>
              </div>
              <div className="stat-card glass p2">
                <Terminal size={24} className="text-primary" />
                <div>
                  <div className="stat-val">Python/Java</div>
                  <div className="stat-label">Logic Explorer</div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* About Section */}
        <section id="about" className="about-section">
          <motion.div 
            className="section-header"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Career Narrative</h2>
            <div className="section-line" />
          </motion.div>
          
          <div className="about-grid">
            <motion.div 
              className="about-text glass"
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -30 }}
              viewport={{ once: true }}
            >
              <p>
                As a Computer Science student, I have gained practical experience through academic and collaborative projects, 
                developing applications using **Python, React, and web development technologies**.
              </p>
              <p>
                I thrive in team-based development environments where I can contribute to system design, implementation, 
                and project coordination. My ultimate goal is to continuously improve my technical and project 
                management abilities to build scalable, high-impact software systems.
              </p>
              <div className="contact-info-pills">
                <div className="pill"><MapPin size={16} /> Kurunegala, Sri Lanka</div>
                <div className="pill"><Phone size={16} /> 0704040965</div>
                <div className="pill"><Mail size={16} /> malithinadu@gmail.com</div>
              </div>
            </motion.div>

            <motion.div 
              className="cert-highlights"
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 30 }}
              viewport={{ once: true }}
            >
              <h3 className="sub-heading">Certifications</h3>
              <div className="cert-list">
                {[
                  'Python GUI (Tkinter) - LinkedIn Learning',
                  'Python Essential Training - LinkedIn Learning',
                  'Python Data Analysis - LinkedIn Learning',
                  'Certified Entry-Level Python Programmer (PCEP)'
                ].map((cert, i) => (
                  <div key={i} className="cert-item glass">
                    <span className="dot" /> {cert}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="edu-section">
          <motion.div 
            className="section-header"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Academic Journey</h2>
            <div className="section-line" />
          </motion.div>

          <div className="timeline">
            {[
              {
                title: 'University of Westminster',
                sub: 'Bsc (Hons) in Computer Science (IIT, Sri Lanka)',
                desc: 'Key Modules: OOP, Web Design/Dev, Client-Side Dev, Algorithms, Database Systems.',
                year: 'Current'
              },
              {
                title: 'ICBT Campus',
                sub: 'Diploma in Information Technology (OTHM)',
                desc: 'Foundational computer science principles and technical training.',
                year: 'Completed'
              },
              {
                title: 'Maliyadeva Balika Vidyalaya',
                sub: 'GCE Advanced Level (Maths Stream)',
                desc: 'High-school education with a focus on mathematics and analytical skills.',
                year: '2024'
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                className="timeline-item"
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                viewport={{ once: true }}
              >
                <div className="timeline-marker"><GraduationCap size={20} /></div>
                <div className="timeline-card glass">
                  <div className="timeline-year">{item.year}</div>
                  <h3>{item.title}</h3>
                  <h4>{item.sub}</h4>
                  <p>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="skills-section">
          <motion.div 
            className="section-header center"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Technical Arsenal</h2>
            <p className="section-subtitle">A collection of tools and technologies I use to bring ideas to life.</p>
          </motion.div>

          <div className="skills-grid">
            {[
              { title: 'Languages', icon: <Code2 />, items: ['Java', 'JavaScript', 'Python', 'SQL', 'HTML5', 'CSS3'] },
              { title: 'Frameworks', icon: <Layers />, items: ['React.js', 'Node.js', 'TensorFlow'] },
              { title: 'Tools', icon: <Layout />, items: ['GitHub', 'IntelliJ', 'VS Code', 'MySQL', 'Figma'] },
              { title: 'Soft Skills', icon: <Briefcase />, items: ['Project Management', 'Teamwork', 'Critical Thinking', 'Leadership'] }
            ].map((cat, i) => (
              <motion.div 
                key={cat.title}
                className="skill-card glass"
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="skill-icon">{cat.icon}</div>
                <h3>{cat.title}</h3>
                <div className="skill-pills">
                  {cat.items.map(skill => (
                    <span key={skill} className="pill">{skill}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="projects-section">
          <motion.div 
            className="section-header"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Featured Work</h2>
            <div className="section-line" />
          </motion.div>

          <div className="projects-grid">
            {[
              {
                title: 'Harmony',
                role: 'Front-End Developer / Marketing Manager',
                desc: 'An adaptive music generation and Spotify song recommendation system. Focused on UI/UX and engagement.',
                tags: ['React', 'Spotify API', 'UI Design'],
                image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=800'
              },
              {
                title: 'Life On Land',
                role: 'Lead Front-End Developer',
                desc: 'Sustainability awareness website featuring multiple responsive pages with semantic HTML/CSS and interactive elements.',
                tags: ['HTML5', 'CSS3', 'JavaScript'],
                image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&q=80&w=800'
              },
              {
                title: 'Data Analysis Engine',
                role: 'Developer',
                desc: 'Python-based application that processes and analyzes European airport departure datasets with 2D graphical visualizations.',
                tags: ['Python', 'CSV Data', 'Matplotlib'],
                image: 'https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=800'
              },
              {
                title: 'Task Manager (GUI)',
                role: 'Developer',
                desc: 'A robust task management application with JSON-based data storage and an intuitive Tkinter-based user interface.',
                tags: ['Python', 'Tkinter', 'JSON'],
                image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=800'
              }
            ].map((proj, i) => (
              <motion.div 
                key={proj.title}
                className="project-card glass overflow-hidden"
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 30 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="proj-img">
                  <img src={proj.image} alt={proj.title} />
                  <div className="proj-overlay">
                    <a href="#" className="social-icon"><ExternalLink /></a>
                  </div>
                </div>
                <div className="proj-content">
                  <div className="proj-role">{proj.role}</div>
                  <h3>{proj.title}</h3>
                  <p>{proj.desc}</p>
                  <div className="skill-pills">
                    {proj.tags.map(tag => (
                      <span key={tag} className="tag">#{tag}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="contact-section">
          <motion.div 
            className="contact-card glass"
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.95 }}
            viewport={{ once: true }}
          >
            <div className="contact-info">
              <h2 className="heading-font">Let's work together.</h2>
              <p>Looking for an enthusiastic intern to join your project? I'm ready to contribute and learn.</p>
              
              <div className="info-list">
                <a href="mailto:malithinadu@gmail.com" className="info-item">
                  <div className="info-icon"><Mail /></div>
                  <div>
                    <label>Email Me</label>
                    <div className="val">malithinadu@gmail.com</div>
                  </div>
                </a>
                <a href="tel:0704040965" className="info-item">
                  <div className="info-icon"><Phone /></div>
                  <div>
                    <label>Call Me</label>
                    <div className="val">0704040965</div>
                  </div>
                </a>
                <div className="info-item">
                  <div className="info-icon"><MapPin /></div>
                  <div>
                    <label>Location</label>
                    <div className="val">Kurunegala, Sri Lanka</div>
                  </div>
                </div>
              </div>

              <div className="social-grid">
                <a href="https://linkedin.com/in/malithi-nadunika-0a940a33" target="_blank" rel="noreferrer" className="social-btn linkedin">
                  <Linkedin size={20} /> LinkedIn
                </a>
                <a href="https://github.com/Malithi005" target="_blank" rel="noreferrer" className="social-btn github">
                  <Github size={20} /> GitHub
                </a>
              </div>
            </div>
            
            <div className="contact-footer">
              <p>&copy; {new Date().getFullYear()} Malithi Nadunika. Built with React.</p>
            </div>
          </motion.div>
        </section>
      </main>
    </div>
  );
};

export default App;
