import React from 'react'
import TrialBalanceIterable from './TrialBalanceIterable'

function TrialBalance({data}) {
  return (
    <div className='content'>
      <table class= "table" style={{width:"1500px"}}>
        <thead>
          <th scope="col"  id="code">Cuenta</th>
          <th scope="col"  id='name'>Nombre</th>
          <th scope="col"  id='initial-balance-debtor'>Saldos iniciales deudor</th>
          <th scope="col"  id='initial-balance-creditor'>Saldos iniciales acreedor</th>
          <th scope="col"  id='charge'>Cargos</th>
          <th scope="col"  id='deposit'>Abonos</th>
          <th scope="col"  id='actual-balance-debtor'>Saldos actuales deudor</th>
          <th scope="col"  id='actual-balance-creditor'>Saldos actuales acreedor</th>
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