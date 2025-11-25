import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Helmet>
        <title>Al Fahad | Portfolio</title>
        <meta name="description" content="Al Fahad is a software developer. Learn more about Al Fahad's work, projects, and contact information." />
        <meta name="keywords" content="Al Fahad, software developer, portfolio, contact" />
        <meta property="og:title" content="Al Fahad | Portfolio" />
        <meta property="og:description" content="Al Fahad is a software developer." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://alfahad.dev" />
        <meta property="og:image" content="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUoplvFXt0YFRtiWzLUD4PN_iMU1aFIa8hjg&s" />
        <meta property="og:see_also" content="https://www.linkedin.com/in/al-fahad/" />
        <meta property="og:see_also" content="https://github.com/alfahadiqbal" />
        <meta property="og:see_also" content="https://stackoverflow.com/users/6405655/al-fahad" />
        <meta property="og:see_also" content="https://medium.com/@alfahadiqbal" />
      </Helmet>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
// test comment
export default App;
