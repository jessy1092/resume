
import React         from 'react';

import IndexPage      from './pages/IndexPage';
import Provider       from './utility/Provider';

// FIXME: Parse error on server side
// import './index.css';


let App = ({store}) => (
  <Provider store={store}>
    <IndexPage />
  </Provider>
);

export default App;
