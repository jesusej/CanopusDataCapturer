import React from 'react'
import TrialBalanceIterable from './TrialBalanceIterable'
import Table from 'react-bootstrap/Table'

function TrialBalance({data}) {
  return (
    <div className='content'>
      <table class= "table" stripped size="mid">
        <thead>
          <th style={{width:"12%"}} id="code">Cuenta</th>
          <th style={{width:"5%"}} id='name'>Nombre</th>
          <th style={{width:"5%"}} id='initial-balance-debtor'>Saldos iniciales deudor</th>
          <th style={{width:"5%"}} id='initial-balance-creditor'>Saldos iniciales acreedor</th>
          <th style={{width:"5%"}} id='charge'>Cargos</th>
          <th style={{width:"5%"}} id='deposit'>Abonos</th>
          <th style={{width:"5%"}} id='actual-balance-debtor'>Saldos actuales deudor</th>
          <th id='actual-balance-creditor'>Saldos actuales acreedor</th>
        </thead>
        <tbody>
          {data.map((account) => {
            return(<TrialBalanceIterable data={account} /> )
          })}
          {/*<tr>
            <td></td>
            <td headers='name'>Sumas iguales:</td>
            <td headers='initial-balance-debtor'>{data.sums.initialBalanceSums.debtor}</td>
            <td headers='initial-balance-creditor'>{data.sums.initialBalanceSums.creditor}</td>
            <td headers='charge'>{data.sums.charge}</td>
            <td headers='deposit'>{data.sums.deposit}</td>
            <td headers='actual-balance-debtor'>{data.sums.actualBalanceSums.debtor}</td>
            <td headers='actual-balance-creditor'>{data.sums.actualBalanceSums.creditor}</td>
        </tr>*/}
        </tbody>
      </table>
    </div>
  )
}

export default TrialBalance