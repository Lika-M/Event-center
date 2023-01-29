import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { login } from '../../../services/authService.js'
import { AuthContext } from '../../../contexts/AuthContext.js';

import './Login.css';

export const Login = () => {

    const navigate = useNavigate();
    const { saveUserInfo } = useContext(AuthContext);

    const onLoginHandler = (ev) => {
        ev.preventDefault();

        const formData = new FormData(ev.target);
        const { username, password } = Object.fromEntries(formData);

        if (username === '' || password === '') {
            return alert('All fields are required!');
        }

        login(username, password)
            .then(data => {
                saveUserInfo(data);
                return data;
            })
            .catch(err => alert(err.message));
        //TODO error notification
        navigate('/');
    }

    return (
        <section className="login">
            <div className="login-box">
                <h1>Login</h1>
                <form onSubmit={onLoginHandler}>
                    <label htmlFor='username'>Username</label>
                    <input type="text" name="username" id="username" placeholder="Username" />
                    <label htmlFor='password'>Password</label>
                    <input type="password" name="password" id="password" placeholder="Password" />
                    <input type="submit" value="Submit" />
                </form>
                <p>Not have an account? <Link to="/register">Register here</Link></p>
            </div>
        </section>
    );
}