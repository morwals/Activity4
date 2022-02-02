import { BrowserRouter, Route, Routes } from "react-router-dom";

import Container from "./Components/Container";

function App() {
  return (
    <div className="App">
      <h1> Check Weather App</h1>
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Container/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
