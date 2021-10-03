import { ADD_ADDRESS, EDIT_ADDRESS } from "./action";

let initialState = [
      { id: 1, name: 'John Doe', address: '4343 Cook Hill Road, 13680 New York'},
      { id: 2, name: 'Jan Kowalski', address: 'ul. Długa 100, 30-000 Kraków'}
];

export default function addressReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ADDRESS:
      return [
          ...state,
          {...action.payload, id: state.length + 1 }
        ];
    case EDIT_ADDRESS:
        const { name, address, id } = action.payload;
        const index = state.findIndex(item => item.id === id);
        if (index > -1) {
            const head = state.slice(0, index);
            const tail = state.slice(index+1);
            return [...head, {name, address, id}, ...tail]
        }

        return state;
    default:
      return state;
  }
};