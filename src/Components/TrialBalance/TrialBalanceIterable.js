import React from 'react'

function TrialBalanceIterable({data}) {
  return (
    <tr>
      <td headers='code'>{data.code}</td>
      <td headers='name'>{data.name}</td>
      <td headers='initial-balance-debtor' colSpan={2}>{data.initialBalance.toFixed(2)}</td>
      <td headers='charge'>{data.charge.toFixed(2)}</td>
      <td headers='deposit'>{data.deposit.toFixed(2)}</td>
      <td headers='actual-balance-debtor' colSpan={2}>{data.actualBalance.toFixed(2)}</td>
    </tr>
  )
}

export default TrialBalanceIterable