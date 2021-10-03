import './App.css';
import AddressList from './components/AddressList';
import AddNewItem from './components/AddNewItem';
import { Provider } from 'react-redux';
import store from './store/index';

function App() {
  return (
    <Provider store={store()}>
      <div className="App">
        <h1>Address list</h1>
        <AddNewItem/>
        <AddressList/>
      </div>
    </Provider>
  );
}

export default App;
