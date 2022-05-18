import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LoadFiles from "./Routes/LoadFiles";

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
