import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<><Navbar /><Index /></>} />
      </Routes>
    </Router>
  );
}

export default App;
