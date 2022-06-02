import React from 'react'

import IncomeStamentIterable from './IncomeStatementIterable'

function IncomeStatementSnippet({snippet, title}) {
  console.log(snippet);

  return (
    <>
      <tr>
        <td style={{background: "#FFFFFF"}} colSpan='5'>{title}</td>
      </tr>
        {snippet.dataSet && snippet.dataSet.map((dataIterable) => {
          return(<IncomeStamentIterable data={dataIterable}/>)
        })}
      <tr>
        <td style={{background: "#FFFFFF"}} headers='description'>Total {title}</td> 
        <td style={{background: "#FFFFFF"}} headers='period'>{snippet.periodTotal.toFixed(2)}</td>
        <td style={{background: "#FFFFFF"}} headers='period-percentage'>{snippet.periodPercentage.toFixed(2)}</td>
        <td style={{background: "#FFFFFF"}} headers='accumulated'>{snippet.accumulatedTotal.toFixed(2)}</td>
        <td style={{background: "#FFFFFF"}} headers='accumulated-percentage'>{snippet.accumulatedPercentage.toFixed(2)}</td>
      </tr>
      <br />
    </>
  )
}

export default IncomeStatementSnippet