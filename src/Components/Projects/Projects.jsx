import React from 'react'
import Section from '../Section/Section'
import Proyect from '../../Icons/Proyect'
import './Projects.css'
import Github from '../../Icons/Github'
import Preview from '../../Icons/Preview'
import { useApp } from '../../Context/AppContext'

const Projects = ({ setCurrentSection }) => {
    const { CONTENT } = useApp()

    return (
        <Section className='Projects' id={CONTENT.PROJECTS.id} setCurrentSection={setCurrentSection}>
            <h2>
                <Proyect width={28} height={28} />
                {CONTENT.PROJECTS.heading}
            </h2>
            <div className='container-proyects'>
                {CONTENT.PROJECTS.PROJECTS.map((p) => {
                    return (
                        <article key={p.id}>
                            <div className="out-div-img">
                                <div className='out-img'>
                                    <img src={p.image} width={428} height={248} alt={`Camtura de Pantalla de proyecto ${p.image}`}></img>
                                </div>
                            </div>
                            <div className='info'>
                                <h3 className='title'>{p.title}</h3>
                                <ul className='tags'>
                                    {p.tags && p.tags.map((tag) => (
                                        <li key={tag.id} className={tag.className}>
                                            {tag.icon} {tag.name}
                                        </li>
                                    ))}
                                </ul>
                                <p className='description'>{p.description}</p>
                                <footer>
                                    {p.link &&
                                        <a href={p.link} className='link' target="_blank" rel="noopener noreferrer" role="link" >
                                            <Preview width={20} height={20} /> Preview
                                        </a>
                                    }
                                    {p.github &&
                                        <a href={p.github} className='link' target="_blank" rel="noopener noreferrer" role="link" >
                                            <Github width={20} height={20} /> Code
                                        </a>
                                    }
                                </footer>
                            </div>
                        </article>
                    )
                })}
            </div>
        </Section >
    )
}

export default Projects