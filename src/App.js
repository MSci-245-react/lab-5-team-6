import {Provider} from 'react-redux';
import store from './app/store';
import RestaurantScreen from './components/RestaurantScreen';
import Counter from './features/counter/Counter';
import IncrementByAmount from './features/counter/IncrementByAmount';

export default function App() {
  return (
    <Provider store={store}>
      <IncrementByAmount />

    </Provider>
  );
}
