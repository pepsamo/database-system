export const retrieveUsers = (data) => {
    return {
        type: 'LOAD_USERS_SUCCESS',
        payload: data
    }
};

export const findUser = (text) => {
    return {
        type: 'SEARCH_USER',
        payload: text
    }
};