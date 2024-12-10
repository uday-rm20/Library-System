
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import bookReducer from './reducer';

const store = createStore(bookReducer);

function App() {
  return (
    <Provider store={store}>
    </Provider>
  );
}

export default store;
