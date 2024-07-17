import React from 'react'
import Section from '../Section/Section'
import './Works.css'
import Work from '../../Icons/Work'

const Works = ({ setCurrentSection }) => {

    const EXPERIENCE = [{
        id:1,
        title: "Desarrollador Web",
        subtitle: "Eco2biz",
        description: "Responsable de la implementación de un modulo con Google Maps para reducir el tiempo de ubicación de estaciones de monitoreo, la creación de un asistente virtual con IA para acelerar la eficiencia de búsqueda de documentos a travez de preguntas con leguaje natural y Diseño de un mapa meteorológico para visualización de resultados de monitoreo y análisis de datos.",
        date: "Oct. 2022 - Dic. 2023",
    }]

    return (

        <Section className='Works' id='experiencia' setCurrentSection={setCurrentSection}>
            <h2>
                <Work width={32} height={32} />
                Experiencia laboral
            </h2 >

            <ol className="timeline">
                {EXPERIENCE.map((w) => {
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