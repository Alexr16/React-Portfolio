import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './pages/Header';
import Portfolio from './pages/Portfolio';
import NavBar from './components/navBar';
import About from './pages/About';
import Contact from './pages/Contact';
import Social from './components/Social';

const App = () => (
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

export default App;
