import React, { useState } from 'react';
// import supabase from '../api/supabaseClient';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLogin, setIsLogin] = useState(true); // true for login, false for signup
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        // let result;

        // if (isLogin) {
        //     // Login existing user
        //     result = await supabase.auth.signIn({ email, password });
        // } else {
        //     // Sign up new user
        //     result = await supabase.auth.signUp({ email, password });
        // }

        // if (result.error) {
        //     setError(result.error.message);
        // } else {
        //     // Redirect user or perform some action upon successful login/signup
        // }

        // setLoading(false);
    };

    return (
        <div>
            <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
            <form onSubmit={handleSubmit}>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" disabled={loading}>
                    {loading ? 'Loading...' : (isLogin ? 'Login' : 'Sign Up')}
                </button>
                <button type="button" onClick={() => setIsLogin(!isLogin)} disabled={loading}>
                    Switch to {isLogin ? 'Sign Up' : 'Login'}
                </button>
            </form>
        </div>
    );
};

export default Login;

