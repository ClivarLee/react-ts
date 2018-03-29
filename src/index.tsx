import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as ReactRedux from 'react-redux';
import store from './store/index';
import Router from './Router';
import registerServiceWorker from './registerServiceWorker';

const { Provider } = ReactRedux;

ReactDOM.render(
  <Provider store={store}>
    {Router}
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
