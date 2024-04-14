import React from 'react';
import supabase from '../api/supabaseClient';
import { Auth } from '@supabase/auth-ui-react'
import {
  // Import predefined theme
  ThemeSupa,
} from '@supabase/auth-ui-shared'

const Login = () => (
    <div className='login-page'>
        <Auth
        supabaseClient={supabase}
        appearance={{ theme: ThemeSupa }}
        providers={['google', 'facebook', 'twitter']}
        />
    </div>
  )

 export default Login 



