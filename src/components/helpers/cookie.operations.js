export const fetchUserFromCookie = () => {
    return JSON.parse(localStorage.getItem('user'));
}

export const setCookie = (key, data) => {
    localStorage.setItem(key, data );
    //TODO add error handler
}