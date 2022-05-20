import React, { useEffect, useState } from 'react'
import axios from 'axios'

import IncomeStatement from '../Components/IncomeStatement';

function LoadIncomeStatement() {
  const [initialDate, setInitialDate] = useState("dfdgd");
  const [endDate, setEndDate] = useState("dgdfgdf");

  const [incomeStatement, setIncomeStatement] = useState(null);

  const getIncomeStatement = () => {
    if(initialDate && endDate){
      const url = "http://localhost:3001/v1/reports/generate-income-statement/fdgd/dfgdg/user/test/false";

      axios.get(url).then((res) => {
        setIncomeStatement(res.data);
        console.log(incomeStatement);
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