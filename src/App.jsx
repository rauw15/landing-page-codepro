// Archivo: App.jsx
import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'projects', 'team', 'contact'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app">
      <header className="header">
        <div className="container header-container">
          <div className="logo">
            <h1>Code<span>Pro</span></h1>
          </div>
          
          <div className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
          
          <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
            <ul>
              <li><a href="#home" className={activeSection === 'home' ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>Inicio</a></li>
              <li><a href="#services" className={activeSection === 'services' ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>Servicios</a></li>
              <li><a href="#projects" className={activeSection === 'projects' ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>Proyectos</a></li>
              <li><a href="#team" className={activeSection === 'team' ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>Equipo</a></li>
              <li><a href="#contact" className={activeSection === 'contact' ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>Contacto</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <section id="home" className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Transformamos Ideas en Software Extraordinario</h1>
            <p>En CodeCraft, combinamos tecnología de vanguardia con experiencia técnica para crear soluciones que impulsan negocios hacia el futuro</p>
            <div className="hero-buttons">
              <a href="#contact" className="btn btn-primary">Contáctanos</a>
              <a href="#services" className="btn btn-secondary">Nuestros Servicios</a>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="services">
        <div className="container">
          <div className="section-header">
            <h2>Nuestros Servicios</h2>
            <p>Soluciones tecnológicas personalizadas para tus necesidades</p>
          </div>
          
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-code"></i>
              </div>
              <h3>Desarrollo Web</h3>
              <p>Creamos sitios web y aplicaciones web responsivas, rápidas y seguras utilizando tecnologías modernas como React, Angular y Vue.</p>
            </div>
            
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-mobile-alt"></i>
              </div>
              <h3>Desarrollo Móvil</h3>
              <p>Desarrollamos aplicaciones nativas y multiplataforma para iOS y Android que ofrecen experiencias de usuario excepcionales.</p>
            </div>
            
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-cogs"></i>
              </div>
              <h3>Consultoría Técnica</h3>
              <p>Asesoramos a empresas en la implementación de soluciones tecnológicas y mejores prácticas para optimizar procesos.</p>
            </div>
            
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-cloud"></i>
              </div>
              <h3>Soluciones Cloud</h3>
              <p>Diseñamos e implementamos arquitecturas cloud escalables y seguras utilizando AWS, Azure y Google Cloud.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="projects">
        <div className="container">
          <div className="section-header">
            <h2>Proyectos Destacados</h2>
            <p>Conoce algunos de nuestros trabajos más recientes</p>
          </div>
          
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-image">
                <img src="/api/placeholder/600/400" alt="Proyecto 1" />
              </div>
              <div className="project-info">
                <h3>FinTech Revolution</h3>
                <p>Plataforma financiera para gestión de inversiones con análisis predictivo</p>
                <span className="tag">React</span>
                <span className="tag">Node.js</span>
                <span className="tag">AI</span>
              </div>
            </div>
            
            <div className="project-card">
              <div className="project-image">
                <img src="/api/placeholder/600/400" alt="Proyecto 2" />
              </div>
              <div className="project-info">
                <h3>HealthMonitor</h3>
                <p>App móvil para seguimiento y análisis de parámetros de salud en tiempo real</p>
                <span className="tag">Flutter</span>
                <span className="tag">Firebase</span>
                <span className="tag">ML</span>
              </div>
            </div>
            
            <div className="project-card">
              <div className="project-image">
                <img src="/api/placeholder/600/400" alt="Proyecto 3" />
              </div>
              <div className="project-info">
                <h3>SmartLogistics</h3>
                <p>Sistema de gestión logística para optimización de rutas y recursos</p>
                <span className="tag">Vue.js</span>
                <span className="tag">Python</span>
                <span className="tag">AWS</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="team" className="team">
        <div className="container">
          <div className="section-header">
            <h2>Nuestro Equipo</h2>
            <p>Profesionales apasionados por la tecnología y la innovación</p>
          </div>
          
          <div className="team-grid">
            <div className="team-member">
              <div className="member-photo">
                <img src="/api/placeholder/300/300" alt="Miembro 1" />
              </div>
              <h3>Jose Alonso Macias Montoya</h3>
              <p className="position">CEO & Fundadora</p>
              <p className="bio">Ingeniera informática con más de 15 años de experiencia en el sector tecnológico.</p>
            </div>
            
            <div className="team-member">
              <div className="member-photo">
                <img src="/api/placeholder/300/300" alt="Miembro 2" />
              </div>
              <h3>Daniel Peregrino Perez</h3>
              <p className="position">CTO</p>
              <p className="bio">Especialista en arquitectura de software y sistemas distribuidos.</p>
            </div>
            
            <div className="team-member">
              <div className="member-photo">
                <img src="/api/placeholder/300/300" alt="Miembro 3" />
              </div>
              <h3>Raúl Mimiaga Vasquez</h3>
              <p className="position">Líder de Desarrollo</p>
              <p className="bio">Experta en frontend y experiencia de usuario con enfoque en accesibilidad.</p>
            </div>
            
            <div className="team-member">
              <div className="member-photo">
                <img src="/api/placeholder/300/300" alt="Miembro 4" />
              </div>
              <h3>Edier Martinez Cruz</h3>
              <p className="position">Arquitecto de Software</p>
              <p className="bio">Especializado en soluciones cloud y sistemas de alta disponibilidad.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="container">
          <div className="section-header">
            <h2>Contacto</h2>
            <p>¿Tienes un proyecto en mente? Hablemos</p>
          </div>
          
          <div className="contact-content">
            <div className="contact-info">
              <div className="contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <p>Av. Tecnológica 123, Ciudad Innovation</p>
              </div>
              
              <div className="contact-item">
                <i className="fas fa-phone"></i>
                <p>+1 (555) 123-4567</p>
              </div>
              
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <p>info@codecraft.com</p>
              </div>
            </div>
            
            <form className="contact-form">
              <div className="form-group">
                <input type="text" placeholder="Nombre" required />
              </div>
              
              <div className="form-group">
                <input type="email" placeholder="Email" required />
              </div>
              
              <div className="form-group">
                <input type="text" placeholder="Asunto" />
              </div>
              
              <div className="form-group">
                <textarea placeholder="Mensaje" rows="5" required></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary">Enviar Mensaje</button>
            </form>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              <h2>Code<span>Craft</span></h2>
              <p>Transformando ideas en soluciones tecnológicas</p>
            </div>
            
            <div className="footer-links">
              <h3>Enlaces Rápidos</h3>
              <ul>
                <li><a href="#home">Inicio</a></li>
                <li><a href="#services">Servicios</a></li>
                <li><a href="#projects">Proyectos</a></li>
                <li><a href="#team">Equipo</a></li>
                <li><a href="#contact">Contacto</a></li>
              </ul>
            </div>
            
            <div className="footer-social">
              <h3>Síguenos</h3>
              <div className="social-icons">
                <a href="#" className="social-icon"><i className="fab fa-linkedin"></i></a>
                <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
                <a href="#" className="social-icon"><i className="fab fa-facebook"></i></a>
                <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; 2025 CodeCraft. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;