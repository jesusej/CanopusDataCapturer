import React from 'react'

function BalanceSheetIterative({data}) {
  //console.log(data)
  return (
    <tr>
      <td>{data.name}</td>
      <td>{data.sum.toFixed(2)}</td>
    </tr>
  )
}

export default BalanceSheetIterative