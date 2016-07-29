
import React from 'react';

import styles from './index.css';

const EducationDetail = ({
  studyType, institution, startDate, endDate, area
}) => (
  <div>
    <section className={styles.detailSection}>
      <div className={styles.studyType}>{studyType}</div>
      <div className={styles.institution}>{institution}</div>
    </section>
    <div>{`${startDate} ~ ${endDate}`}</div>
    <ul><li>{area}</li></ul>
  </div>
);

const EducationSection = ({data}) => (
  <section className={styles.section}>
    <div>
      <h2 className={styles.name}>學歷</h2>
    </div>
    <div>
      {data.length > 0 ?
        <EducationDetail {...data[1]}/> :
        ''
      }
    </div>
  </section>
);

export default EducationSection;
