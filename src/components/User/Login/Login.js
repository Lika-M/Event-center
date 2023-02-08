import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { login } from '../../../services/authService.js'
import { AuthContext } from '../../../contexts/AuthContext.js';
import { Notify } from '../../common/Notify/Notify.js';

import './Login.css';

export const Login = () => {

    const navigate = useNavigate();
    const { saveUserInfo } = useContext(AuthContext);
    const [input, setInput] = useState({});
    const [error, setError] = useState({});

    const onLoginHandler = (ev) => {
        ev.preventDefault();

        const formData = new FormData(ev.target);
        const { username, password } = Object.fromEntries(formData);
        setInput(Object.fromEntries(formData));

        if (username === '' || password === '') {
            setError(
                state => ({
                    ...state,
                    emptyFields: true,
                    serverError: 'All fields are required!'
                }));
            return;
        }

        login(username, password)
            .then(data => {
                saveUserInfo(data);
                navigate('/');
            })
            .catch(err => {
                setError(state => ({
                    ...state,
                    serverError: err.message,
                    emptyFields: true
                }));
            });
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

    function onBlur(ev) {
        if (input[ev.target.name] === '') {
            setError(state => ({
                ...state,
                emptyFields: true
            }));
            setInput(state => ({
                ...state,
                [ev.target.name]: '',
            }));
        }
    }

    const onClose = () => {
        setError({ serverError: '' });
    };

    return (
        <section className="login">
            {error.serverError &&
                <Notify message={error.serverError} onClose={onClose} />
            }
            <div className="login-box">
                <h1>Login</h1>
                <form onSubmit={onLoginHandler}>
                    <div>
                        <label htmlFor='username'>Username</label>
                        <input type="text" name="username" id="username" placeholder="Username"
                            style={{ border: error.emptyFields && input.username === '' ? '2px solid red' : 'none' }}
                            value={input.username || ''}
                            onChange={onChange}
                            onFocus={onFocus}
                            onBlur={onBlur}
                        />
                    </div>
                    <div>
                        <label htmlFor='password'>Password</label>
                        <input type="password" name="password" id="password" placeholder="Password"
                            style={{ border: error.emptyFields && input.password === '' ? '2px solid red' : 'none' }}
                            value={input.password || ''}
                            onChange={onChange}
                            onFocus={onFocus}
                            onBlur={onBlur}
                        />
                    </div>
                    <input type="submit" value="Submit" />
                </form>
                <p>Not have an account? <Link to="/register">Register here</Link></p>
            </div>
        </section>
    );
}