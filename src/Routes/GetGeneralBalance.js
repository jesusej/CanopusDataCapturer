import React, {useState, useEffect} from 'react'
import axios from 'axios';

function GetGeneralBalance() {

  const fileLoader = () => {

    const ent = 'FlexBPO'

//axios.get con url para acceder a la variable del backend
    axios.get('http://localhost:3001/v1/balance/getEnterpriseName/'+saldo+'/'+saldo1+'/'+saldo2+'/'+ent+'/'+saldo3).then((res) => {
        setResult(res.data)
      console.log(res);
    }).catch(() => {
      setAlert("Sucedió un problema al subir los archivos. Favor de revisar de nuevo sus archivos y de volver a intentarlo");
    });
  }

  useEffect(() => {
    fileLoader();
}, [])

export default GetGeneralBalance;