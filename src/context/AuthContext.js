import React, {useState,createContext} from 'react'

export const AuthContext = createContext({
    user: undefined,
    logIn: () => {},
    logOut: () => {},
});

export const AuthProvider = (props) => {
    const {children} = props
    const [auth, setAuth] = useState(undefined)

    const logIn = (userData) => {
        setAuth(userData)
    }

    const logOut = () => {
        setAuth(undefined)
    }

    const valueContext = {
        auth,
        logIn,
        logOut
    }


    return (
        <AuthContext.Provider value={valueContext}>
            {children}
        </AuthContext.Provider>
    )
}
