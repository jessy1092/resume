import React from 'react';

import {fetchResume}    from '../actions';
import WorkSection      from '../components/WorkSection';
import ProjectSection   from '../components/ProjectSection';
import VolunteerSection from '../components/VolunteerSection';
import EducationSection from '../components/EducationSection';
import SkillSection     from '../components/SkillSection';
import Header           from '../components/Header';
import Divider          from '../components/Divider';
import About            from '../components/About';

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
      volunteer = [],
      education = [],
      skills = [],
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
        <Divider/>
        <VolunteerSection data={volunteer}/>
        <Divider/>
        <EducationSection data={education}/>
        <Divider/>
        <SkillSection data={skills}/>
      </section>
    );
  }
}

IndexPage.contextTypes = {
  store: React.PropTypes.object
};

export default IndexPage;
