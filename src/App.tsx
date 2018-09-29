import * as React from 'react';
import * as ReactRedux from 'react-redux';
import store from './store/index';
import Router from './Router';

const { Provider } = ReactRedux;

const App = () => (
  <Provider store={store}>
    {Router}
  </Provider>
);

export default App;