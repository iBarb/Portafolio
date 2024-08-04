import React, { useEffect } from 'react'
import './ToogleDarkMode.css'
import { useApp } from '../../Context/AppContext'
import DarkMode from '../../Icons/DarkMode'
import LightMode from '../../Icons/LightMode'

const ToogleDarkMode = () => {
    const { isDarkMode, toggleDarkMode } = useApp()

    useEffect(() => {
        const html = document.querySelector('html');

        if (isDarkMode) {
            html.setAttribute('data-bs-theme', 'dark');
        } else {
            html.removeAttribute('data-bs-theme');
        }

    }, [isDarkMode])

    return (
        <div className='DarkMode-btn' onClick={toggleDarkMode}>
            <LightMode className={isDarkMode ? '' : 'light-mode'} width={32} height={32} />
            <DarkMode className={isDarkMode ? 'dark-mode' : ''} width={22} height={22} />
        </div>
    )
}

export default ToogleDarkMode