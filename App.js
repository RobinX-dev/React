import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Products from "./components/Products";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Products />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
