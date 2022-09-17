import "./App.css";
import NavigBar from "./Components/NavigBar";
import Seasons from "./Components/Seasons/Seasons";
import Characters from "./Components/Characters/Characters";
import Cover from "./Cover";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Houses from "./Components/Houses/Houses";

function App() {
  return (
    <div className="App">
      <Router>
        <NavigBar />
        <Routes>
          <Route path="/" element={<Cover />} />
          <Route path="/episodes" element={<Seasons />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/houses" element={<Houses />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
