/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, {useState} from "react";

const CountdownContext = React.createContext(null)

const CountdownProvider = ({children}) => {
    const [ event, setEvent] = useState(null)
    return(
        <CountdownContext.Provider value={{event, setEvent}}>
            {children}
        </CountdownContext.Provider>
    )
}

export {CountdownContext, CountdownProvider}