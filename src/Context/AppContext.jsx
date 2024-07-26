import { createContext, useContext, useEffect, useState } from "react";
import { EN, ES } from "../Utils/Constants";

const AppContext = createContext(null);

export function useApp() {
    return useContext(AppContext)
}

export function AppProvider({ children }) {
    const [isTransitioning, setIsTransitioning] = useState(false);

    const [language, setLanguage] = useState(() => {
        const userLanguage = navigator.language || navigator.userLanguage;
        return userLanguage.startsWith('es') ? 'ES' : 'EN';
    });

    const toggleLanguage = () => {
        setIsTransitioning(true);

        const timer = setTimeout(() => {
            setIsTransitioning(false);
            setLanguage(language === 'ES' ? 'EN' : 'ES');
        }, 300);
    }

    const CONTENT = language === 'ES' ? ES : EN;


    const value = {
        language,
        toggleLanguage,
        CONTENT,
        isTransitioning
    }

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}