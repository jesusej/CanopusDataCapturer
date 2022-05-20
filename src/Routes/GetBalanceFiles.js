import React, {useState, useEffect} from 'react'
import axios from 'axios';

function GetBalanceFiles() {
  
  const [alert, setAlert] = useState("");

  const [result, setResult] = useState("");

  const fileLoader = () => {

    const ent = 'FlexBPO'
    const saldo = 45
    const saldo1 = 45
    const saldo2 = 45
    const saldo3 = 45

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

  //asi se veria la pagina
  return (
    <div>
        
      { alert && <p>{alert}</p> }
      
      {result && <p>{result.nameEnterprise}</p>}

      {result.accounts.map((account) => {
          return(
            <div>
                {account.nameAccount + ' ' + account.code}
            </div>
          )
      })}

    </div>
  )
}

export default GetBalanceFiles;