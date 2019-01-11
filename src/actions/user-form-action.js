export const USER_FORM_CHANGE = 'USER_FORM_CHANGE';
export const updateUserForm = payload => dispatch => {
  dispatch({
    type: USER_FORM_CHANGE,
    payload
  })
};
