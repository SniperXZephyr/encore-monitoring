import React from 'react'
import styles from './Table.module.css'
import chev from '../../../assets/icons/Chevron-Right.png'
import filter from '../../../assets/icons/Filter.png'
import arrowUp from '../../../assets/icons/Arrow-Up.png'
import triangle from '../../../assets/icons/Triangle-Down.png'

function TableComponent() {
  return (
    <div>
      <table>
        <tr>
          <th className={styles.vaiThClient}>
            CLIENT <img src={filter} className="mx-2" />
          </th>
          <th className={styles.vaiThTitle}>
            TITLE <img src={filter} className="mx-2" />
          </th>
          <th className={styles.vaiThWorker}>
            WORKER <img src={filter} className="mx-2" />
          </th>
          <th className={styles.vaiThStarted}>
            STARTED <img src={filter} className="mx-2" />
            <img src={arrowUp} />
          </th>
          <th className={styles.vaiThEnded}>
            ENDED <img src={filter} className="mx-1" />
          </th>
          <th className={styles.vaiThDuration}>
            DURATION <img src={filter} className="mx-2" />
          </th>
          <th className={styles.vaiThStatus}>
            STATUS <img src={filter} className="mx-2" />
          </th>
        </tr>
        <tr>
          <td>ITV</td>
          <td>ITV - Substitle QoS - V..</td>
          <td>ITV-PRD-LD-04</td>
          <td>18/08/2021 08:44</td>
          <td>18/08/2021 08:50</td>
          <td>0:36</td>
          <td>
            <div className={styles.vaiRunningStatus}>Running</div>
          </td>
        </tr>
        <tr>
          <td>ITV</td>
          <td>CRR - Buyer Approval</td>
          <td>VAI-Mini-P005</td>
          <td>18/08/2021 08:44</td>
          <td>18/08/2021 08:50</td>
          <td>1:25</td>
          <td>
            <div className={styles.vaiSuccessStatus}>Success</div>
          </td>
        </tr>
        <tr>
          <td>SKY</td>
          <td>SKY - Vod Promo</td>
          <td>VAI-Mini-PO01</td>
          <td>18/08/2021 08:44</td>
          <td>18/08/2021 08:50</td>
          <td>3:21</td>
          <td>
            <div className={styles.vaiRunningStatus}>Running</div>
          </td>
        </tr>
        <tr>
          <td>ITV</td>
          <td>ITV - Product Catalo...</td>
          <td>ITV-PRD-LD-03</td>
          <td>18/08/2021 08:44</td>
          <td>18/08/2021 08:50</td>
          <td>0:43</td>
          <td>
            <div className={styles.vaiStoppedStatus}>Stopped</div>
          </td>
        </tr>
        <tr>
          <td>SKY</td>
          <td>SKY - DPL - Sky Spo..</td>
          <td>ITV-PRD-LD-02</td>
          <td>18/08/2021 08:44</td>
          <td>18/08/2021 08:50</td>
          <td>1:25</td>
          <td>
            <div className={styles.vaiSuccessStatus}>Success</div>
          </td>
        </tr>
        <tr>
          <td>SKY</td>
          <td>SKY - DPL - Sky Spo..</td>
          <td>WD013647</td>
          <td>18/08/2021 08:44</td>
          <td>18/08/2021 08:50</td>
          <td>2:35</td>
          <td>
            <div className={styles.vaiSuccessStatus}>Success</div>
          </td>
        </tr>
        <tr>
          <td>SKY</td>
          <td>SKY - BSS - Channel L..</td>
          <td>VAI-Mini-P010</td>
          <td>18/08/2021 08:44</td>
          <td>18/08/2021 08:50</td>
          <td>10:45</td>
          <td>
            <div className={styles.vaiRunningStatus}>Running</div>
          </td>
        </tr>
        <tr>
          <td>ITV</td>
          <td>CRR - Buyer Reminders</td>
          <td>VAI-Mini-PO16</td>
          <td>18/08/2021 08:44</td>
          <td>18/08/2021 08:50</td>
          <td>2:25</td>
          <td>
            <div className={styles.vaiFailedStatus}>Failed</div>
          </td>
        </tr>
        <tr>
          <td>ITV</td>
          <td>ITV - Silvermouse Da..</td>
          <td>ITV-PRD-LD-03</td>
          <td>18/08/2021 08:44</td>
          <td>18/08/2021 08:50</td>
          <td>0:35</td>
          <td>
            <div className={styles.vaiStoppedStatus}>Stopped</div>
          </td>
        </tr>
        <tr>
          <td>ITV</td>
          <td>ITV - PRS Data Extract</td>
          <td>VAI-Mini-PO12</td>
          <td>18/08/2021 08:44</td>
          <td>18/08/2021 08:50</td>
          <td>0:54</td>
          <td>
            <div className={styles.vaiFailedStatus}>Failed</div>
          </td>
        </tr>
        <tr>
          <td>ITV</td>
          <td>ITV - Subtitle QoS - Verify</td>
          <td>ITV-PRD-LD-04</td>
          <td>18/08/2021 08:44</td>
          <td>18/08/2021 08:50</td>
          <td>18:43</td>
          <td>
            <div className={styles.vaiSuccessStatus}>Success</div>
          </td>
        </tr>
        <tr>
          <td>ITV</td>
          <td>ITV - Subtitle QoS - Verify</td>
          <td>ITV-PRD-LD-04</td>
          <td>18/08/2021 08:44</td>
          <td>18/08/2021 08:50</td>
          <td>18:43</td>
          <td>
            <div className={styles.vaiSuccessStatus}>Success</div>
          </td>
        </tr>
        <tr>
          <td>ITV</td>
          <td>ITV - Subtitle QoS - Verify</td>
          <td>ITV-PRD-LD-04</td>
          <td>18/08/2021 08:44</td>
          <td>18/08/2021 08:50</td>
          <td>18:43</td>
          <td>
            <div className={styles.vaiQueuedStatus}>Queued</div>
          </td>
        </tr>
        <tr>
          <td>ITV</td>
          <td>ITV - Subtitle QoS - Verify</td>
          <td>ITV-PRD-LD-04</td>
          <td>18/08/2021 08:44</td>
          <td>18/08/2021 08:50</td>
          <td>18:43</td>
          <td>
            <div className={styles.vaiQueuedStatus}>Queued</div>
          </td>
        </tr>
        <tr>
          <td>ITV</td>
          <td>ITV - Subtitle QoS - Verify</td>
          <td>ITV-PRD-LD-04</td>
          <td>18/08/2021 08:44</td>
          <td>18/08/2021 08:50</td>
          <td>18:43</td>
          <td>
            <div className={styles.vaiQueuedStatus}>Queued</div>
          </td>
        </tr>
      </table>
      <div className={styles.vaiTableFooter}>
        <div className="row">
          <div className="col-6">
            <label className={styles.vaiLabel}>Listing</label>
            <button className={styles.vaiListButton}>13 <img
                  src={triangle}
                  alt="Triangle-Icon"
                  style={{marginLeft: '3px', marginBottom: '2px'}}
                /></button>
            <label className={styles.vaiLabel}>
              entries, showing 1 to 13 of 342
            </label>
          </div>
          <div className="col-6">
            <div
              class="btn-group float-end"
              role="group"
              aria-label="Basic example"
            >
              <button type="button" class={styles.vaiPaginationBtn}>
                <img
                  src={chev}
                  alt="Paginate-Left"
                  className={styles.vaiChevLeftIcon}
                />
              </button>
              <button type="button" class={styles.vaiPaginationBtn}>
                1
              </button>
              <button type="button" class={styles.vaiPaginationBtn}>
                2
              </button>
              <button type="button" class={styles.vaiPaginationBtn}>
                3
              </button>
              <button type="button" class={styles.vaiPaginationBtn}>
                4
              </button>
              <button type="button" class={styles.vaiPaginationBtn}>
                5
              </button>
              <button type="button" class={styles.vaiPaginationBtn}>
                <img
                  src={chev}
                  alt="Paginate-Right"
                  className={styles.vaiChevRightIcon}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TableComponent
