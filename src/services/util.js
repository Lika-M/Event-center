export const getUserData = () => {
    return JSON.parse(localStorage.getItem('userData'));
}

export const setUserData = (data) => {
    return localStorage.setItem('userData', JSON.stringify(data));
}

export const clearUserData = () => {
    localStorage.removeItem('userData');
}