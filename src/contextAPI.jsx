import { useReducer, createContext } from 'react'


function GlobalReducer(state, action) {
    switch (action.type) {
        case 'OPEN_NAV':
        return { ...state, sidebar: true }
        case 'CLOSE_NAV':
        return { ...state, sidebar: false }
        case 'TOGGLE_NAV':
        return { ...state, sidebar: !state.sidebar }
        default:
        state
    }
    return state
}







const initialState = {
    sidebar: false,
}
const GlobalContext = createContext(initialState)

const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(GlobalReducer, initialState)
    function openNav() {
        dispatch({
        type: 'OPEN_NAV',
        })
    }
    function closeNav() {
        dispatch({
        type: 'CLOSE_NAV',
        })
    }
    function toggleNav() {
        dispatch({
        type: 'TOGGLE_NAV',
        })
    }

    return (
        <GlobalContext.Provider
        value={{
            sidebar: state.sidebar,
            openNav,
            closeNav,
            toggleNav,
        }}
        >
        {children}
        </GlobalContext.Provider>
    )
}

export { GlobalContext, GlobalProvider }
