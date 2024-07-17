import React, { useEffect, useState } from 'react'
import './Navbar.css'

const Navbar = ({ CurrentSection, setCurrentSection }) => {

  const HandleActiveLink = (href) => {
    return CurrentSection === href ? 'active' : ''
  };


  const LINKS = [
    {
      id: 1,
      name: "Inicio",
      href: "#"
    },
    {
      id: 2,
      name: "Experiencia",
      href: "#experiencia"
    },
    {
      id: 3,
      name: "Proyectos",
      href: "#proyectos"
    },
    {
      id: 4,
      name: "Sobre mí",
      href: "#sobre-mi"
    },
    {
      id: 5,
      name: "Contacto",
      href: "mailto:brunobarbaran@hotmail.com"
    }
  ]


  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const maxScroll = 100;
  const opacity = Math.min(scrollY / maxScroll, 1);

  return (
    <header>
      <nav
        className='scroll'
        style={{
          backgroundColor: `rgba(var(--bg-nav), ${0.4 * opacity})`,
          border: `1px solid rgba(255, 255, 255, ${0.3 * opacity})`,
          boxShadow: `
                rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
                rgba(0, 0, 0, 0.3) 0px 3px 7px -3px`,
          backdropFilter: `blur(${4.5 * opacity}px)`,
          WebkitBackdropFilter: `blur(${4.5 * opacity}px)`,
          transition: 'all 0.2s ease-in-out'
        }}
      >
        {LINKS.map((l) => (
          <a
            key={l.id}
            className={`link ${HandleActiveLink(l.href)}`}
            onClick={() => setCurrentSection(l.href)}
            href={l.href}
          >
            {l.name}
          </a>
        ))}
      </nav>
    </header>
  )
}

export default Navbar