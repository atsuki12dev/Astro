import React from 'react';
import style from './Profile.module.scss';

import Section1 from './components/Section1';
import Section2 from './components/Section2';

function Profile() {
  return (
    <div className={style.root}>
      <Section1 />
      <Section2 />
    </div>
  )
}
export default Profile;