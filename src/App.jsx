import React from "react";
import Header from "./components/Header"
import ContactUs from "./components/ContactUs"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"


const App = () => {
  return (
    <div>
      <Navbar />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default App;
