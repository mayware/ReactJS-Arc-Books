import { useRef } from 'react';
import { Link } from 'react-router-dom';

import '../styles/login.css'

const Login = () => {

    const email = useRef('');
    const password = useRef('');

    function loginSubmit(e) {
        e.preventDefault();
        // set up the validation
        email.current.value = '';
        password.current.value = '';
    }
    return (
        <div className="content">
            <div className="login-content">
                <div className="login-box">
                    <div className='login-form-title'>Login</div>
                    <form className="login-form" onSubmit={loginSubmit}>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            ref={email}
                            onChange={(e) => (e.target.value)}
                            name="email"
                            className="login-email-field"
                            placeholder='Email' />
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            ref={password}
                            onChange={(e) => (e.target.value)}
                            name="password"
                            className="login-password-field"
                            placeholder='Password' />
                        <input type="submit" value="Log in" className='login-submit-btn' />
                    </form>
                    <div className="sign-option">
                        <span className="signup-option-title">Don't have an account?</span>
                        <Link to="/signup" className='sign-up-link'>Sign up</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;