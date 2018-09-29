import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const MOUNT_NODE = document.getElementById('root');
let render = (Application: any) => {
  ReactDOM.render(
    <Application />,
    MOUNT_NODE as HTMLElement
  );
};

if (process.env.NODE_ENV === 'development') {
  const { AppContainer } = require('react-hot-loader');
  render = (Application: any) => {
    ReactDOM.render(
      <AppContainer warnings={false}>
        <Application />
      </AppContainer>,
      MOUNT_NODE
    );
  };
}
render(App);
if ((module as any).hot) {
  (module as any).hot.accept('./App', () => {
    render(require('./App').default());
  });
}
registerServiceWorker();
