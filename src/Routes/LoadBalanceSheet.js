import axios from 'axios';
import React, { useState } from 'react'
import BalanceSheet from '../Components/BalanceSheet/BalanceSheet';

function LoadBalanceSheet() {
  const [balanceSheet, setBalanceSheet] = useState(null)

  const getBalanceSheet = () => {
    axios.get("https://canopus-backend2.azurewebsites.net/v1/reports/balance-sheet/test").then((res) => {
      setBalanceSheet(res.data);
      console.log(res.data);
    }).catch((e) => {
      console.log(e);
    })
  }

  return (
  <div>
    <button onClick={() => {
      getBalanceSheet();
    }}>Cargar Balanza General</button>
    {balanceSheet && <BalanceSheet data={balanceSheet} />}
  </div>
  )
}

export default LoadBalanceSheet
