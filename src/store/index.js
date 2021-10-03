import { createStore } from 'redux';
import rootReducer from "./reducer";

export default function initialStore() {
  const store = createStore(rootReducer);

  return store;
}