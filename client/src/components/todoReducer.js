export const initialState = [1, 2, 3]; 

export const reducer = (state, action) => {
    switch (action.type) {
        case "add":
            return [...state, action.value];
        case "remove":
            return state.filter((_, index) => index !== action.value);
        default:
            return state;
    }
}