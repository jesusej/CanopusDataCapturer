import React from 'react'
import BalanceSheetIterative from './BalanceSheetIterative'
import Table from 'react-bootstrap/Table'

function BalanceSheet({data}) {
  return (
    <div className='content'>
      <div className='active'>
        <Table responsive striped bordered hover>
          <thead>
            <tr>
              <th style={{width:"15%"}} id='name'>{data.active.name}</th>
              <th id='value'></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
            </tr>
            {data.active.subAccounts.map((account) => {
              console.log(account)
              return(
                <>
                  <tr>
                    <td>{account.name}</td>
                  </tr>
                  
                  {account.subAccounts.map((subAccount) => {
                    return(<BalanceSheetIterative data={subAccount}/>)
                  })}

                  <tr>
                    <td>{"Total " + account.name}</td>
                    <td>{account.sum}</td>
                  </tr>
                  <tr>
                    <td></td>
                  </tr>
                </>
              )
            })}
            <tr>
              <td>{"Suma del " + data.active.name}</td>
              <td>{data.active.sum}</td>
            </tr>
          </tbody>
        </Table>
      </div>

      <div className='pasive'>
        <Table responsive striped bordered hover>
          <thead>
            <tr>
              <th style={{width:"15%"}} id='name'>{data.pasiveAndCapital.pasive.name}</th>
              <th id='value'></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
            </tr>
            {data.pasiveAndCapital.pasive.subAccounts.map((account) => {
              console.log(account)
              return(
                <>
                  <tr>
                    <td>{account.name}</td>
                  </tr>
                  
                  {account.subAccounts.map((subAccount) => {
                    return(<BalanceSheetIterative data={subAccount}/>)
                  })}

                  <tr>
                    <td>{"Total " + account.name}</td>
                    <td>{account.sum}</td>
                  </tr>
                  <tr>
                    <td></td>
                  </tr>
                </>
              )
            })}
            <tr>
              <td>{"Suma del " + data.pasiveAndCapital.pasive.name}</td>
              <td>{data.pasiveAndCapital.pasive.sum}</td>
            </tr>
          </tbody>
        </Table>
      </div>

      <div className='pasiveAndCapital.capital'>
        <Table responsive striped bordered hover>
          <thead>
            <tr>
              <th style={{width:"15%"}} id='name'>{data.pasiveAndCapital.capital.name}</th>
              <th id='value'></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
            </tr>
            {data.pasiveAndCapital.capital.subAccounts.map((account) => {
              console.log(account)
              return(
                <>
                  <tr>
                    <td>{account.name}</td>
                  </tr>
                  
                  {account.subAccounts && account.subAccounts.map((subAccount) => {
                    return(<BalanceSheetIterative data={subAccount}/>)
                  })}

                  <tr>
                    <td>{"Total " + account.name}</td>
                    <td>{account.sum}</td>
                  </tr>
                  <tr>
                    <td></td>
                  </tr>
                </>
              )
            })}
            <tr>
              <td>{"Total " + data.pasiveAndCapital.capital.name}</td>
              <td>{data.pasiveAndCapital.capital.sum.toFixed(2)}</td>
            </tr>
            <tr>
              <td>Utilidad o P??rdida del ejercicio</td>
              <td>{data.pasiveAndCapital.profit.toFixed(2)}</td>
            </tr>
            <tr>
              <td>Suma del CAPITAL</td>
              <td>{data.pasiveAndCapital.profitAndCapital.toFixed(2)}</td>
            </tr>
            <tr>
              <td>Suma del PASIVO y CAPITAL</td>
              <td>{data.pasiveAndCapital.sum.toFixed(2)}</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  )
}

export default BalanceSheet