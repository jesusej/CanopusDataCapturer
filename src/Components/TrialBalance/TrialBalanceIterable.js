import React from 'react'

function TrialBalanceIterable({data}) {
  return (
    <tr>
      <td headers='code'>{data.code}</td>
      <td headers='name'>{data.name}</td>
      <td headers='initial-balance-debtor' colSpan={2}>{data.initialBalance}</td>
      <td headers='charge'>{data.charge}</td>
      <td headers='deposit'>{data.deposit}</td>
      <td headers='actual-balance-debotr' colSpan={2}>{data.actualBalance}</td>
    </tr>
  )
}

export default TrialBalanceIterable