import { createContext, useReducer } from 'react'

export const BPContext = createContext()

export const BPReducer = (state, action) => {
    switch(action.type) {
    case 'SET_BPS':
        return {
        BPs: action.payload
    }
    case 'CREATE_BP':
        return{
        BPs: [action.payload, ...state.BPs]
        }
    default:
        return state
    }      
}

export const BPContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(BPReducer, {
        BPs: null
    })

    return (
        <BPContext.Provider value = {{state, dispatch}} >
            {children}
        </BPContext.Provider>
    )
}
