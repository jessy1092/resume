
import React from 'react';

import styles from './index.css';

const SkillDetail = ({data}) => (
  <section className={styles.detailSection}>
    {data.map(skill => (
      <div key={skill.name}>
        <div className={styles.skillName}>{skill.name}</div>
        <div>{skill.level}</div>
        {skill.keywords.map(keyword => (
          <div key={keyword} className={styles.keyword}>
            {keyword}
          </div>
        ))}
      </div>
    ))}
  </section>
);

const SkillSection = ({data}) => (
  <section className={styles.section}>
    <div>
      <h2 className={styles.name}>技能</h2>
    </div>
    <div>
      <SkillDetail data={data}/>
    </div>
  </section>
);

export default SkillSection;
