import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LoadFiles from "./Routes/LoadFiles";

import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from "./Components/NavbarComp";

function App() {
  return (
    <div className="App" style={{ backgroundColor: "#C1C2C3"}}>
      <header className="App-header" >
        <NavbarComp/>
        <h1>Canopus Data Capturer</h1>
      </header>
      <main>
        <Router>
          <Routes>
            <Route path="/" element={<LoadFiles/>} />
          </Routes>
        </Router>
      </main>
    </div>
  );
}

export default App;
