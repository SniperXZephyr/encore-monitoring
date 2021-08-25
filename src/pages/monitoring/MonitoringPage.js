import React from 'react'
import HeaderComponent from '../../components/monitoring/header/HeaderComponent'
import TableComponent from '../../components/monitoring/table/TableComponent'

function MonitoringPage() {
  return (
    <>
      <HeaderComponent />
      <hr style={{border: '1px inset #B1B1B1'}} />
      <TableComponent />
    </>
  )
}

export default MonitoringPage
