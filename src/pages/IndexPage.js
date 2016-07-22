import React from 'react';

import {fetchResume} from '../actions';

import styles from './index.css';

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
      <section className={styles.section}>
        <div>'Hi!'</div>
      </section>
    );
  }
}

IndexPage.contextTypes = {
  store: React.PropTypes.object
};

export default IndexPage;
