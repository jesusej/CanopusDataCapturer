import React from 'react'

import IncomeStamentIterable from './IncomeStatementIterable'

function IncomeStatementSnippet({snippet, title}) {
  console.log(snippet);

  return (
    <>
      <tr>
        <td colSpan='5'>{title}</td>
      </tr>
        {snippet.dataSet && snippet.dataSet.map((dataIterable) => {
          return(<IncomeStamentIterable data={dataIterable}/>)
        })}
      <tr>
        <td headers='description'>Total {title}</td> 
        <td headers='period'>{snippet.periodTotal.toFixed(2)}</td>
        <td headers='period-percentage'>{snippet.periodPercentage.toFixed(2)}</td>
        <td headers='accumulated'>{snippet.accumulatedTotal.toFixed(2)}</td>
        <td headers='accumulated-percentage'>{snippet.accumulatedPercentage.toFixed(2)}</td>
      </tr>
      <br />
    </>
  )
}

export default IncomeStatementSnippet