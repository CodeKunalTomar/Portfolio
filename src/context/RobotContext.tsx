import React, { createContext, useContext, useState } from 'react';

interface RobotContextType {
    isRobotTakeover: boolean;
    triggerTakeover: () => void;
    resetTakeover: () => void;
}

const RobotContext = createContext<RobotContextType | undefined>(undefined);

export const RobotProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isRobotTakeover, setIsRobotTakeover] = useState(false);

    const triggerTakeover = () => setIsRobotTakeover(true);
    const resetTakeover = () => setIsRobotTakeover(false);

    return (
        <RobotContext.Provider value={{ isRobotTakeover, triggerTakeover, resetTakeover }}>
            {children}
        </RobotContext.Provider>
    );
};

export const useRobot = () => {
    const context = useContext(RobotContext);
    if (context === undefined) {
        throw new Error('useRobot must be used within a RobotProvider');
    }
    return context;
};
