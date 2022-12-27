import { createUserWithEmailAndPassword,  signInWithEmailAndPassword } from 'firebase/auth';
import React, { createContext } from 'react';
import { useState } from 'react';
import { auth } from '../firebase/firebase.config';

export const AuthContext = createContext();


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    //* Register an user
    const userRegister = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //* user sign in
    const userSignIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }








    const authInfo = {
        userRegister,
        userSignIn
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;