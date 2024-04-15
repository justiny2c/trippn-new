import React, { createContext, useContext, useState, useEffect } from 'react';
import supabase from '../api/supabaseClient';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check active session and set user
    const session = supabase.auth.getSession();
    setUser(session?.user || null);
    setLoading(false);

    // Listen for changes on authentication state (login, signup, logout)
    const { data: authListener } = supabase.auth.onAuthStateChange(async (event, session) => {
      setUser(session?.user || null);
    });

    return () => {
      authListener.unsubscribe();
    };
  }, []);

  const value = { user, loading };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
