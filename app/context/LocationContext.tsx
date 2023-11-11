'use client';
import { createContext, useContext, Dispatch, SetStateAction, useState } from "react";

interface ContextProps {
    isInArgentina: boolean
    setIsInArgentina: Dispatch<SetStateAction<boolean>>
}


const LocationContext = createContext<ContextProps>({
    isInArgentina: true,
    setIsInArgentina: (): string => ''
   
})


export const LocationContextProvider = ({ children }: any) => {
    const [isInArgentina, setIsInArgentina] = useState(true);
   
    return (              
 /// aca en GlobalContext.Provider le paso cada una de las variables que van a estar disponibles
        <LocationContext.Provider value={{ isInArgentina, setIsInArgentina }}> 
            {children}
        </LocationContext.Provider>
    )
};

export const useLocationContext = () => useContext(LocationContext);
