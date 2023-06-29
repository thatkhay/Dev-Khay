import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Mypage from './pages/Mypage';
import Aboutmepage from "./pages/Aboutmepage";
import MyProjects from "./pages/MyProjects";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Mypage />} />
          <Route path="/aboutme" element={<Aboutmepage />} />
          <Route path="/project" element={<MyProjects />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
