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



