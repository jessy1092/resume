
import React from 'react';

import styles from './index.css';

const WorkDetail = ({
  company, position, startDate, endDate, highlights
}) => (
  <div>
    <section className={styles.detailSection}>
      <div className={styles.position}>{position}</div>
      <div className={styles.company}>{company}</div>
    </section>
    <div>{`${startDate} ~ ${endDate}`}</div>
    <ul>
      {highlights.map((highlight, i) => <li key={i}>{highlight}</li>)}
    </ul>
  </div>
);

const WorkSection = ({data}) => (
  <section className={styles.section}>
    <div className={styles.name}>工作經歷</div>
    <div className={styles.detail}>
      {data.map(work => <WorkDetail key={work.company} {...work}/>)}
    </div>
  </section>
);

export default WorkSection;
