
import React from 'react';

import styles from './index.css';

const VolunteerDetail = ({
  organization, position, startDate, endDate, highlights, website
}) => (
  <div>
    <section className={styles.detailSection}>
      <div className={styles.position}>{position}</div>
      <div className={styles.organization}>
        <a href={website} target="_blank">{organization}</a>  
      </div>
    </section>
    <div>{`${startDate} ~ ${endDate}`}</div>
    <ul>
      {highlights.map((highlight, i) => {
        if (i < 3) {
          return (<li key={i}>{highlight}</li>);
        }
      })}
    </ul>
  </div>
);

const VolunteerSection = ({data}) => (
  <section className={styles.section}>
    <div>
      <h2 className={styles.name}>社群</h2>
    </div>
    <div>
      {data.map(volunteer => (
        <VolunteerDetail key={volunteer.organization} {...volunteer}/>
      ))}
    </div>
  </section>
);

export default VolunteerSection;
