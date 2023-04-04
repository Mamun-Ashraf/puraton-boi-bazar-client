import React from 'react';
import { createContext } from 'react';
import { getAuth } from 'firebase/auth';
import app from '../firebase/firebase.config';

export const AuthContex = createContext();
const auth = getAuth(app);

const Authprovider = ({ children }) => {
    const authInfo = {};
    return (
        <AuthContex.Authprovider value={authInfo}>
            {children}
        </AuthContex.Authprovider>
    );
};

export default Authprovider;