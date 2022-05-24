import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchProjectsData } from './Redux/Projects/Projects';
import projectsData from './Data/projectsData';
import Header from './pages/Header';
import Portfolio from './pages/Portfolio';
import NavBar from './components/navBar';
import About from './pages/About';
import Contact from './pages/Contact';
import Social from './components/Social';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProjectsData(projectsData));
  }, []);

  return (
    <Router>
      <NavBar />
      <Social />
      <Routes>
        <Route
          path="/"
          element={(
            <>
              <Header />
              <Portfolio />
              <About />
              <Contact />
            </>
)}
        />
        {/* <Route path="/works" element={t} />
      <Route path="/about" element={t} />
      <Route path="/contact-form" element={e} /> */}
      </Routes>
    </Router>
  );
};

export default App;
