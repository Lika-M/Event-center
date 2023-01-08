import { createContext, useState } from 'react';

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {

    const [currentUser, setCurrentUser] = useState(localStorage.getItem('userData'));

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

