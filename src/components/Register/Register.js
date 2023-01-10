import { Link, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';

import { AuthContext } from '../../contexts/AuthContext.js';
import { register } from '../../services/authService.js';

import './Register.css';

export const Register = () => {

    const navigate = useNavigate();
    const { saveUserInfo } = useContext(AuthContext);

    const [input, setInput] = useState({
        username: '',
        email: '',
        password: '',
        repass: ''
    });

    const onRegisterHandler = (ev) => {
        ev.preventDefault();

        const formData = new FormData(ev.target);
        const { username, email, password, rePass } = Object.fromEntries(formData);
       
        if(email === '' || password === ''){
            return alert('All fields are required!');
        };

        if (password !== rePass) {
            setInput(state => ({
                ...state,
                password: '',
                repass: '',
            }))
            return alert('Passwords don\'t match');
        };

        register(username, email, password)
        .then(data => {
            console.log(data);
            saveUserInfo(data);
            return data;
        })
        .catch(err => alert(err.message));

        navigate('/');
    }

    return (

        <section className="register">
            <div className="register-box">
                <h1>Register</h1>
                <form onSubmit={onRegisterHandler}>
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" id="username" placeholder="Username" />
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" id="email" placeholder="Email" />
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" placeholder="Password" />
                    <label htmlFor="rePass">Confirm Password</label>
                    <input type="password" name="rePass" id="rePass" placeholder="Confirm Password" />
                    <input type="submit" value="Submit" />
                </form>
                <p>Already have an account? <Link to="/login">Login here</Link></p>
            </div>

        </section>
    );
}