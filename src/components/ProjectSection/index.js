
import React from 'react';

import styles from './index.css';

const ProjectDetail = ({
  name, category, website, startDate, endDate, highlights
}) => (
  <div>
    <section className={styles.detailSection}>
      <a className={styles.projectName} href={website}>{name}</a>
      <div className={styles.category}>{category}</div>
    </section>
    <div>{`${startDate} ~ ${endDate}`}</div>
    <ul><li>{highlights}</li></ul>
  </div>
);

const ProjectSection = ({data}) => (
  <section className={styles.section}>
    <div className={styles.name}>專案</div>
    <div>
      {data.map(project => <ProjectDetail key={project.name} {...project}/>)}
    </div>
  </section>
);

export default ProjectSection;
