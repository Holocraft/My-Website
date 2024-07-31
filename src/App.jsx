import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useTheme } from "./ThemeContext";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects/Projects";
import Thoughts from "./components/Thoughts/Thoughts";

function App() {
  const { isDarkMode } = useTheme();
  return (
    <Router>
      <NavBar isDarkMode={isDarkMode} />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/thoughts' element={<Thoughts />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
