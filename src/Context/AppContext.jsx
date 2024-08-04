import { createContext, useContext, useEffect, useState } from "react";
import { EN, ES } from "../Utils/Constants";

const AppContext = createContext(null);

export function useApp() {
    return useContext(AppContext)
}

export function AppProvider({ children }) {
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const storageDarkMode = localStorage.getItem("darkMode");
        if (storageDarkMode) {
            return storageDarkMode;
        }
        return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    })
    
    const [language, setLanguage] = useState(() => {
        const storageLanguage = localStorage.getItem("language");
        const userLanguage = navigator.language || navigator.userLanguage;

        if (storageLanguage) {
            return storageLanguage;
        }
    
        return userLanguage.startsWith('es') ? 'ES' : 'EN';
    });

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        localStorage.setItem("darkMode", !isDarkMode);
    }

    const toggleLanguage = () => {
        setIsTransitioning(true);

        const timer = setTimeout(() => {
            setIsTransitioning(false);
            const activeLanguage = language === 'ES' ? 'EN' : 'ES';
            setLanguage(activeLanguage);
            localStorage.setItem("language", activeLanguage);
        }, 300);
    }

    const CONTENT = language === 'ES' ? ES : EN;

    const value = {
        language,
        toggleLanguage,
        CONTENT,
        isTransitioning,
        isDarkMode,
        toggleDarkMode
    }

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}