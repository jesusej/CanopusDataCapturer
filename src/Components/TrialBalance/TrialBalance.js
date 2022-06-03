import React from 'react'
import TrialBalanceIterable from './TrialBalanceIterable'

function TrialBalance({data}) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th id="code">Cuenta</th>
            <th id='name'>Nombre</th>
            <th id='initial-balance-debtor'>Saldos iniciales deudor</th>
            <th id='initial-balance-creditor'>Saldos iniciales acreedor</th>
            <th id='charge'>Cargos</th>
            <th id='deposit'>Abonos</th>
            <th id='actual-balance-debtor'>Saldos actuales deudor</th>
            <th id='actual-balance-creditor'>Saldos actuales acreedor</th>
          </tr>
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