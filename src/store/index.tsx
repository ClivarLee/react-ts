import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from '../reducers';
import { StoreState } from '../types/index';

const middlewares = applyMiddleware(reduxThunk);
let enhancers = [middlewares];
if (process.env.NODE_ENV !== 'production') {
  const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
  enhancers.push(devTools);
}
const store = createStore<StoreState>(reducers, compose(...enhancers));

export default store;