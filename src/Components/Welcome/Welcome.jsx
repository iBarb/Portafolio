import React from 'react'
import Section from '../Section/Section'
import './Welcome.css'
import Avatar from '../../Assets/avatar.jpg'
import { NETWORKS } from '../../Utils/Constants'
import { useApp } from '../../Context/AppContext'

const Welcome = ({ setCurrentSection }) => {
    const { CONTENT } = useApp()

    return (
        <Section className='welcome' id={CONTENT.WELCOME.id} setCurrentSection={setCurrentSection}>
            <div className='in-welcome'>
                <div className='avatar'><img src={Avatar} alt="Bruno Barbaran" /></div>
                <div className='profile'>
                    <div>
                        <h1>{CONTENT.WELCOME.heading}</h1>
                        <p dangerouslySetInnerHTML={{ __html: CONTENT.WELCOME.description }} />
                    </div>
                </div>
            </div>
            <div className='Networks'>
                {NETWORKS.map((network, index) => (
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