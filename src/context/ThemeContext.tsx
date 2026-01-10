import React, { createContext, useContext, useState, useEffect } from 'react';

type Theme = 'green' | 'amber' | 'cyan' | 'red';

interface ThemeContextType {
    currentTheme: Theme;
    setTheme: (theme: Theme) => void;
    availableThemes: Theme[];
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};

const themes: Record<Theme, string> = {
    green: '0, 255, 0',
    amber: '255, 176, 0',
    cyan: '0, 255, 255',
    red: '255, 0, 0',
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [currentTheme, setCurrentTheme] = useState<Theme>('green');

    useEffect(() => {
        const root = document.documentElement;
        const rgb = themes[currentTheme];
        root.style.setProperty('--primary-rgb', rgb);
        // Also update the generic color for libraries if needed, usually via RGB var
    }, [currentTheme]);

    const setTheme = (theme: Theme) => {
        if (themes[theme]) {
            setCurrentTheme(theme);
        }
    };

    return (
        <ThemeContext.Provider value={{ currentTheme, setTheme, availableThemes: Object.keys(themes) as Theme[] }}>
            {children}
        </ThemeContext.Provider>
    );
};
