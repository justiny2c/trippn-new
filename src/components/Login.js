import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import supabase from '../api/supabaseClient';
import { Auth } from '@supabase/auth-ui-react';
import {
  // Import predefined theme
  ThemeSupa,
} from '@supabase/auth-ui-shared';
import "./Login.css"


const Login = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const { data: listener  } = supabase.auth.onAuthStateChange((event, session) => {
            if (session) {
                navigate('/plan-trip'); // Navigate when the user is logged in
            }
        });

        return () => {
            listener.subscription.unsubscribe();
        };
    }, [navigate]);

    return (
        <div className='login-page'>
            <div className='login-hero'>
                <p className='login-title'>Please Sign-In!</p>
                <p className='login-statement'>Ready to explore the world?
                <br /><br />Join us today to create custom trip plans, 
                <br /> save your favorite spots, and take the first
                <br />step toward unforgettable experiences.</p>
            </div>
            <div className='login-auth'>
                <Auth
                className="authenticating"
                supabaseClient={supabase}
                appearance={{ theme: ThemeSupa }}
                providers={['google', 'facebook', 'twitter']}
                />
            </div>
        </div>
    )
}

 export default Login 



