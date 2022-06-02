import React from 'react'

function IncomeStamentIterable({data}) {
  if(data.subAccounts.length > 0){
    return(
    <>
      <tr>
        <td style={{background: "#FFFFFF"}} headers='description'> {data.name}</td>
      </tr>
      {data.subAccounts.map((dataIterable) => {
        return(
          <tr>
            <td style={{background: "#FFFFFF"}} headers='description'>{dataIterable.name}</td> 
            <td style={{background: "#FFFFFF"}} headers='period'>{dataIterable.periodSum.toFixed(2)}</td>
            <td style={{background: "#FFFFFF"}} headers='period-percentage'>{dataIterable.periodPercentage.toFixed(2)}</td>
            <td style={{background: "#FFFFFF"}} headers='accumulated'>{dataIterable.accumulatedSum.toFixed(2)}</td>
            <td style={{background: "#FFFFFF"}} headers='accumulated-percentage'>{dataIterable.accumulatedPercentage.toFixed(2)}</td>
          </tr>
        )
      })}
      <tr>
        <td style={{background: "#FFFFFF"}} headers='description'>Total {data.name}</td> 
        <td style={{background: "#FFFFFF"}} headers='period'>{data.periodTotal.toFixed(2)}</td>
        <td style={{background: "#FFFFFF"}} headers='period-percentage'>{data.periodPercentage.toFixed(2)}</td>
        <td style={{background: "#FFFFFF"}} headers='accumulated'>{data.accumulatedTotal.toFixed(2)}</td>
        <td style={{background: "#FFFFFF"}} headers='accumulated-percentage'>{data.accumulatedPercentage.toFixed(2)}</td>
      </tr>
      <br />
    </>
    )
  }

  return (
    <>
      <tr>
        <td style={{background: "#FFFFFF"}} headers='description'>{data.name}</td> 
        <td style={{background: "#FFFFFF"}} headers='period'>{data.periodTotal.toFixed(2)}</td>
        <td style={{background: "#FFFFFF"}} headers='period-percentage'>{data.periodPercentage.toFixed(2)}</td>
        <td style={{background: "#FFFFFF"}} headers='accumulated'>{data.accumulatedTotal.toFixed(2)}</td>
        <td style={{background: "#FFFFFF"}} headers='accumulated-percentage'>{data.accumulatedPercentage.toFixed(2)}</td>
      </tr>
    </>
  )
}

export default IncomeStamentIterable