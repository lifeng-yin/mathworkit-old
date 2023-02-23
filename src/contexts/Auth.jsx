import React, { createContext, useContext, useState, useEffect } from "react";
import { supabaseClient } from "../supabase";

const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const updateAuthData = async () => {
            const { data: { session } } = await supabaseClient.auth.getSession();

            setUser(session?.user ?? null);
            setLoading(false);
        
            supabaseClient.auth.onAuthStateChange(async (event, session) => {
                setUser(session?.user ?? null);
                setLoading(false);
            });
        };

        updateAuthData();

        
    }, []);
    
    const value = {
        signUp: ({ email, password }) => supabaseClient.auth.signUp({ email, password }),
        signInWithPassword: ({ email, password }) => supabaseClient.auth.signInWithPassword({ email, password }),
        signOut: () => supabaseClient.auth.signOut(),
        user,
    };

    return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>
};

const useAuth = () => {
    return useContext(AuthContext);
};

export { AuthProvider, useAuth };