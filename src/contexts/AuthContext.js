import { useContext, useState, useEffect, createContext } from 'react';
import supabase from '../api/supabaseClient';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [session, setSession] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const setData = async () => {
            try {
                const { data, error } = await supabase.auth.getSession();
                if (error) throw error;
                setSession(data.session);
                setUser(data.session?.user);
                setLoading(false);
            } catch (error) {
                console.error('Failed to fetch session:', error);
            }
        };

        const { data: listener } = supabase.auth.onAuthStateChange((event, session) => {
            console.log('Auth event:', event); // Log auth events for debugging
            setSession(session);
            setUser(session?.user);
            setLoading(false);
        });

        // Calling setData to initialize session
        setData();

        // Cleanup function to unsubscribe from auth changes
        return () => {
            listener.subscription.unsubscribe();
        };
    }, []);

    const value = {
        session,
        user,
        signOut: () => supabase.auth.signOut(),
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
};


