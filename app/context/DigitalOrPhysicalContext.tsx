'use client';
import { createContext, useContext, Dispatch, SetStateAction, useState } from "react";

interface ContextProps {
    isDigital: boolean
    setIsDigital: Dispatch<SetStateAction<boolean>>
}


const DigitalOrPhysicalContext = createContext<ContextProps>({
    isDigital: false,
    setIsDigital: (): string => ''
   
})


export const DigitalOrPhysicalContextProvider = ({ children }: any) => {
    const [isDigital, setIsDigital] = useState(true);
   
    return (              
 /// aca en GlobalContext.Provider le paso cada una de las variables que van a estar disponibles
        <DigitalOrPhysicalContext.Provider value={{ isDigital, setIsDigital }}> 
            {children}
        </DigitalOrPhysicalContext.Provider>
    )
};

export const useDigitalOrPhysicalContext = () => useContext(DigitalOrPhysicalContext);
