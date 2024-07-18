import React from 'react'
import LinkedIn from '../../Icons/LinkedIn'
import Github from '../../Icons/Github'
import Mail from '../../Icons/Mail'

const Footer = () => {
    return (
        <footer className='footer-page'>
            <div>
                <a href="https://www.linkedin.com/in/bruno-paolo-barbaran-quiroz-606478195/" target="_blank" rel="noopener noreferrer" role="link">
                    <LinkedIn width={20} height={20} /> Linkedin
                </a> 
                |
                <a href="https://github.com/iBarb" target="_blank" rel="noopener noreferrer" role="link">
                    <Github width={20} height={20} /> Github
                </a>
                |
                <a href="mailto:brunobarbaran@hotmail.com" target="_blank" rel="noopener noreferrer" role="link">
                    <Mail width={20} height={20} /> Correo
                </a>
            </div>
        </footer>
    )
}

export default Footer