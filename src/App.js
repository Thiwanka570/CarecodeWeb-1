import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Aboutus from './screens/AboutUs/Aboutus';
import Homepage from './screens/Homepage';
import Product from './screens/Product';
import Contactus from './screens/ContactUs/Contactus';
import Footer from './components/Footer';
import Customers from './screens/Customers';
import ContactUs from './screens/ContactUs/Contactus';
import Slider from './components/Slider';


function App() {

  return (
    <div className="App">
      <div className="Navbar">
        <Navbar />
      </div>
      <Homepage/>
      <Product />
      <Customers />
      <Aboutus />
      <ContactUs />
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
