import React from 'react'
import Section from '../Section/Section'
import './Works.css'
import Work from '../../Icons/Work'
import { useApp } from '../../Context/AppContext'

const Works = ({ setCurrentSection }) => {
    const { CONTENT } = useApp()

    return (

        <Section className='Works' id={CONTENT.EXPERIENCE.id} setCurrentSection={setCurrentSection}>
            <h2>
                <Work width={32} height={32} />
                {CONTENT.EXPERIENCE.heading}
            </h2 >

            <ol className="timeline">
                {CONTENT.EXPERIENCE.TIMELINE.map((w) => {
                    return (
                        <li key={w.id}>
                            <div className="timeline-item">
                                <div className="timeline-content">
                                    <div className='in-timeline-content'>
                                        <span className="bullet">•</span>
                                        <h3 className="title">{w.title}</h3>
                                        <h4 className="subtitle">{w.subtitle}</h4>
                                        <time className="date">{w.date}</time>
                                    </div>
                                </div>
                                <div className="description">
                                    {w.description}
                                </div>
                            </div>
                        </li>
                    )
                })}
            </ol>

        </Section>

    )
}

export default Works