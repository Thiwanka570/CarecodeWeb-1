
import './App.css';
import Navbar from './components/Navbar';
import Aboutus from './screens/AboutUs/Aboutus'
import Homepage from './screens/Homepage';
import Product from './screens/Product';
import Contactus from './screens/ContactUs/Contactus'
import Footer from './components/Footer';
import Customers from './screens/Customers';
import CareCodeproducts from './screens/CareCodeproducts';


function App() {
  return (
    <div className="App">
      <div className="Navbar">
        <Navbar />
      </div>

      {/* <Homepage />
      <Product />
      <Customers />
      <Contactus />
      <Aboutus />

      <div className="footer">
        <Footer />
      </div> */}
      <CareCodeproducts/>
    </div>
  );
}

export default App;
