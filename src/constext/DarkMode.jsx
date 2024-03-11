import { createContext, useState, useEffect } from "react";

const DarkModeContext = createContext();


const DarkModeContextProvaider = ({ children }) => {
    const getInitialDarkMode = () => {
        const saveDarkMode = localStorage.getItem("isDarkMode");
        return saveDarkMode ? JSON.parse(saveDarkMode) : false;
    }
    const [isDarkMode, setDarkMode] = useState(getInitialDarkMode);

    useEffect(() => {
        localStorage.setItem("isDarkMode", JSON.stringify(isDarkMode))
    }, [isDarkMode])

    return (
        <DarkModeContext.Provider  value={{ isDarkMode, setDarkMode }}>
            {children}
        </DarkModeContext.Provider>
    )
}


export const DarkMode = DarkModeContext;
export default DarkModeContextProvaider;
