import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { login } from '../../services/authService.js'
import { AuthContext } from '../../contexts/AuthContext.js';

import './Login.css';

export const Login = () => {

    const navigate = useNavigate();
    const { saveUserInfo } = useContext(AuthContext);

    const onLoginHandler = (ev) => {
        ev.preventDefault();

        const formData = new FormData(ev.target);
        const { email, password } = Object.fromEntries(formData);

        if (email === '' || password === '') {
            return alert('All fields are required!');
        }

        login(email, password)
            .then(data => {
                saveUserInfo(data);
                return data;
            })
            .catch(err => alert(err.message));

        navigate('/');
    }

    return (
        <section className="login">
            <div className="login-box">
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