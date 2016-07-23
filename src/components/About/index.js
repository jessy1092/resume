
import React from 'react';

import styles from './index.css';

const socialIcon = {
  github: 'fa fa-github fa-2x',
  linkedin: 'fa fa-linkedin fa-2x',
  twitter: 'fa fa-twitter fa-2x'
};

const ProfileSection = ({profiles = []}) => (
  <div className={styles.profileSection}>
    {profiles.map(profile => (
      <div>
        <a href={profile.url} target="_blank">
          {profile.username}
        </a> @ <i className={socialIcon[profile.network]}/>
      </div>
    ))}
  </div>
);

const About = ({data}) => (
  <div className={styles.section}>
    <div className={styles.name}>關於</div>
    <div>
      <div>關於</div>
      <ProfileSection {...data}/>
    </div>
  </div>
);

export default About;
