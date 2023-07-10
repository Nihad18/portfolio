import MainContext from "./MainContext";
import { useState, useEffect, createContext } from "react";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { Routes, Route } from "react-router-dom";
import Page404 from "./page/Page404";

export const ThemeContext = createContext(null);

function App() {
  const [isOff, setIsOff] = useState(true);
  const [navbarToggle, setNavbarToggle] = useState(false);

  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    setTheme((current) => (current === "light" ? "dark" : "light"));
  };
  function useOnClickOutside(ref, handler) {
    useEffect(() => {
      const listener = (event) => {
        // Do nothing if clicking ref's element or descendent elements
        if (!ref.current || ref.current.contains(event.target)) {
          return;
        }
        handler(event);
      };
      document.addEventListener("mousedown", listener);
      document.addEventListener("touchstart", listener);
      return () => {
        document.removeEventListener("mousedown", listener);
        document.removeEventListener("touchstart", listener);
      };
    }, [ref, handler]);
  }

  const [downloadCV,setDownloadCV]= useState();
  const data = {
    isOff,
    setIsOff,
    navbarToggle,
    setNavbarToggle,
    theme,
    setTheme,
    toggleTheme,
    useOnClickOutside,
    downloadCV,
    setDownloadCV,
  };
  
  return (
    <>
      <MainContext.Provider value={data}>
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
          <div className='app' id={theme}>
            <nav>
              <Navbar />
            </nav>
            <Routes>
              <Route path='/' element={<Content />} />
              <Route path='/about' element={<About />} />
              <Route path='/skills' element={<Skills />} />
              <Route path='/projects' element={<Projects />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='*' element={<Page404 />} />
            </Routes>
          </div>
        </ThemeContext.Provider>
      </MainContext.Provider>
    </>
  );
}

export default App;
