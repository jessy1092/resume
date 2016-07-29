
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
    <div>
      <h2 className={styles.name}>經歷</h2>
    </div>
    <div>
      {data.length > 0 ?
        <WorkDetail key={data[0].company} {...data[0]}/> :
        ''
      }
    </div>
  </section>
);

export default WorkSection;
