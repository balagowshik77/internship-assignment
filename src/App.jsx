import React from "react";

import ContactUs from "./components/ContactUs"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"


const App = () => {
  return (
    <div className="sm:w-full">
      <Navbar />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default App;
