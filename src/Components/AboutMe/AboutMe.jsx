import React from 'react'
import './AboutMe.css'
import Person from '../../Icons/Person'
import Section from '../Section/Section'

const AboutMe = ({ setCurrentSection }) => {

    const calcularEdad = (fechaNacimiento) => {
        const hoy = new Date();
        const nacimiento = new Date(fechaNacimiento);
        let edad = hoy.getFullYear() - nacimiento.getFullYear();
        const mes = hoy.getMonth() - nacimiento.getMonth();
    
        if (mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())) {
            edad--;
        }
    
        return edad;
    };

    
    return (
        <Section className='aboutme' id='sobre-mi' setCurrentSection={setCurrentSection}>
            <h2>
                <Person width={28} height={28} />
                Sobre Mi
            </h2>
            <article>
                <div>
                    <p>Me llamo <strong>Bruno Paolo Barbarán Quiroz</strong>, tengo <strong>{calcularEdad('2001-07-21')} años</strong> y soy de Perú. Egresado de la <strong>Universidad Tecnológica del Perú</strong>. Tengo sólidos conocimientos en <strong>tecnologías frontend y backend</strong>, y un nivel intermedio de inglés. Además, estoy interesado en desarrollarme en áreas como <strong>inteligencia artificial</strong> y <strong>desarrollo web</strong>.</p>
                    <p>Como apasionado de la tecnología, siempre busco aprender nuevas herramientas que puedan ayudarme en mi crecimiento profesional. También tengo certificado de <strong>tutor STEM en Algorítmica</strong> y fui miembro de la <strong>comunidad Microsoft UTP</strong>.</p>
                </div>
            </article>
        </Section>
    )
}

export default AboutMe