import { useRef } from 'react';

import '../styles/login.css'

const Login = () => {

    const email = useRef('');
    const password = useRef('');

    function inputCatcher(e) {
        email.current = e.target.value;
        password.current = e.target.value;
    }

    function loginSubmit(e) {
        e.preventDefault();
        console.log(email);
        console.log(password);
    }
    return (
        <div className="content">
            <div className="login-content">
                <h1>Login</h1>
                <div className="login-box">
                    <form className="login-form" onSubmit={loginSubmit}>
                        <input type="email" ref={email} onChange={inputCatcher} name="email" className="login-email-field" />
                        <input type="password" ref={password} onChange={inputCatcher} name="password" className="login-password-field" />
                        <input type="submit" value="Submit" />
                    </form>
                </div>
            </div>

        </div>
    );
}

export default Login;