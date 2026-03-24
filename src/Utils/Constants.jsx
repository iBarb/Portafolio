import CV from "../Icons/CV"
import FirebaseIcon from "../Icons/FirebaseIcon"
import Github from "../Icons/Github"
import HuggingFace from "../Icons/HuggingFace"
import JavaScript from "../Icons/JavaScript"
import LinkedIn from "../Icons/LinkedIn"
import Python from "../Icons/Python"
import ReactIcon from "../Icons/ReactIcon"
import MicrosoftSQLServer from "../Icons/SQLServer"
import Tailwind from "../Icons/Tailwind"
import Flutter from "../Icons/Flutter"
import Java from "../Icons/Java"
import NodeJS from "../Icons/NodeJS"
import { calcularEdad } from "./Functions"



export const TAGS = {
    PYTHON: {
        id: 1,
        name: "Python",
        className: "bg-blue text-white",
        icon: <Python width={12} height={10} />
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
    REACT: {
        id: 5,
        name: "React",
        className: "bg-blue text-white",
        icon: <ReactIcon width={10} height={10} />
    },
    FIREBASE: {
        id: 6,
        name: "Firebase",
        className: "bg-blue text-white",
        icon: <FirebaseIcon width={10} height={10} />
    },
    TAILWIND: {
        id: 7,
        name: "Tailwind",
        className: "bg-blue text-white",
        icon: <Tailwind width={10} height={10} />
    },
    FLUTTER: {
        id: 8,
        name: "Flutter",
        className: "bg-blue text-white",
        icon: <Flutter width={10} height={10} />
    },
    JAVA: {
        id: 9,
        name: "Java",
        className: "bg-blue text-white",
        icon: <Java width={10} height={10} />
    },
    NODEJS: {
        id: 10,
        name: "Node.js",
        className: "bg-blue text-white",
        icon: <NodeJS width={10} height={10} />
    }
}

export const ES = {
    LINKS: [
        {
            id: 1,
            name: "Inicio",
            href: "#"
        },
        {
            id: 2,
            name: "Experiencia",
            href: "#experiencia"
        },
        {
            id: 3,
            name: "Proyectos",
            href: "#proyectos"
        },
        {
            id: 4,
            name: "Sobre mí",
            href: "#sobre-mi"
        },
        {
            id: 5,
            name: "Contacto",
            href: "mailto:brunobarbaran@hotmail.com"
        }
    ],
    WELCOME: {
        id: '',
        heading: '¡Hola, soy Bruno!',
        description: '<strong>Ingeniero de Software</strong> de Perú con más de 3 años de experiencia desarrollando aplicaciones <strong>móviles (Flutter)</strong> y soluciones web <strong>Full Stack</strong>.',
        NETWORKS: [
            {
                href: 'https://www.linkedin.com/in/brunobarbaran/',
                label: 'LinkedIn',
                icon: <LinkedIn width={18} height={18} />
            },
            {
                href: 'https://github.com/iBarb',
                label: 'Github',
                icon: <Github width={18} height={18} />
            },
            {
                href: '/CV_Bruno_Barbaran.pdf',
                label: 'CV',
                icon: <CV width={18} height={18} />
            }
        ]

    },
    EXPERIENCE: {
        id: 'experiencia',
        heading: 'Experiencia laboral',
        TIMELINE: [
            {
                id: 4,
                title: "Software Architect",
                subtitle: "Altoken.io",
                description: "Plataforma fintech/proptech de tokenización de activos inmobiliarios. Diseñé la arquitectura del sistema e implementé la tokenización de activos RWA sobre Hedera Hashgraph. Desarrollé las REST APIs y el backend en Node.js, construí la wallet digital para inversores, diseñé el flujo de KYC/onboarding y el frontend con React y TypeScript.",
                date: "Oct. 2025 - Actualidad",
            },
            {
                id: 5,
                title: "Analista Programador FullStack",
                subtitle: "CESEL Ingenieros",
                description: "Rediseño de la arquitectura del aplicativo móvil Portal Cesel utilizando Flutter y Clean Architecture. Implementé autenticación biométrica y PIN, desarrollé un módulo completo de rendiciones de gastos y migré el pipeline OCR a una solución local con PaddleOCR. Construí un scraper de SUNAT para consulta de proveedores y diseñé el backend con microservicios en Java (Spring Boot).",
                date: "Nov. 2025 - Actualidad",
            },
            // {
            //     id: 1,
            //     title: "Fullstack Freelance",
            //     subtitle: "BestHomeOffer",
            //     description: "Desarrollé una plataforma inmobiliaria orientada a optimizar la venta de propiedades, combinando rendimiento, seguridad y experiencia de usuario. Usé React, Tailwind, Material UI, React Query, Formik y Yup para un frontend moderno y validaciones efectivas. En el backend, construí una API en Express con medidas de seguridad como CORS y rate limiting. Integré Cloudflare para cacheo, mitigación de ataques y mejora del tiempo de respuesta.",
            //     date: "Jun. 2025 - Jun. 2025",
            // },
            {
                id: 2,
                title: "Coordinador Area Desarrollo",
                subtitle: "CECOM SJL",
                description: "Lideré la implementación de sistemas para el control de asistencia, seguimiento de radios Tetra y validación del personal municipal, mejorando la gestión, seguridad y transparencia. Supervisé el mantenimiento y mejora de aplicaciones municipales.",
                date: "Sep. 2024 - sep. 2025",
            },
            {
                id: 3,
                title: "Desarrollador Web",
                subtitle: "Eco2biz",
                description: "Responsable de la implementación de un modulo con Google Maps para reducir el tiempo de ubicación de estaciones de monitoreo, la creación de un asistente virtual con IA para acelerar la eficiencia de búsqueda de documentos a travez de preguntas con leguaje natural y Diseño de un mapa meteorológico para visualización de resultados de monitoreo y análisis de datos.",
                date: "Oct. 2022 - Dic. 2023",
            }
        ],
    },
    PROJECTS: {
        id: 'proyectos',
        heading: 'Proyectos',
        PROJECTS: [
            {
                id: 7,
                title: "Altoken",
                description: "Plataforma fintech/proptech de tokenización de RWA (Real-World Assets) sobre Hedera Hashgraph. Incluye wallet digital para inversores, flujo avanzado de KYC/onboarding, backend en Node.js y un panel frontend desarrollado con React y TypeScript.",
                link: "https://www.altoken.io/es",
                image: "/projects/altoken.webp",
                tags: [TAGS.REACT, TAGS.NODEJS, TAGS.JAVASCRIPT, TAGS.TAILWIND]
            },
            {
                id: 8,
                title: "Portal Cesel",
                description: "Aplicativo corporativo móvil con Clean Architecture en Flutter para gestión de gastos. Incluye motor de aprobación, OCR in-house con PaddleOCR para comprobantes de pago, un scraper de SUNAT y backend basado en microservicios Java (Spring Boot).",
                link: "",
                image: "/projects/portal-cesel.webp",
                tags: [TAGS.FLUTTER, TAGS.JAVA, TAGS.PYTHON]
            },
            // {
            //     id: 1,
            //     title: "Best Home Offer",
            //     description: "Plataforma inmobiliaria que simplifica el proceso de venta de propiedades. Permite a los propietarios recibir una oferta rápida, segura y sin trámites innecesarios. No se requieren reparaciones ni intermediarios. las propiedades se adquieren en su estado actual, sin comisiones ni costos ocultos. Una solución práctica y eficiente para quienes buscan evitar las complicaciones del modelo tradicional.",
            //     link: "https://besthomeoffer.ai/",
            //     image: "/projects/besthomeoffer.webp",
            //     tags: [TAGS.JAVASCRIPT, TAGS.REACT, TAGS.TAILWIND]
            // },
            {
                id: 2,
                title: "identidad SJL",
                description: "Plataforma web que permite a los vecinos de San Juan de Lurigancho verificar rápidamente si una persona que llega a su domicilio en nombre de la municipalidad es un trabajador autorizado. Utiliza la inteligencia artificial de Axxon con reconocimiento facial para buscar en la base de datos de Gestiona-te. Además, ofrece la opción de reportar irregularidades, fortaleciendo la seguridad y confianza en la comunidad.",
                link: "https://identidad.munisjl.gob.pe/",
                image: "/projects/identidad-SJL.webp",
                tags: [TAGS.JAVASCRIPT, TAGS.REACT, TAGS.TAILWIND]
            },
            {
                id: 3,
                title: "Gestiona-Te",
                description: "Sistema integral que optimiza la administración del personal municipal, con módulos de control de asistencia, gestión de empleados y reclutamiento. Incorpora tecnologías avanzadas como el reconocimiento facial y pruebas psicológicas para evaluar el perfil de los postulantes, asegurando precisión y eficiencia en la gestión de recursos humanos.",
                link: "https://www.linkedin.com/posts/gunminiho_me-alegra-compartir-que-he-trabajado-en-este-ugcPost-7312256404470333440-FmiT?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC3PMGYBrobu-cPnPFB9o3EHEYCSQ0pmc7k",
                image: "/projects/gestiona-te.webp",
                tags: [TAGS.JAVASCRIPT, TAGS.REACT, TAGS.TAILWIND]
            },
            {
                id: 4,
                title: "Modelo NLP para Traducción Es-Qu",
                description: "Se realizó una investigación para desarrollar y optimizar las traducciones entre español - quechua utilizando un modelo de procesamiento de lenguaje natural (NLP) preentrenado de Helsinki-NLP/opus-mt-es-en. Se utilizó Optuna para la optimización de hiperparámetros, con un enfoque en refinar los parámetros del modelo para mejorar la precisión de la traducción.",
                link: "https://translator-es-qu.web.app/",
                github: "https://github.com/iBarb/Machine-Translation-Es-Qu",
                image: "/projects/Taduccion-es-qu.webp",
                tags: [TAGS.PYTHON, TAGS.HUGGING_FACE, TAGS.REACT, TAGS.TAILWIND]
            },
            {
                id: 5,
                title: "Georeferencia en la Gestión Ambiental",
                description: "Desarrollé un sistema integral con Google Maps para localizar estaciones de monitoreo y puntos de acopio, además de realizar seguimiento meteorológico. Incluye una plataforma de visualización de datos con diagramas Stiff para análisis de calidad del agua y mapas de calor para gestionar situaciones de excedencia.",
                link: "https://www.linkedin.com/posts/eco2biz_la-importancia-de-la-informaci%C3%B3n-georeferencial-activity-7163396183825047553-S_X7?utm_source=share&utm_medium=member_desktop",
                github: "",
                image: "/projects/Google Maps Module.webp",
                tags: [TAGS.JAVASCRIPT, TAGS.SQLSERVER, TAGS.PYTHON,]
            },
            {
                id: 6,
                title: "Sistema de Asesorias UTP - EducaUTP",
                description: "Diseño de una aplicación web para gestionar asesorias en la UTP, utilizando React Context para la autenticación segura y manejo avanzado de estados, Firebase para almacenamiento en tiempo real, y diseñé una interfaz intuitiva y responsive.Además, manejo de variables de entorno para keys",
                link: "https://educautp.web.app/",
                github: "https://github.com/iBarb/EducaUTP-Web",
                image: "/projects/educaUTP.webp",
                tags: [TAGS.REACT, TAGS.FIREBASE]
            }
        ],
    },
    ABOUT_ME: {
        id: 'sobre-mi',
        heading: 'Sobre mi',
        p1: `Me llamo <strong>Bruno Paolo Barbaran Quiroz</strong>, tengo <strong>${calcularEdad('2001-07-21')} años</strong> y soy de Perú. Titulado en Ingeniería de Software por la <strong>Universidad Tecnológica del Perú</strong>. Cuento con más de 3 años de experiencia construyendo aplicaciones móviles con <strong>Flutter</strong> y soluciones web <strong>Full Stack</strong>, además de poseer un nivel intermedio de inglés técnico.`,
        p2: `Me especializo en arquitecturas limpias, integraciones de sistemas complejos y automatización de procesos utilizando <strong>IA y OCR local</strong>. Siempre busco aprender nuevas herramientas tecnológicas para potenciar mi crecimiento profesional y el impacto de los proyectos en los que participo.`
    },
}

export const EN = {
    LINKS: [
        {
            id: 1,
            name: "Home",
            href: "#"
        },
        {
            id: 2,
            name: "Experience",
            href: "#experience"
        },
        {
            id: 3,
            name: "Projects",
            href: "#projects"
        },
        {
            id: 4,
            name: "About Me",
            href: "#about-me"
        },
        {
            id: 5,
            name: "Contact",
            href: "mailto:brunobarbaran@hotmail.com"
        }
    ],
    WELCOME: {
        id: '',
        heading: 'Hey, I’m Bruno!',
        description: '<strong>Software Engineer</strong> from Peru with 3+ years of experience building <strong>mobile apps (Flutter)</strong> and <strong>Full Stack</strong> web solutions.',
        NETWORKS: [
            {
                href: 'https://www.linkedin.com/in/brunobarbaran/',
                label: 'LinkedIn',
                icon: <LinkedIn width={18} height={18} />
            },
            {
                href: 'https://github.com/iBarb',
                label: 'Github',
                icon: <Github width={18} height={18} />
            },
            {
                href: '/CV_Bruno_Barbaran_en.pdf',
                label: 'CV',
                icon: <CV width={18} height={18} />
            }
        ]
    },
    EXPERIENCE: {
        id: 'experience',
        heading: 'Work Experience',
        TIMELINE: [
            {
                id: 4,
                title: "Software Architect",
                subtitle: "Altoken.io",
                description: "Fintech / proptech platform for real estate asset tokenization. Designed system architecture and implemented Real-World Asset (RWA) tokenization on Hedera Hashgraph. Built the REST APIs and Node.js backend with SDK integration, developed a digital wallet for investors, architected the KYC onboarding flow, and built the frontend using React and TypeScript.",
                date: "Oct. 2025 - Present",
            },
            {
                id: 5,
                title: "FullStack Programmer Analyst",
                subtitle: "CESEL Ingenieros",
                description: "Redesign of the Portal Cesel mobile app architecture using Flutter and Clean Architecture. Implemented PIN and biometric authentication, developed an end-to-end expense report module, and migrated the document OCR pipeline to a local PaddleOCR solution. Built a SUNAT scraper for automated supplier lookup and engineered a Java (Spring Boot) microservices backend.",
                date: "Nov. 2025 - Present",
            },
            // {
            //     id: 1,
            //     title: "Fullstack Freelance",
            //     subtitle: "BestHomeOffer",
            //     description: "I developed a real estate platform focused on optimizing property sales by combining performance, security, and user experience. I used React, Tailwind, Material UI, React Query, Formik, and Yup to build a modern frontend with effective validations. On the backend, I built an API with Express, implementing security measures such as CORS and rate limiting. I also integrated Cloudflare for caching, attack mitigation, and improved response times.",
            //     date: "Jun. 2025 - Jun. 2025"
            // },
            {
                id: 2,
                title: "Development Area Coordinator",
                subtitle: "CECOM SJL",
                description: "Led the implementation of systems for attendance control, Tetra radio tracking, and municipal staff validation, improving management, security, and transparency. Supervised the maintenance and improvement of municipal applications.",
                date: "Sep. 2024 - Sep. 2025",
            },
            {
                id: 3,
                title: "Web Developer",
                subtitle: "Eco2biz",
                description: "Responsible for implementing a module with Google Maps to reduce the time needed to locate monitoring stations, creating an AI virtual assistant to enhance document search efficiency through natural language queries, and designing a meteorological map for monitoring result visualization and data analysis.",
                date: "Oct. 2022 - Dec. 2023",
            }
        ],
    },
    PROJECTS: {
        id: 'projects',
        heading: 'Projects',
        PROJECTS: [
            {
                id: 7,
                title: "Altoken",
                description: "Fintech/proptech platform for RWA (Real-World Assets) tokenization on Hedera Hashgraph. Features a digital wallet for investors, advanced KYC/onboarding flows, a Node.js backend, and a React & TypeScript frontend dashboard.",
                link: "https://www.altoken.io/es",
                image: "/projects/altoken.webp",
                tags: [TAGS.REACT, TAGS.NODEJS, TAGS.JAVASCRIPT, TAGS.TAILWIND]
            },
            {
                id: 8,
                title: "Portal Cesel",
                description: "Corporate mobile app built with Clean Architecture in Flutter for expense management. Features an approval engine, in-house OCR with PaddleOCR for receipts, a SUNAT scraper, and a Microservices backend in Java (Spring Boot).",
                link: "",
                image: "/projects/portal-cesel.webp",
                tags: [TAGS.FLUTTER, TAGS.JAVA, TAGS.PYTHON]
            },
            // {
            //     id: 1,
            //     title: "Best Home Offer",
            //     description: "Real estate platform that simplifies the property selling process. Allows homeowners to receive a fast, secure offer without unnecessary paperwork. No repairs or intermediaries are required—properties are purchased as-is, with no commissions or hidden fees. A practical and efficient solution for those looking to avoid the complications of the traditional model.",
            //     link: "https://besthomeoffer.ai/",
            //     image: "/projects/besthomeoffer.webp",
            //     tags: [TAGS.JAVASCRIPT, TAGS.REACT, TAGS.TAILWIND]
            // },
            {
                id: 2,
                title: "Identidad SJL",
                description: "A web platform that allows residents of San Juan de Lurigancho to quickly verify if a person arriving at their home on behalf of the municipality is an authorized worker. It utilizes Axxon's artificial intelligence with facial recognition to search the Gestiona-te database. Additionally, it offers the option to report irregularities, strengthening security and trust within the community.",
                link: "https://identidad.munisjl.gob.pe/",
                image: "/projects/identidad-SJL.webp",
                tags: [TAGS.JAVASCRIPT, TAGS.REACT, TAGS.TAILWIND]
            },
            {
                id: 3,
                title: "Gestiona-Te",
                description: "A comprehensive system that optimizes municipal staff management, featuring modules for attendance control, employee management, and recruitment. It incorporates advanced technologies such as facial recognition and psychological tests to assess applicant profiles, ensuring accuracy and efficiency in human resource management.",
                link: "https://www.linkedin.com/posts/gunminiho_me-alegra-compartir-que-he-trabajado-en-este-ugcPost-7312256404470333440-FmiT?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC3PMGYBrobu-cPnPFB9o3EHEYCSQ0pmc7k",
                image: "/projects/gestiona-te.webp",
                tags: [TAGS.JAVASCRIPT, TAGS.REACT, TAGS.TAILWIND]
            },
            {
                id: 4,
                title: "NLP Model for Es-Qu Translation",
                description: "Research was conducted to develop and optimize translations between Spanish and Quechua using a pre-trained Helsinki-NLP/opus-mt-es-en natural language processing (NLP) model. Optuna was used for hyperparameter optimization, focusing on refining the model parameters to improve translation accuracy.",
                link: "https://translator-es-qu.web.app/",
                github: "https://github.com/iBarb/Machine-Translation-Es-Qu",
                image: "/projects/Taduccion-es-qu.webp",
                tags: [TAGS.PYTHON, TAGS.HUGGING_FACE, TAGS.REACT, TAGS.TAILWIND]
            },
            {
                id: 5,
                title: "Georeferencing in Environmental Management",
                description: "Developed a comprehensive system with Google Maps to locate monitoring stations and collection points, as well as to conduct meteorological tracking. Includes a data visualization platform with Stiff diagrams for water quality analysis and heat maps to manage exceedance situations.",
                link: "https://www.linkedin.com/posts/eco2biz_la-importancia-de-la-informaci%C3%B3n-georeferencial-activity-7163396183825047553-S_X7?utm_source=share&utm_medium=member_desktop",
                github: "",
                image: "/projects/Google Maps Module.webp",
                tags: [TAGS.JAVASCRIPT, TAGS.SQLSERVER, TAGS.PYTHON]
            },
            {
                id: 6,
                title: "UTP Counseling System - EducaUTP",
                description: "Designed a web application to manage counseling at UTP, using React Context for secure authentication and advanced state management, Firebase for real-time storage, and created an intuitive and responsive interface. Additionally, managed environment variables for keys.",
                link: "https://educautp.web.app/",
                github: "https://github.com/iBarb/EducaUTP-Web",
                image: "/projects/educaUTP.webp",
                tags: [TAGS.REACT, TAGS.FIREBASE]
            }
        ]
    },
    ABOUT_ME: {
        id: 'about-me',
        heading: 'About Me',
        p1: `My name is <strong>Bruno Paolo Barbaran Quiroz</strong>, I am <strong>${calcularEdad('2001-07-21')} years old</strong>, and I am from Peru. I hold a Professional Degree in Software Engineering from <strong>Universidad Tecnológica del Perú</strong>. I bring 3+ years of experience building mobile applications with <strong>Flutter</strong> and <strong>Full Stack</strong> web solutions, alongside an upper-intermediate level of English.`,
        p2: `I specialize in clean architectures, complex system integrations, and process automation using <strong>AI and local OCR</strong>. I am always looking to learn new technological tools to enhance my professional growth and deepen the impact of the projects I am involved in.`
    }
}