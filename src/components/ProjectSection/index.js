
import React from 'react';

import styles from './index.css';

const ProjectDetail = ({
  name, category, website, startDate, endDate, highlights, summary
}) => (
  <div>
    <section className={styles.detailSection}>
      <div><a className={styles.projectName} href={website}>{name}</a></div>
      <div className={styles.category}>{category}</div>
    </section>
    <div>{`${startDate} ~ ${endDate}`}</div>
    <ul>
      <li>{`簡介： ${summary}`}</li>
      <li>{`貢獻： ${highlights}`}</li>
    </ul>
  </div>
);

const ProjectSection = ({data}) => (
  <section className={styles.section}>
    <div>
      <h2 className={styles.name}>專案</h2>
    </div>
    <div>
      {data.map((project, i) => <ProjectDetail key={project.name} {...project}/>)}
    </div>
  </section>
);

export default ProjectSection;
