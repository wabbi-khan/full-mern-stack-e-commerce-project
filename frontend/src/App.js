import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import webFont from "webfontloader";
import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer.jsx";
import Home from "./components/Home/Home";
const App = () => {
  React.useEffect(() => {
    webFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });
  }, {});
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
