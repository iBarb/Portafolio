import React from 'react'
import './Section.css';

const Sections = ({ children, id, className }) => {


  return (
    <section className={`section ${className}`} id={id}>
      {children}
    </section>
  )
}

export default Sections