import React from 'react'
import './ToogleLanguage.css'
import { useApp } from '../../Context/AppContext'

const ToggleLanguage = () => {
  const { language, toggleLanguage } = useApp()

  return (
    <span className='language' onClick={toggleLanguage}>{language}</span>
  )
}

export default ToggleLanguage