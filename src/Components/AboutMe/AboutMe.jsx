import React from 'react'
import './AboutMe.css'
import Person from '../../Icons/Person'
import Section from '../Section/Section'
import { useApp } from '../../Context/AppContext'

const AboutMe = ({ setCurrentSection }) => {
    const { CONTENT } = useApp()
    
    return (
        <Section className='aboutme' id={CONTENT.ABOUT_ME.id} setCurrentSection={setCurrentSection}>
            <h2>
                <Person width={28} height={28} />
                {CONTENT.ABOUT_ME.heading}
            </h2>
            <article>
                <div>
                    <p dangerouslySetInnerHTML={{ __html: CONTENT.ABOUT_ME.p1 }}></p>
                    <p dangerouslySetInnerHTML={{ __html: CONTENT.ABOUT_ME.p2 }}></p>
                </div>
            </article>
        </Section>
    )
}

export default AboutMe