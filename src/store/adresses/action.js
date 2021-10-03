export const ADD_ADDRESS = 'ADD_ADDRESS';
export const EDIT_ADDRESS = 'EDIT_ADDRESS';

export const addAddress = data => ({
    type: ADD_ADDRESS,
    payload: data
  });

export const editAddress = data => ({
    type: EDIT_ADDRESS,
    payload: data
});