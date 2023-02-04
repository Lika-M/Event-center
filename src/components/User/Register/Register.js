import { Link, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';

import { AuthContext } from '../../../contexts/AuthContext.js';
import { register } from '../../../services/authService.js';
import { useValidate } from '../useValidate.js';

import './Register.css';

export const Register = () => {

    const navigate = useNavigate();
    const { saveUserInfo } = useContext(AuthContext);
    const [input, setInput] = useState({});
    const [error, setError] = useState({});

    const { usernameValidator, emailValidator, passwordValidator, passwordsMatch } = useValidate(setError);

    const onRegisterHandler = (ev) => {
        ev.preventDefault();

        const formData = new FormData(ev.target);
        const { username, email, password, rePass } = Object.fromEntries(formData);

        if (password !== rePass) {
            passwordsMatch(password, rePass);
            setInput(state => ({
                ...state,
                password: '',
                rePass: '',
            }));
        }

        if (Object.values(error).every(x => x !== '')) {
            register(username, email, password)
                .then(data => {
                    saveUserInfo(data);
                    navigate('/');
                })
                .catch(err => {
                    console.log(err)
                    setError(state => ({
                        ...state,
                        serverError: err.message
                    }));
                    setInput(state => ({
                        ...state,
                        password: '',
                        repass: '',
                    }));
                });
        }
    }

    function onChange(ev) {
        setInput(state => ({
            ...state,
            [ev.target.name]: ev.target.value
        }));
    }

    function onFocus(ev) {
        setInput(state => ({
            ...state,
            [ev.target.name]: ''
        }));
        setError(state => ({
            ...state,
            [ev.target.name]: ''
        }));
    }

    const validUsername = (ev) => usernameValidator(ev.target.value)
    const validEmail = (ev) => emailValidator(ev.target.value)
    const validPassword = (ev) => passwordValidator(ev.target.value)

    return (

        <section className="register">
            <div className="register-box">
                <h1>Register</h1>
                <form onSubmit={onRegisterHandler}>
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" id="username" placeholder="Username"
                        value={input.username || ''}
                        onChange={onChange}
                        onBlur={validUsername}
                        onFocus={onFocus}
                    />
                    {error.username
                        ? <p style={{ color: 'red' }}>{error.username}</p>
                        : null}
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" id="email" placeholder="Email"
                        value={input.email || ''}
                        onChange={onChange}
                        onBlur={validEmail}
                        onFocus={onFocus}
                    />
                    {error.email
                        ? <p style={{ color: 'red' }}>{error.email}</p>
                        : null}
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" placeholder="Password"
                        value={input.password || ''}
                        onChange={onChange}
                        onBlur={validPassword}
                        onFocus={onFocus}
                    />
                    {error.password
                        ? <p style={{ color: 'red' }}>{error.password}</p>
                        : null}
                    <label htmlFor="rePass">Confirm Password</label>
                    <input type="password" name="rePass" id="rePass" placeholder="Confirm Password"
                        value={input.rePass || ''}
                        onChange={onChange}
                        onFocus={onFocus}
                    />
                    {error.passwords
                        ? <p style={{ color: 'red' }}>{error.passwords}</p>
                        : null}
                    <input type="submit" value="Submit" />
                </form>
                <p>Already have an account? <Link to="/login">Login here</Link></p>
            </div>

        </section>
    );
}