import { Link } from 'react-router-dom';
import './Login.css';

export const Login = () => {

    const onLoginHandler = (ev) =>{
        ev.preventDefault();
    }
    
    return (
        <section className="login">
            <div class="login-box">
                <h1>Login</h1>
                <form onSubmit={onLoginHandler}>
                    <label htmlFor='email'>Email</label>
                    <input type="text" name="email" id="email" placeholder="Email" />
                    <label htmlFor='password'>Password</label>
                    <input type="password" name="password" id="password" placeholder="Password" />
                    <input type="submit" value="Submit" />
                </form>
                <p>Not have an account? <Link to="/register">Register here</Link></p>
            </div>
        </section>
    );
}