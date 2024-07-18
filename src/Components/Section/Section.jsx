import React, { useEffect, useRef } from 'react'
import './Section.css';

const Sections = ({ children, id, setCurrentSection, className}) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      const scrollRef = window.innerHeight;
    
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= scrollRef && rect.bottom <= scrollRef) {
          const sectionId = `#${id}`;
          setCurrentSection(sectionId);  
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <section className={`section ${className}`} id={id} ref={sectionRef}>
      {children}
    </section>
  )
}

export default Sections