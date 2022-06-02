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
          {data.accounts.map((account) => {
            return(<TrialBalanceIterable data={account} /> )
          })}

        </tbody>
        <tr>
          <td></td>
          <td scope="row" headers='name'>Sumas iguales:</td>
          <td scope="row" headers='initial-balance-debtor'>{data.sums.initialBalanceSums.debtor}</td>
          <td scope="row" headers='initial-balance-creditor'>{data.sums.initialBalanceSums.creditor}</td>
          <td scope="row" headers='charge'>{data.sums.charge}</td>
          <td scope="row" headers='deposit'>{data.sums.deposit}</td>
          <td scope="row" headers='actual-balance-debtor'>{data.sums.actualBalanceSums.debtor}</td>
          <td scope="row" headers='actual-balance-creditor'>{data.sums.actualBalanceSums.creditor}</td>
        </tr>
      </table>
    </div>
  )
}

export default TrialBalance