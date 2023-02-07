import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { login } from '../../../services/authService.js'
import { AuthContext } from '../../../contexts/AuthContext.js';

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

        if (username === '' || password === '') {
            setError(
                state => ({
                    ...state,
                    emptyFields: 'All fields are required!'
                }));
            //TODO add notification
            return
        }

        login(username, password)
            .then(data => {
                saveUserInfo(data);
                navigate('/');
                // return data;
            })
            .catch(err => {
                alert(err.message)
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
        //TODO error notification
    }

    function onChange(ev) {
        setInput(state => ({
            ...state,
            [ev.target.name]: ev.target.value
        }));
    }


    return (
        <section className="login">
            <div className="login-box">
                <h1>Login</h1>
                <form onSubmit={onLoginHandler}>
                    <label htmlFor='username'>Username</label>
                    <input type="text" name="username" id="username" placeholder="Username"
                        value={input.username || ''}
                        onChange={onChange}
                    />
                    <label htmlFor='password'>Password</label>
                    <input type="password" name="password" id="password" placeholder="Password"
                        value={input.password || ''}
                        onChange={onChange}
                    />
                    <input type="submit" value="Submit" />
                </form>
                <p>Not have an account? <Link to="/register">Register here</Link></p>
            </div>
        </section>
    );
}