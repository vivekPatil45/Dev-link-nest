import React, { createContext, useContext, useState } from 'react'

const ResultsContext = createContext(null)

export const ResultsProvider = ({
    children,
}) => {
    const [results, setResults] = useState(-1)

    return (
        <ResultsContext.Provider value={{ results, setResults }}>
            {children}
        </ResultsContext.Provider>
    )
}

export const useResults = () => {
    const context = useContext(ResultsContext)
    if (!context) {
        throw new Error('useResults must be used within a ResultsProvider')
    }
    return context
}
