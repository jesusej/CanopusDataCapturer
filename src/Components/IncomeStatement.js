import React from 'react'

import IncomeStamentIterable from "./IncomeStatementIterable";

function IncomeStatement(data) {
  console.log(data.data)
  return (
    <div>
      <div className='income'>
        <h2>Ingresos</h2>
        {data.data.income.dataSet.map((dataIterable) => {
          return(<IncomeStamentIterable data={dataIterable}/>)
        })}
        <b><span>Total Ingresos {data.data.income.periodTotal.toFixed(2) + " " + data.data.income.periodPercentage.toFixed(2) + " " + data.data.income.accumulatedTotal.toFixed(2) + " " + data.data.income.accumulatedPercentage.toFixed(2)}</span></b>
        <br />

        <h2>Egresos</h2>
        {data.data.outcome.dataSet.map((dataIterable) => {
          return(<IncomeStamentIterable data={dataIterable}/>)
        })}
        <b><span>Total Egresos {data.data.outcome.periodTotal.toFixed(2) + " " + data.data.outcome.periodPercentage.toFixed(2) + " " + data.data.outcome.accumulatedTotal.toFixed(2) + " " + data.data.outcome.accumulatedPercentage.toFixed(2)}</span></b>
        <br />

        <h2>Utilidades</h2>
        <b><span>Utilidad o Pérdida {data.data.profit.period.toFixed(2) + " " + data.data.profit.periodPercentage.toFixed(2) + " " + data.data.profit.accumulated.toFixed(2) + " " + data.data.profit.accumulatedPercentage.toFixed(2)}</span></b>
        <br />
      </div>
  </div>
  );
}

export default IncomeStatement;