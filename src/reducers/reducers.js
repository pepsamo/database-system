const initalState = {
    users: [],
    isFetching: false,
    searchResult: ''
};

export const rootReducer = (state = initalState, action = {}) => {
    switch(action.type) {
        case 'LOAD_USERS_START':
            return {
                ...state,
                isFetching: true
            };
        case 'LOAD_USERS_SUCCESS':
            return {
                ...state,
                isFetching: false,
                users: [...action.payload]
            };
        case 'LOAD_USERS_FAIL':
            return {
                ...state,
                isFetching: false,
                error: 'It was an error'
                };    
        case 'SEARCH_USER':
            return {
                ...state,
                searchResult: action.payload
            };    
        default:
            return state;
    }
};