import React, {useState} from 'react'
import axios from 'axios';

function GetFiles() {
  const [file, setFile] = useState(null);
  const [file2, setFile2] = useState(null);
  
  const [alert, setAlert] = useState("");

  const fileLoader = () => {
    const formData = new FormData();

    formData.getAll("file", file, file.name);
    formData.getAll("file2", file2, file2.name);

    axios.post('http://localhost:3001/xlsx/uploadXlsx', formData).then((res) => {
      if(res.status === 201){
        setAlert("Los archivos se han cargado exitosamente");
      }
      console.log(res);
    }).catch(() => {
      setAlert("Sucedió un problema al cargar los archivos. Favor de revisar de nuevo su conexion");
    });
  }

  return (
    <div>
      { alert && <p>{alert}</p> }
    <br />
      <button onClick={(() => GetFiles())}>Generar Balanza de Comprobacion</button> <br />
    </div>
  )
}

export default GetFiles;