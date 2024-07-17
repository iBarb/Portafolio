import React from 'react'
import Section from '../Section/Section'
import './Welcome.css'
import Avatar from '../../Assets/avatar.jpg'
import LinkedIn from '../../Icons/LinkedIn'
import Github from '../../Icons/Github'
import CV from '../../Icons/CV'

const Welcome = ({ setCurrentSection }) => {
    return (
        <Section className='welcome' id='' setCurrentSection={setCurrentSection}>
            <div className='in-welcome'>
                <div className='avatar'><img src={Avatar} alt="Bruno Barbaran" /></div>
                <div className='profile'>
                    <div>
                        <h1>¡Hola, soy Bruno!</h1>
                        <p><strong>Ingeniero de Software</strong> de Perú. Me especializo en <strong>desarrollo Front-end</strong>, pero actualmente me estoy enfocando más en <strong>inteligencia artificial</strong> y aprendiendo nuevas tecnologías para potenciar mi crecimiento profesional.</p>

                    </div>
                </div>
            </div>
            <div className='Networks'>
                <a href="https://www.linkedin.com/in/bruno-paolo-barbaran-quiroz-606478195/" target="_blank" rel="noopener noreferrer" role="link" className="link">
                    <LinkedIn width={18} height={18}/>
                    LinkedIn
                </a>
                <a href="https://github.com/iBarb" target="_blank" rel="noopener noreferrer" role="link" className="link">
                    <Github width={18} height={18}/>
                    Github
                </a>
                <a href="/CV_Bruno_Barbaran.pdf" target="_blank" rel="noopener noreferrer" role="link" className="link">
                    <CV width={18} height={18}/>
                    CV
                </a>
            </div>
        </Section>
    )
}

export default Welcome