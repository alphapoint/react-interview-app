export default (state = [], action) => {
    switch (action.type) {
        case 'USER_FORM_CHANGE':
            return action.payload;
        default:
            return state
    }
}
