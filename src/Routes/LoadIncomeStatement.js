import React, { useEffect, useState } from 'react'
import axios from 'axios'

import IncomeStatement from '../Components/IncomeStatement/IncomeStatement';

function LoadIncomeStatement() {
  const [initialDate, setInitialDate] = useState("dfdgd");
  const [endDate, setEndDate] = useState("dgdfgdf");

  const [incomeStatement, setIncomeStatement] = useState(null);

  const getIncomeStatement = () => {
    if(initialDate && endDate){
      const url = "https://canopus-backend2.azurewebsites.net/v1/reports/generate-income-statement/fdgd/dfgdg/user/test/false";

      axios.get(url).then((res) => {
        setIncomeStatement(res.data);
      }).catch((e) => {
        console.log(e);
      })
    }
  }

  return (
    <div>
      <button onClick={() => {
        console.log("Button clicked");
        getIncomeStatement();
        }}>Cargar Estado de Resultados</button>
        {incomeStatement && <IncomeStatement data={incomeStatement} />}
    </div>
  )
}

export default LoadIncomeStatement