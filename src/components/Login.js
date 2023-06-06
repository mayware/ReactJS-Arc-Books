import { useRef } from 'react';

import '../styles/login.css'

const Login = () => {

    const email = useRef('');
    const password = useRef('');

    function loginSubmit(e) {
        e.preventDefault();
        email.current.value = '';
        password.current.value = '';
    }
    return (
        <div className="content">
            <div className="login-content">
                <div className="login-box">
                    <div className='login-form-title'>Login</div>
                    <form className="login-form" onSubmit={loginSubmit}>
                        <input type="email" ref={email} onChange={(e) => (e.target.value)} name="email" className="login-email-field" placeholder='Email' />
                        <input type="password" ref={password} onChange={(e) => (e.target.value)} name="password" className="login-password-field" placeholder='Password' />
                        <input type="submit" value="Log in" className='login-submit-btn' />
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;