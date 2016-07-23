import React from 'react';

import {fetchResume} from '../actions';
import WorkSection from '../components/WorkSection';
import ProjectSection from '../components/ProjectSection';


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

    let {
      work = [],
      projects = []
    } = store.getState().resume;

    return (
      <section className={styles.section}>
        <WorkSection data={work}/>
        <ProjectSection data={projects}/>
      </section>
    );
  }
}

IndexPage.contextTypes = {
  store: React.PropTypes.object
};

export default IndexPage;
