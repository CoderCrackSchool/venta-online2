import { createContext, useEffect, useState } from "react";
import { onAuthStateChangedListener } from "../utils/firebase/firebase";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        onAuthStateChangedListener((user) => {
            setCurrentUser(user)
        })
    }, [])

    return <UserContext.Provider value={{ currentUser, setCurrentUser }}> {children} </UserContext.Provider>
}

