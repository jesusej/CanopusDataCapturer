import React from 'react'

function IncomeStamentIterable(data) {
  /*if(data.data.subAccounts.length > 0){
    return(<div>
      <span>{ data.data.name}</span>
      <div>
        {data.data.subAccounts.map((dataIterable) => {
          return(<div>
            {dataIterable.name + " " + dataIterable.periodSum.toFixed(2) + " " + dataIterable.periodPercentage.toFixed(2) + " " + dataIterable.accumulatedSum.toFixed(2) + " " + dataIterable.accumulatedPercentage.toFixed(2)}
          </div>)
        })}
      </div>
    </div>)
  }*/

  return (
    <div>
      {data.data.name + " " + data.data.periodTotal.toFixed(2) + " " + data.data.periodPercentage.toFixed(2) + " " + data.data.accumulatedTotal.toFixed(2) + " " + data.data.accumulatedPercentage.toFixed(2)}
      <br></br>
    </div>
  )
}

export default IncomeStamentIterable