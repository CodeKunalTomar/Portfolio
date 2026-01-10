import React, { createContext, useContext, useState, useEffect } from 'react';
import { playRetroSound } from '../utils/sound';

interface SoundContextType {
    isMuted: boolean;
    toggleMute: () => void;
    play: (type: 'click' | 'hover' | 'type' | 'error' | 'success') => void;
}

const SoundContext = createContext<SoundContextType | undefined>(undefined);

export const useSound = () => {
    const context = useContext(SoundContext);
    if (!context) {
        throw new Error('useSound must be used within a SoundProvider');
    }
    return context;
};

export const SoundProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    // Initialize from localStorage or default to false
    const [isMuted, setIsMuted] = useState(() => {
        const saved = localStorage.getItem('sound-muted');
        return saved ? JSON.parse(saved) : false;
    });

    useEffect(() => {
        localStorage.setItem('sound-muted', JSON.stringify(isMuted));
    }, [isMuted]);

    const toggleMute = () => setIsMuted((prev: boolean) => !prev);

    const play = (type: 'click' | 'hover' | 'type' | 'error' | 'success') => {
        if (!isMuted) {
            playRetroSound(type);
        }
    };

    return (
        <SoundContext.Provider value={{ isMuted, toggleMute, play }}>
            {children}
        </SoundContext.Provider>
    );
};
