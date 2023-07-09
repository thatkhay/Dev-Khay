import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Mypage from './pages/Mypage';
import Aboutmepage from "./pages/Aboutmepage";
import MyProjects from "./pages/MyProjects";
import { createContext } from "react";
import { useState } from "react";

export const ThemeProvider = createContext(null)

function App() {

const [theme, setTheme] = useState('light')

const switchTheme = () => {
  setTheme((current) => (
current === 'light' ? 'dark' : 'light'
  ))}

  return (
    <ThemeProvider.Provider value={{theme, switchTheme}}>
    <Router>
      <div className="App" id={theme}>
        <Routes>
          <Route path="/" element={<Mypage />} />
          <Route path="/aboutme" element={<Aboutmepage />} />
          <Route path="/project" element={<MyProjects />} />
        </Routes>
      </div>
    </Router>
    </ThemeProvider.Provider>
  );
}

export default App;
