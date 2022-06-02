import React from 'react'

import IncomeStatementSnippet from './IncomeStatementSnippet';

import "./styles.css"

function IncomeStatement({data}) {

  console.log(data)
  return (
    <div className='content'>
      <div className='statement'>
        
      <table class= "table" style={{width:"550px"}}>
        <thead>
          <th style={{background: "#FFFFFF"}} scope="col" id='description'>Descripción</th>
          <th style={{background: "#FFFFFF"}} scope="col" id='period'>Periodo</th>
          <th style={{background: "#FFFFFF"}} scope="col" id='period-percentage'>%</th>
          <th style={{background: "#FFFFFF"}} scope="col" id='accumulated'>Acumulado</th>
          <th style={{background: "#FFFFFF"}} scope="col" id='accumulated-percentage'>%</th>
        </thead>
        <tbody>
        <IncomeStatementSnippet snippet={data.income} title="Ingresos"/>
        <IncomeStatementSnippet snippet={data.outcome} title="Egresos"/>
        
        <tr>
          <td style={{background: "#FFFFFF"}} scope="row" colSpan='5'>Utilidades</td>
        </tr>
        <tr>
          <td style={{background: "#FFFFFF"}} scope="row" headers='description'>Utilidad (o Pérdida)</td>
          <td style={{background: "#FFFFFF"}} scope="row" headers='period' className={(data.profit.period < 0) && 'red'}>{data.profit.period.toFixed(2)}</td>
          <td style={{background: "#FFFFFF"}} scope="row" headers='period-percentage'>{data.profit.periodPercentage.toFixed(2)}</td>
          <td style={{background: "#FFFFFF"}} scope="row" headers='accumulated' className={(data.profit.period < 0) && 'red'}>{data.profit.accumulated.toFixed(2)}</td>
          <td style={{background: "#FFFFFF"}} scope="row" headers='accumulated-percentage'>{data.profit.accumulatedPercentage.toFixed(2)}</td>
        </tr>
        </tbody>
      </table>

      </div>
  </div>
  );
}

export default IncomeStatement;