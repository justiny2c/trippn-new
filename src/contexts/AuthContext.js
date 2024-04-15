import React, { createContext, useContext, useState, useEffect } from 'react';
import supabase from '../api/supabaseClient';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {

  const [session, setSession] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
        setSession(session);
      });
    console.log('Session data:', session);  

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
        setSession(session);
    });

    return () => {
        console.log('Cleaning up auth listener');
        subscription.unsubscribe();
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  console.log('Rendering AuthProvider, session:', session);

  return (
    // <AuthContext.Provider value={value}>
    <AuthContext.Provider value={{ session }}>
      {!session && children}
    </AuthContext.Provider>
  );
};
