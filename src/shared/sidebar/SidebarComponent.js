import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Sidebar.module.css'
import Logo from '../../assets/icons/VirtualAiLogo.png'
import monitoring from '../../assets/icons/Monitoring.png'
import analytics from '../../assets/icons/Analytics.png'
import workers from '../../assets/icons/Workers.png'
import credentials from '../../assets/icons/Credentials.png'
import process from '../../assets/icons/Process.png'
import settings from '../../assets/icons/Settings.png'
import search from '../../assets/icons/Search.png'
import ProfileComponent from '../profile/ProfileComponent'

function SidebarComponent() {
  return (
    <div className="position-relative vh-100">
      <div className={styles.vaiSidebarHeader}>
        <img src={Logo} alt="VirtualAiLogo" />
      </div>
      <div className={styles.vaiSidebarList}>
        <NavLink
          to="/"
          className={`${styles.vaiLink} nav-item nav-link px-0 py-2`}
          activeClassName={styles.vaiActiveLink}
        >
          <img src={monitoring} alt="MonitoringIcon" />
          <span className="mx-3">Monitoring</span>
        </NavLink>
        <NavLink
          to="/"
          className={`${styles.vaiLink} nav-item nav-link px-0 py-2 position-relative`}
        >
          <img src={analytics} alt="AnalyticsIcon" />
          <span className={`${styles.vaiChevRight} mx-3`}>Analytics</span>
        </NavLink>
        <NavLink
          to="/"
          className={`${styles.vaiLink} nav-item nav-link px-0 py-2 position-relative`}
        >
          <img src={workers} alt="WorkersIcon" />
          <span className={`${styles.vaiChevRight} mx-3`}>Workers</span>
        </NavLink>
        <NavLink
          to="/"
          className={`${styles.vaiLink} nav-item nav-link px-0 py-2 position-relative`}
        >
          <img src={credentials} alt="CredentialsIcon" />
          <span className={`${styles.vaiChevRight} mx-3`}>Credentials</span>
        </NavLink>
        <NavLink
          to="/"
          className={`${styles.vaiLink} nav-item nav-link px-0 py-2 position-relative`}
        >
          <img src={process} alt="ProcessIcon" />
          <span className={`${styles.vaiChevRight} mx-3`}>Process</span>
        </NavLink>
        <NavLink
          to="/"
          className={`${styles.vaiLink} nav-item nav-link px-0 py-2 position-relative`}
        >
          <img src={settings} alt="SettingsIcon" />
          <span className={`${styles.vaiChevRight} mx-3`}>Settings</span>
        </NavLink>
        <div class="input-group pt-3">
          <div class={`${styles.vaiSearchIcon} input-group-prepend`}>
              <img src={search} alt="SearchIcon" />
          </div>
          <input
            type="text"
            style={{textIndent: '5px'}}
            class={`${styles.vaiSidebarSearch} form-control`}
            placeholder="Search"
            aria-label="Search"
            aria-describedby="search-addon"
          />
        </div>
      </div>
      <div className="position-absolute bottom-0">
          <ProfileComponent />
      </div>
    </div>
  )
}

export default SidebarComponent
