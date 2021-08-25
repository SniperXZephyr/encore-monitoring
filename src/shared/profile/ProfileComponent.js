import React from 'react'
import styles from './Profile.module.css'
import profilePhoto from '../../assets/imgs/profile.png'
import chev from '../../assets/icons/Chevron-Right.png'
import hamburgerMenu from '../../assets/icons/Hamburger-Menu.png'

function ProfileComponent() {
  return (
    <>
      <div className="row mb-4 pb-1">
        <div className="col-12">
          <img src={hamburgerMenu} className="float-end" />
        </div>
      </div>
      <div className="mb-3 pb-3 px-3 d-flex position-relative">
        <div className="position-relative">
          <span className={styles.vaiNotification}>2</span>
          <span className={styles.vaiStatus}></span>
          <img
            src={profilePhoto}
            className={styles.vaiProfilePhoto}
            alt="ProfilePhoto"
          />
        </div>
        <div className="position-relative" style={{ marginLeft: '15px' }}>
          <span className={styles.vaiUsername}>Ronald Madrid</span>
          <br />
          <span className={styles.vaiUserTitle}>.NET Developer</span>
        </div>
        <img src={chev} className={styles.vaiChevUp} />
        <img src={chev} className={styles.vaiChevDown} />
      </div>
    </>
  )
}

export default ProfileComponent
