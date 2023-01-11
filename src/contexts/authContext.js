import { createContext, useState } from 'react';
import {getUserData} from '../services/util.js'

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {

    const [currentUser, setCurrentUser] = useState(getUserData());

    const saveUserInfo = (userData) => {
        setCurrentUser(userData);
    }

    const deleteUserInfo = () => {
        setCurrentUser(null);
    }

    return (
        <AuthContext.Provider value={{ currentUser, saveUserInfo, deleteUserInfo }}>
            {children}
        </AuthContext.Provider>
    );
}

