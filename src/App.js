import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LoadFiles from "./Routes/LoadFiles";
import LoadIncomeStatement from "./Routes/LoadIncomeStatement";

import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from "./Components/NavbarComp";
import LoadTrialBalance from "./Routes/LoadTrialBalance";
import LoadBalanceSheet from "./Routes/LoadBalanceSheet";

function App() {
  return (
    <div className="App" style={{ backgroundColor: "#C1C2C3"}}>
      <header className="App-header" >
        <NavbarComp/>
      </header>
      <main>
        <Router>
          <Routes>
            <Route path="/" element={<LoadFiles/>} />
            <Route path="/income-statement" element={<LoadIncomeStatement />} />
            <Route path="/trial-balance" element={<LoadTrialBalance />} />
            <Route path="/balance-sheet" element={<LoadBalanceSheet />} />
          </Routes>
        </Router>
      </main>
    </div>
  );
}

export default App;
