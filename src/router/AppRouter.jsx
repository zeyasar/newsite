import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import CategoryPage from "../pages/CategoryPage";
import SearchPage from "../pages/SearchPage";
import Header from "../components/Header";
import Footer from "../components/Footer";

const AppRouter = () => {

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route exact path="/:category" element={<CategoryPage />} />
          <Route exact path="search/:query" element={<SearchPage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default AppRouter;
