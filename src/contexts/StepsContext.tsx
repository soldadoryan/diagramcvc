import React, { createContext, useState } from 'react';
import StepList from '../components/StepList';
import StepDTO from '../DTO/StepDTO';

export type StepContextType = {
    steps: StepDTO[];
    setSteps: (steps: StepDTO[]) => void;
}

const StepContext = createContext<StepContextType>({} as StepContextType);

export const StepProvider = ({ children }: { children: React.ReactNode }) => {
    const [steps, setSteps] = useState([
        { id: 'node-1', title: 'Teste' },
        { id: 'node-2', title: 'Teste 2' },
        { id: 'node-3', title: 'Teste 3' },
        { id: 'node-4', title: 'Teste 4' },
    ] as StepDTO[])

    return (
        <StepContext.Provider value={{ steps, setSteps }}>
            {children}
        </StepContext.Provider>
    )
}

export default StepContext;