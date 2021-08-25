import React from 'react'
import { Route } from 'react-router'
import MonitoringPage from '../pages/monitoring/MonitoringPage'
import SidebarComponent from '../shared/sidebar/SidebarComponent'
import styles from './Views.module.css'

function ViewsComponent() {
    return (
        <div className={styles.views}>
            <div className={styles.sidebar}>
                <SidebarComponent />
            </div>
            <div className={styles.content}>
                <Route path="/" component={MonitoringPage} exact />
            </div>
        </div>
    )
}

export default ViewsComponent
