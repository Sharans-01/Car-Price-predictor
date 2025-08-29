import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CarFormPage from "./pages/CarFormPage";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/carform" element={<CarFormPage />} />
      </Routes>
    </Router>
  );
}

export default App;
