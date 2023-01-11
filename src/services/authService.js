import { get, post } from './api.js';
import { setUserData, clearUserData } from './util.js';

const endpoints = {
    'register': '/users/register',
    'login': '/users/login',
    'logout': '/users/logout'
}

export async function register(username, email, password) {
    const result = await post(endpoints.register, { username, email, password });
    const userData = {
        _id: result._id,
        username: result.username,
        email: result.email,
        token: result.accessToken
    };
    setUserData(userData);
    return userData;
}

export async function login(email, password) {
    const result = await post(endpoints.login, { email, password });
    const userData = {
        _id: result._id,
        username: result.username,
        email: result.email,
        token: result.accessToken
    };
              
    setUserData(userData);
    return userData;
}

export async function logout() {
    get(endpoints.logout);
    clearUserData('userData');
}

