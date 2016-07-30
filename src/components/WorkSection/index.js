
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
    {highlights.map((highlight, i) => {
      if (i <= 3) {
        return (
          <section className={styles.detailContentSection} key={i}>
            <div>
              <ul>
                <li key={i}>{highlight.content}</li>
              </ul>
            </div>
            <div>
              {highlight.label.map((label, i) => (
                <div className={styles.keyword} key={i}>{label}</div>
              ))}
            </div>
          </section>
        );
      }
    })}
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
