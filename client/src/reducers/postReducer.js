
export const postInitialState = {
    isLoading: false,
    posts: []
};

export const postReducer = (state, action) => {
    switch (action.type) {
        case "GET":
            console.log(action.payload)
            return {...state, 
                posts: action.payload,
                isLoading: false
            };
            case "ADD":
            console.log([...state.posts, ...action.payload])
            return {
                ...state,
                posts: [...state.posts, ...action.payload],
                isLoading: false
            }
        case "LOADING":
            return {
                ...state,
                isLoading: true
            }
        default:
            return state;
    }
}