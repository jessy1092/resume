
import React from 'react';

import styles from './index.css';

const socialIcon = {
  github: 'fa fa-github',
  linkedin: 'fa fa-linkedin',
  twitter: 'fa fa-twitter'
};

const ProfileSection = ({profiles = []}) => (
  <div className={styles.profileSection}>
    {profiles.map(profile => (
      <div key={profile.network}>
        <a href={profile.url} target="_blank">
          {profile.username}
        </a> @ <i className={socialIcon[profile.network]}/>
      </div>
    ))}
    <div>
      <a href="mailto:jessy1092@gmail.com">
        jessy1092
      </a> @ gmail.com
    </div>
  </div>
);

const About = ({data}) => (
  <section className={styles.section}>
    <div>
      <h2 className={styles.name}>關於</h2>
    </div>
    <div>
      <div className={styles.summary}>{data.summary}</div>
      <ProfileSection {...data}/>
    </div>
  </section>
);

export default About;
