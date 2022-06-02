import React, { useState } from 'react'
import TrialBalance from '../Components/TrialBalance/TrialBalance';

function LoadTrialBalance() {
  const [trialBalance, setTrialBalance] = useState(null)
  
  const getTrialBalance = () => {
    let trialBalanceDummy = {
      accounts: [
        {
          code: "000-0100",
          name: "ACTIVO",
          initialBalance: 433048.96,
          charge: 564886.42,
          deposit: 650477.82,
          actualBalance: 647457.56
        },
        {
          code: "000-0110",
          name: "CIRCULANTE",
          initialBalance: 407104.9,
          charge: 564209.42,
          deposit: 650477.82,
          actualBalance: 320836.5
        },
        {
          code: "100-0000",
          name: "Fondo Fijo Caja",
          initialBalance: 0,
          charge: 0,
          deposit: 0,
          actualBalance: 0
        },
        {
          code: "101-0000",
          name: "Caja",
          initialBalance: 0,
          charge: 0,
          deposit: 0,
          actualBalance: 0
        },
        {
          code: "102-0000",
          name: "Bancos",
          initialBalance: 13084.95,
          charge: 305064.14,
          deposit: 311967.68,
          actualBalance: 6181.41
        },
        {
          code: "102-1000",
          name: "Scotiabank",
          initialBalance: 2611.97,
          charge: 295913.14,
          deposit: 294752.83,
          actualBalance: 3772.28
        },
        {
          code: "102-2000",
          name: "Inbursa",
          initialBalance: 10472.98,
          charge: 9151,
          deposit: 17214.85,
          actualBalance: 2409.13
        },
        {
          code: "102-3000",
          name: "Scotiabank-CANIETI",
          initialBalance: 0,
          charge: 0,
          deposit: 0,
          actualBalance: 0
        },
        {
          code: "102-4000",
          name: "Banorte",
          initialBalance: 0,
          charge: 0,
          deposit: 0,
          actualBalance: 0
        },
      ],
      sums: {
        initialBalanceSums: {
          debtor: 1629749.75,
          creditor: 1629749.75
        },
        charge: 869714.04,
        deposit: 869714.04,
        actualBalanceSums: {
          debtor: 1812783.64,
          creditor: 1812783.64
        }
      }
    }
    setTrialBalance(trialBalanceDummy);
  }

  return (
    <div>
      <button onClick={() => {
        getTrialBalance();
      }}>Cargar Balance de Comprobación</button>
      {trialBalance && <TrialBalance data={trialBalance} />}
    </div>
  )
}

export default LoadTrialBalance