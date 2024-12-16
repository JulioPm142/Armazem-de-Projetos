import { createContext, ReactNode, useState } from "react";

export const Context = createContext<string>("")

interface ContextProviderProps {
    children: ReactNode
}

export const ContextProvider = ({children}: ContextProviderProps) => {
     const [value, setValue] = useState("")


    
    
    return (
        <Context.Provider value="">
            {children}
        </Context.Provider>
    )
} 