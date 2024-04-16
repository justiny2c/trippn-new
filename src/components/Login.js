import React from 'react';
import supabase from '../api/supabaseClient';
import { Auth } from '@supabase/auth-ui-react';
import {
  // Import predefined theme
  ThemeSupa,
} from '@supabase/auth-ui-shared';
import "./Login.css"


const Login = () => (
    <div className='login-page'>
        <div className='login-hero'>

        </div>
        <div className='login-auth'>
            <Auth
            className="testing"
            supabaseClient={supabase}
            appearance={{ theme: ThemeSupa }}
            providers={['google', 'facebook', 'twitter']}
            />
        </div>
    </div>
  )

 export default Login 



