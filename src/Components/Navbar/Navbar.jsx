import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { useApp } from '../../Context/AppContext';

const Navbar = ({ CurrentSection, setCurrentSection }) => {

  const { CONTENT } = useApp()

  const HandleActiveLink = (href) => {
    return CurrentSection === href ? 'active' : ''
  };


  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
    
    const sections = document.querySelectorAll(".section");
    const windowHeight = window.innerHeight;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;
    const scrolledToBottom = Math.ceil(scrollTop + clientHeight) >= document.documentElement.scrollHeight;
    const activeSections = [];

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top >= 0 && rect.top <= windowHeight) {
        activeSections.push(`#${section.id}`);
      }
    });

    if (activeSections.length) {
      const sectionToSet = scrolledToBottom && activeSections.length > 1 ? activeSections[1] : activeSections[0];
      setCurrentSection(sectionToSet);
    }
  };


  useEffect(() => {
    handleScroll()
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
                rgba(50, 50, 93, ${0.25 * opacity}) 0px 6px 12px -2px,
                rgba(0, 0, 0, ${0.3 * opacity}) 0px 3px 7px -3px`,
          backdropFilter: `blur(${4.5 * opacity}px)`,
          WebkitBackdropFilter: `blur(${4.5 * opacity}px)`,
          transition: 'all 0.2s ease-in-out'
        }}
      >
        {CONTENT.LINKS.map((l) => (
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