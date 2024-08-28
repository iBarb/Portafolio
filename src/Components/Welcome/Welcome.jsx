import React from 'react'
import Section from '../Section/Section'
import './Welcome.css'
import Avatar from '/avatar.webp'
import { useApp } from '../../Context/AppContext'

const Welcome = ({ setCurrentSection }) => {
    const { CONTENT } = useApp()

    return (
        <Section className='welcome' id={CONTENT.WELCOME.id} setCurrentSection={setCurrentSection}>
            <div className='in-welcome'>
                <div className='avatar'><img src={Avatar} fetchPriority='high' height={250} width={250} alt="Bruno Barbaran" /></div>
                <div className='profile'>
                    <div>
                        <h1 className='d-none'>Bruno Paolo Barbaran Quiroz</h1>
                        <h2 className='h1'>{CONTENT.WELCOME.heading}</h2>
                        <p dangerouslySetInnerHTML={{ __html: CONTENT.WELCOME.description }} />
                    </div>
                </div>
            </div>
            <div className='Networks'>
                {CONTENT.WELCOME.NETWORKS.map((network, index) => (
                    <a
                        key={index}
                        href={network.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        role="link"
                        className="link"
                    >
                        {network.icon}
                        {network.label}
                    </a>
                ))}
            </div>
        </Section>
    )
}

export default Welcome