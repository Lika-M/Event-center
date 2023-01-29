import { getUserData } from "./util.js";

const host = 'https://parseapi.back4app.com';

async function request(url, options) {

    try {
        const response = await fetch(host + url, options);

        if (response.ok === false) {
            const error = await response.json();
            throw new Error('Error ' + error.code + ': ' + error.error);
        }
        return response.json();

    } catch (err) {
        throw err;
    }
}

function createOptions(method = 'GET', data) {
    const options = {
        method,
        headers: {
            'X-Parse-Application-Id': 'uheuiPwIqbr9VJKhTpZ3n0zFewcfOo1gse0CF2Jk',
            'X-Parse-REST-API-Key': 'SxZ3MMU34aDYw01EMBH4XPByNi5jHyDDMUx0O4M0'
        }
    };

    const userData = getUserData();
    
    if (userData && userData.token) {
        options.headers['X-Parse-Session-Token'] = userData.token;
    }

    if (data) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data);
    }

    return options;
}

async function get(url) {
    return request(url, createOptions());
}
async function post(url, data) {
    return request(url, createOptions('POST', data));
}
async function put(url, data) {
    return request(url, createOptions('PUT', data));
}
async function del(url) {
    return request(url, createOptions('DELETE'));
}

export {
    get,
    post,
    put,
    del as delete
}