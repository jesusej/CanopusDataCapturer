import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Home() {
  const [movements, setMovements] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/").then((response) => {
      console.log(response);
      setMovements(response.data);
    })
  }, [])

  return (
    <div className='Home'>
      {movements.map((movement) => {
        let i = 0;
        return(
          <div className='movement' key={`movement${++i}`}>
            <p>Concepto: {movement.concept}</p>
            <p>Tipo de Movimiento: {movement.typeMovement}</p>
            <p>Cargo: {movement.charge}</p>
            <p>Deposit: {movement.deposit}</p>
          </div>
        );
      })}
    </div>
  )
}
