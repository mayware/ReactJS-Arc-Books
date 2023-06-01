import '../styles/login.css'

const Login = () => {
    return (
        <div className="content">
            <h1>Login</h1>
            <div className="login-box">
                <form className="login-form">
                    <input type="email" name="email" className="login-email-field" />
                    <input type="password" name="password" className="login-password-field" />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        </div>
    );
}

export default Login;