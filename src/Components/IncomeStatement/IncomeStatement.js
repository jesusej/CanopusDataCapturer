import React from 'react'

import IncomeStatementSnippet from './IncomeStatementSnippet';

import "./styles.css"

function IncomeStatement({data}) {

  console.log(data)
  return (
    <div>
      <div className='statement'>
        
      <table>
        <thead>
          <th id='description'>Descripción</th>
          <th id='period'>Periodo</th>
          <th id='period-percentage'>%</th>
          <th id='accumulated'>Acumulado</th>
          <th id='accumulated-percentage'>%</th>
        </thead>
        <tbody>
        <IncomeStatementSnippet snippet={data.income} title="Ingresos"/>
        <IncomeStatementSnippet snippet={data.outcome} title="Egresos"/>
        
        <tr>
          <td colSpan='5'>Utilidades</td>
        </tr>
        <tr>
          <td headers='description'>Utilidad (o Pérdida)</td>
          <td headers='period' className={(data.profit.period < 0) && 'red'}>{data.profit.period.toFixed(2)}</td>
          <td headers='period-percentage'>{data.profit.periodPercentage.toFixed(2)}</td>
          <td headers='accumulated' className={(data.profit.period < 0) && 'red'}>{data.profit.accumulated.toFixed(2)}</td>
          <td headers='accumulated-percentage'>{data.profit.accumulatedPercentage.toFixed(2)}</td>
        </tr>

        </tbody>
      </table>
      </div>
  </div>
  );
}

export default IncomeStatement;