import React from 'react';

import {fetchResume}  from '../actions';
import WorkSection    from '../components/WorkSection';
import ProjectSection from '../components/ProjectSection';
import Header         from '../components/Header';
import Divider        from '../components/Divider';
import About          from '../components/About';


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
      projects = [],
      basics = {}
    } = store.getState().resume;

    return (
      <section className={styles.section}>
        <Header/>
        <Divider/>
        <About data={basics}/>
        <Divider/>
        <WorkSection data={work}/>
        <Divider/>
        <ProjectSection data={projects}/>
      </section>
    );
  }
}

IndexPage.contextTypes = {
  store: React.PropTypes.object
};

export default IndexPage;
