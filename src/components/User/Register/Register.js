import { Link, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';

import { AuthContext } from '../../../contexts/AuthContext.js';
import { register } from '../../../services/authService.js';
import { useValidate } from '../useValidate.js';
import { Notify } from '../../common/Notify/Notify.js';

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
        setInput(Object.fromEntries(formData));

        if (Object.values(Object.fromEntries(formData)).some(x => x === '')) {
            setError(
                state => ({
                    ...state,
                    emptyFields: true,
                    serverError: 'All fields are required!'
                }));
            return;
        }

        if (password !== rePass) {
            setInput(state => ({
                ...state,
                password: '',
                rePass: '',
            }));
            setError(
                state => ({
                    ...state,
                    rePass: 'Passwords don\'t match',
                    emptyFields: true,
                }));
            return;
        }

        register(username, email, password)
            .then(data => {
                saveUserInfo(data);
                navigate('/');
            })
            .catch(err => {
                setError(state => ({
                    ...state,
                    emptyFields: true,
                    serverError: err.message
                }));
                setInput({});
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
            [ev.target.name]: '',
            emptyFields: false
        }));
    }

    const onClose = () => {
        setError({ serverError: '' });
    };

    const validUsername = (ev) => usernameValidator(ev.target.value);
    const validEmail = (ev) => emailValidator(ev.target.value);
    const validPassword = (ev) => passwordValidator(ev.target.value);
    const redBorder = '2px solid  rgb(217, 90, 90)';
    const blueBorder = '2px solid #042553';
    const redStyle = 'rgb(217, 90, 90)';
    const blueStyle = '#042553';

    return (

        <section className="register">
            <div className="register-box">
            {error.serverError &&
                <Notify message={error.serverError} onClose={onClose} />
            }
                <h3>Register</h3>

                <form onSubmit={onRegisterHandler}>
                    <div>
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" id="username" 
                            style={{ border: error.emptyFields && input.username === '' ? redBorder : blueBorder }}
                            value={input.username || ''}
                            onChange={onChange}
                            onBlur={validUsername}
                            onFocus={onFocus}
                        />
                        <p className="error" style={{ color: error.username ? redStyle : blueStyle }}>Username must be 3 to 10 characters long</p>
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" id="email"
                            style={{ border: error.emptyFields && input.email === '' ? redBorder : blueBorder }}
                            value={input.email || ''}
                            onChange={onChange}
                            onBlur={validEmail}
                            onFocus={onFocus}
                        />
                        <p className="error" style={{ color: error.email ? redStyle : blueStyle }}>Enter a valid email</p>
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" 
                            style={{ border: error.emptyFields && input.password === '' ? redBorder : blueBorder }}
                            value={input.password || ''}
                            onChange={onChange}
                            onBlur={validPassword}
                            onFocus={onFocus}
                        />
                        <p className="error" style={{ color: error.password ? redStyle : blueStyle }}>Password must be 3 to 10 characters long</p>
                    </div>
                    <div>
                        <label htmlFor="rePass">Confirm Password</label>
                        <input type="password" name="rePass" id="rePass" 
                            style={{ border: error.emptyFields && input.rePass === '' ? redBorder : blueBorder }}
                            value={input.rePass || ''}
                            onChange={onChange}
                            onFocus={onFocus}
                        />
                        <p className="error" style={{ color: error.rePass ? redStyle : blueStyle }}>Passwords don't match</p>
                    </div>
                    <input type="submit" value="REGISTER" />
                    <p className="redirect">Already have an account? <Link to="/login">Login here</Link></p>
                </form>
            </div>

        </section>
    );
}