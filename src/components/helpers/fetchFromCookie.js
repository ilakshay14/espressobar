export const fetchUserFromCookie = () => {
    return JSON.parse(localStorage.getItem('user'));
}