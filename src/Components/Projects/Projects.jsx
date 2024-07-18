import React from 'react'
import Section from '../Section/Section'
import Proyect from '../../Icons/Proyect'
import './Projects.css'
import Github from '../../Icons/Github'
import Preview from '../../Icons/Preview'
import Python from '../../Icons/Python'
import HuggingFace from '../../Icons/HuggingFace'
import JavaScript from '../../Icons/JavaScript'
import MicrosoftSQLServer from '../../Icons/SQLServer'

const Projects = ({ setCurrentSection }) => {

    const TAGS = {
        PYTHON: {
            id: 1,
            name: "Python",
            className: "bg-blue text-white",
            icon: <Python width={16} height={16} />
        },
        HUGGING_FACE: {
            id: 2,
            name: "Hugging Face",
            className: "bg-blue text-white",
            icon: <HuggingFace width={10} height={10} />
        },
        JAVASCRIPT: {
            id: 3,
            name: "JavaScript",
            className: "bg-blue text-white",
            icon: <JavaScript width={10} height={10} />
        },
        SQLSERVER: {
            id: 4,
            name: "SQL Server",
            className: "bg-blue text-white",
            icon: <MicrosoftSQLServer width={10} height={10} />
        },
    }

    const PROjECTS = [
        {
            id: 1,
            title: "Modelo NLP para Traducción Es-Qu",
            description: "Desarrollo de un modelo de procesamiento de lenguaje natural (NLP) para la traducción entre español y quechua utilizando un modelo preentrenado de Helsinki-NLP/opus-mt-es-en.",
            link: "",
            github: "https://github.com/iBarb/Machine-Translation-Es-Qu",
            image: "/projects/Taduccion-es-qu.webp",
            tags: [TAGS.PYTHON, TAGS.HUGGING_FACE]
        },
        {
            id: 2,
            title: "Georeferencia en la Gestión Ambiental",
            description: "Desarrollo de un sistema integral utilizando Google Maps para la localización de estaciones de monitoreo y puntos de acopio, además de realizar seguimiento meteorológico. Incluye una plataforma de visualización de datos con diagramas Stiff para análisis de calidad del agua, y mapas de calor para gestionar situaciones de excedencia.",
            link: "https://www.linkedin.com/posts/eco2biz_la-importancia-de-la-informaci%C3%B3n-georeferencial-activity-7163396183825047553-S_X7?utm_source=share&utm_medium=member_desktop",
            github: "",
            image: "/projects/Google Maps Module.webp",
            tags: [TAGS.JAVASCRIPT, TAGS.SQLSERVER]
        }
    ]

    return (
        <Section className='Projects' id='proyectos' setCurrentSection={setCurrentSection}>
            <h2>
                <Proyect width={28} height={28} />
                Proyectos
            </h2>
            <div className='container-proyects'>
                {PROjECTS.map((p) => {
                    return (
                        <article key={p.id}>
                            <div className="out-div-img">
                                <div className='out-img'>
                                    <img src={p.image} alt={`Camtura de Pantalla de proyecto ${p.image}`}></img>
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