import { createContext, useState } from "react";

const Context = createContext()

const ContextProvider = (props) =>{ 
    const [search, setSearch] = useState()
    return (
        <Context.Provider value={{search, setSearch}}>
            {props.children}
        </Context.Provider>
    )
}

export {ContextProvider, Context as ContextObj}