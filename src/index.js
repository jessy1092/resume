
import React from 'react';

import IndexPage from './pages/IndexPage';
import Provider  from './utility/Provider';

import styles from './index.css';


let App = ({store}) => (
  <Provider store={store}>
    <IndexPage />
  </Provider>
);

export default App;
