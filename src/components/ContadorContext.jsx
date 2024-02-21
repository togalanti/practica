import React from "react";

const ContadorContext = React.createContext(undefined);

const ContadorProvider = ({children}) => {
    const [contador, setContador] = React.useState(Number(localStorage.getItem("contador")) || 0);

    React.useEffect(() => {
        document.title = contador;
        localStorage.setItem("contador", contador);
    }, [contador])

    return <ContadorContext.Provider value={{contador, setContador}}>{children}</ContadorContext.Provider>
}

export {ContadorContext, ContadorProvider};