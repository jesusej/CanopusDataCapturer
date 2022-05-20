import React, {useState} from 'react'
import axios from 'axios';
import {Routes, Route, useNavigate} from 'react-router-dom';


function LoadFiles() {
  const [file, setFile] = useState(null);
  const [file2, setFile2] = useState(null);
  
  const [alert, setAlert] = useState("");

  const [result, setResult] = useState("");

  const navigate = useNavigate();

  const fileLoader = () => {
    const formData = new FormData();

    formData.append("file", file, file.name);
    formData.append("file2", file2, file2.name);
//axios.get con url para acceder a la variable del backend
    axios.post('https://canopus-backend2.azurewebsites.net/xlsx/uploadXlsx', formData).then((res) => {
      if(res.status === 201){
        setAlert("Los archivos se han subido y guardado exitosamente");
        console.log(res.data)
        setResult(res.data)
      }
      console.log(res);
    }).catch(() => {
      setAlert("Sucedió un problema al subir los archivos. Favor de revisar de nuevo sus archivos y de volver a intentarlo");
    });
  }

  const irBalanza = () => {
    navigate('/GetBalanceFiles');
    }

  const irBalance = () => {
        navigate('/GetGeneralBalance');
    }

  //asi se veria la pagina
  return (
    <div>
      { alert && <p>{alert}</p> }
      
      <label for="file">Cargue su Catálogo de Cuentas</label> <br />
      <input type="file" id='file' onChange={((e) =>{
        setFile(e.target.files[0]);
      })} /><br />
      <br />
      <label for="file2">Cargue sus Movimientos auxiliares de Catálogo</label> <br />
      <input type="file" id='file2' onChange={((e) =>{
        setFile2(e.target.files[0]);
      })}/><br />
      <br />
      <button onClick={(() => fileLoader())}>Subir archivos</button>
      <br />
      {result && <p>{result.nameEnterprise}</p>}
      
      <button onClick={(() => irBalanza())}>Generar Balanza</button>
      <br />
      <button onClick={(() => irBalance())}>Generar Balance General</button>

    </div>
  )
}

export default LoadFiles;