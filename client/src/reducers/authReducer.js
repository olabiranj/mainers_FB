
export let authInitialState = {
    token: localStorage.getItem('token'),
    user: null,
    isLoggedin: false
};

export const authReducer = (state, action) => {
    switch (action.type) {
        case "register_success":
        case "login_success":
            localStorage.setItem('token', action.payload.token);
            authInitialState = {
                token: localStorage.getItem('token'),
                user: action.payload.user,
                isLoggedin: true
            };
            return state;
        case "register_fail":
        case "login_fail":
        case "logout_success":
            localStorage.removeItem('token');
            authInitialState = {
                token: null,
                user: null,
                isLoggedin: false
            };
            return state
        default:
            return state;

    }
        
}