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
    const { usernameValidator, emailValidator, passwordValidator } = useValidate(setError);

    const onRegisterHandler = (ev) => {
        ev.preventDefault();

        const formData = new FormData(ev.target);
        const { username, email, password, rePass } = Object.fromEntries(formData);

        if (password !== rePass) {
            setInput(state => ({
                ...state,
                password: '',
                rePass: '',
            }));
            setError(
                state => ({
                    ...state,
                    rePass: 'Passwords don\'t match'
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

    const validUsername = (ev) => usernameValidator(ev.target.value);
    const validEmail = (ev) => emailValidator(ev.target.value);
    const validPassword = (ev) => passwordValidator(ev.target.value);

    return (

        <section className="register">
            <div className="register-box">

                <h1>Register</h1>

                <form onSubmit={onRegisterHandler}>
                    <div>
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" id="username" placeholder="Username"
                            value={input.username || ''}
                            onChange={onChange}
                            onBlur={validUsername}
                            onFocus={onFocus}
                        // style={{ border: error.username ? '2px solid red' : 'none' }}
                        />
                        {error.username && <p className="error">Username must be 3 to 10 characters long</p>}
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" id="email" placeholder="Email"
                            value={input.email || ''}
                            onChange={onChange}
                            onBlur={validEmail}
                            onFocus={onFocus}
                        // style={{ border: error.email ? '2px solid red' : 'none' }}
                        />
                        {error.email && <p className="error">Enter a valid email</p>}
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" placeholder="Password"
                            value={input.password || ''}
                            onChange={onChange}
                            onBlur={validPassword}
                            onFocus={onFocus}
                        // style={{ border: error.password ? '2px solid red' : 'none' }}
                        />
                        {error.password && <p className="error">Password must be 3 to 10 characters long</p>}
                    </div>
                    <div>
                        <label htmlFor="rePass">Confirm Password</label>
                        <input type="password" name="rePass" id="rePass" placeholder="Confirm Password"
                            value={input.rePass || ''}
                            onChange={onChange}
                            onFocus={onFocus}
                        // style={{ border: error.passwords ? '2px solid red' : 'none' }}
                        />
                        {error.rePass && <p className="error">Passwords don't match</p>}
                    </div>
                    <input type="submit" value="Submit" />
                    <p>Already have an account? <Link to="/login">Login here</Link></p>
                </form>
            </div>

        </section>
    );
}