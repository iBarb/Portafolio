import { createContext, useContext, useState } from "react";
import { EN, ES } from "../Utils/Constants";

const AppContext = createContext(null);

export function useApp() {
    return useContext(AppContext)
}

export function AppProvider({ children }) {

    const [language, setLanguage] = useState(() => {
        const userLanguage = navigator.language || navigator.userLanguage;
        return userLanguage.startsWith('es') ? 'ES' : 'EN';
    });

    const toggleLanguage = () => {
        setLanguage(language === 'ES' ? 'EN' : 'ES');
    }

    const CONTENT = language === 'ES' ? ES : EN;

    const value = {
        language,
        toggleLanguage,
        CONTENT
    }

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}