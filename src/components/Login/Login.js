import { Link } from 'react-router-dom';
import './Login.css';

export const Login = () => {

    return (
        <section className="login">
            <div class="login-box">
                <h1>Login</h1>
                <form >
                    <label>Email</label>
                    <input type="text" name="" placeholder="Email.." />
                    <label>Password</label>
                    <input type="password" name="" placeholder="Password.." />
                    <input type="submit" value="Submit" />
                </form>
                <p>Not have an account? <Link to="/register">Register here</Link></p>
            </div>
        </section>
    );
}