
import React from 'react';

import styles from './index.css';

const VolunteerDetail = ({
  organization, position, startDate, endDate, highlights
}) => (
  <div>
    <section className={styles.detailSection}>
      <div className={styles.position}>{position}</div>
      <div className={styles.organization}>{organization}</div>
    </section>
    <div>{`${startDate} ~ ${endDate}`}</div>
    <ul>
      {highlights.map((highlight, i) => <li key={i}>{highlight}</li>)}
    </ul>
  </div>
);

const VolunteerSection = ({data}) => (
  <section className={styles.section}>
    <div className={styles.name}>社群</div>
    <div>
      {data.map(volunteer => <VolunteerDetail {...volunteer}/>)}
    </div>
  </section>
);

export default VolunteerSection;
