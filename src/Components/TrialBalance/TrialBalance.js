import React from 'react'
import TrialBalanceIterable from './TrialBalanceIterable'
import { Container, Form } from "react-bootstrap";
import Table from 'react-bootstrap/Table'

function TrialBalance({data}) {
  return (
    <div className='content'>
      <Table responsive striped bordered hover>
      <thead>
          <tr>
            <th style={{width:"5%"}} id="code" rowSpan={2}>Cuenta</th>
            <th style={{width:"1%"}} id='name' rowSpan={2}>Nombre</th>
            <th style={{width:"5%"}} id='initial-balance' colSpan={2}>Saldos iniciales</th>
            <th style={{width:"5%"}} id='charge' rowSpan={2}>Cargos</th>
            <th style={{width:"5%"}} id='deposit' rowSpan={2}>Abonos</th>
            <th style={{width:"5%"}} id='actual-balance' colSpan={2}>Saldos actuales</th>
          </tr>
          <tr>
            <th class="fs-6" style={{width:"5%"}} id='initial-balance-debtor' headers='initial-balance' scope='col'>deudor</th>
            <th class="fs-6" style={{width:"5%"}} id='initial-balance-creditor' headers='initial-balance' scope='col'>acreedor</th>
            <th class="fs-6" style={{width:"5%"}} id='actual-balance-debtor' headers='actual-balance' scope='col'>deudor</th>
            <th class="fs-6" id='actual-balance-creditor' headers='actual-balance' scope='col'>acreedor</th>
          </tr>
        </thead>
        <tbody>
          {data.map((account) => {
            return(<TrialBalanceIterable data={account} /> )
          })}
          {/*<tr>
            <td></td>
            <td headers='name'>Sumas iguales:</td>
            <td headers='initial-balance-debtor'>{data.sums.initialBalanceSums.debtor}</td>
            <td headers='initial-balance-creditor'>{data.sums.initialBalanceSums.creditor}</td>
            <td headers='charge'>{data.sums.charge}</td>
            <td headers='deposit'>{data.sums.deposit}</td>
            <td headers='actual-balance-debtor'>{data.sums.actualBalanceSums.debtor}</td>
            <td headers='actual-balance-creditor'>{data.sums.actualBalanceSums.creditor}</td>
        </tr>*/}
        </tbody>
      </Table>
    </div>
  )
}

export default TrialBalance