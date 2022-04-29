import React, {useState} from 'react'
import axios from 'axios';

function GetFiles() {
  const [file, setFile] = useState(null);
  const [file2, setFile2] = useState(null);
  
  const [alert, setAlert] = useState("");

  const fileLoader = () => {
    const formData = new FormData();

    formData.append("file", file, file.name);
    formData.append("file2", file2, file2.name);

    axios.post('http://localhost:3001/xlsx/uploadXlsx', formData).then((res) => {
      if(res.status === 201){
        setAlert("Los archivos se han subido y guardado exitosamente");
      }
      console.log(res);
    }).catch(() => {
      setAlert("Sucedió un problema al subir los archivos. Favor de revisar de nuevo sus archivos y de volver a intentarlo");
    });
  }

  return (
    <div>
      { alert && <p>{alert}</p> }
      <button onClick={(() => fileLoader())}>Generar Balanza de Comprobacion</button> <br />
    </div>
  )
}

export default GetFiles;