import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './containers/App';
import storeConfig from './store';

import styles from './assets/sass/bootstrap.scss';

const store = storeConfig.configureStore();

ReactDOM.render(
  <AppContainer>
    <App store={store} history={storeConfig.history} />
  </AppContainer>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./containers/App', () => {
    const NextRoot = require('./containers/App');
    render(
      <AppContainer>
        <NextRoot store={store} history={storeConfig.history} />
      </AppContainer>,
      document.getElementById('root')
    );
  });
}