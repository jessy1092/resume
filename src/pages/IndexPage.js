import React from 'react';

import {fetchResume} from '../actions';

class IndexPage extends React.Component {

  componentDidMount() {
    const {store} = this.context;
    this.unsubscribe = store.subscribe(() =>
      this.forceUpdate()
    );
    store.dispatch(fetchResume());
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    let {store} = this.context;

    console.log(store.getState());

    return (
      <div>
        <div>'Hi!'</div>
      </div>
    );
  }
}

IndexPage.contextTypes = {
  store: React.PropTypes.object
};

export default IndexPage;
