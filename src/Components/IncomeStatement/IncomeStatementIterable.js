import React from 'react'

function IncomeStamentIterable({data}) {
  if(data.subAccounts.length > 0){
    return(
    <>
      <tr>
        <td headers='description'> {data.name}</td>
      </tr>
      {data.subAccounts.map((dataIterable) => {
        return(
          <tr>
            <td headers='description'>{dataIterable.name}</td> 
            <td headers='period'>{dataIterable.periodSum.toFixed(2)}</td>
            <td headers='period-percentage'>{dataIterable.periodPercentage.toFixed(2)}</td>
            <td headers='accumulated'>{dataIterable.accumulatedSum.toFixed(2)}</td>
            <td headers='accumulated-percentage'>{dataIterable.accumulatedPercentage.toFixed(2)}</td>
          </tr>
        )
      })}
      <tr>
        <td headers='description'>Total {data.name}</td> 
        <td headers='period'>{data.periodTotal.toFixed(2)}</td>
        <td headers='period-percentage'>{data.periodPercentage.toFixed(2)}</td>
        <td headers='accumulated'>{data.accumulatedTotal.toFixed(2)}</td>
        <td headers='accumulated-percentage'>{data.accumulatedPercentage.toFixed(2)}</td>
      </tr>
      <br />
    </>
    )
  }

  return (
    <>
      <tr>
        <td headers='description'>{data.name}</td> 
        <td headers='period'>{data.periodTotal.toFixed(2)}</td>
        <td headers='period-percentage'>{data.periodPercentage.toFixed(2)}</td>
        <td headers='accumulated'>{data.accumulatedTotal.toFixed(2)}</td>
        <td headers='accumulated-percentage'>{data.accumulatedPercentage.toFixed(2)}</td>
      </tr>
    </>
  )
}

export default IncomeStamentIterable