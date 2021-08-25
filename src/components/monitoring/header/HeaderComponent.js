import React from 'react'
import styles from './Header.module.css'
import search from '../../../assets/icons/Header-Search.png'
import triangle from '../../../assets/icons/Triangle-Down.png'
import refresh from '../../../assets/icons/Process-White.png'

function HeaderComponent() {
  return (
    <div className={`${styles.vaiHeader} position-relative overflow-auto`}>
      <div>
        <b className={styles.vaiHeaderText}>Monitoring</b>
      </div>
      <div className="d-flex position-absolute end-0">
        <div class="input-group">
          <div class={`${styles.vaiSearchIcon} input-group-prepend`}>
            <img src={search} alt="SearchIcon" />
          </div>
          <input
            type="text"
            style={{ textIndent: '5px' }}
            class={styles.vaiHeaderSearch}
            placeholder="Search"
            aria-label="Search"
            aria-describedby="search-addon"
          />
        </div>
        <div className="text-nowrap">
          <label className={styles.vaiLabel}>Refresh Rate:</label>
          <div class="btn-group" role="group" aria-label="Basic example">
            <button className={styles.vaiMinBtn}>
              15 Minutes <img src={triangle} className="mx-1 mb-1" />
            </button>
            <button type="button" class={styles.vaiBtnRefresh}>
              <img
                src={refresh}
                alt="Refresh-Icon"
                className={styles.vaiRefreshIcon}
              />
            </button>
          </div>
        </div>
        <div className="text-nowrap">
          <label className={styles.vaiLabel}>Views:</label>
          <button className={styles.vaiBtnDefault}>
            Default <img src={triangle} className="mx-1 mb-1" />
          </button>
        </div>
        <div className="text-nowrap">
          <button className={styles.vaiBtnSaveView}>Save View</button>
        </div>
      </div>
    </div>
  )
}

export default HeaderComponent
