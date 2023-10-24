import React from "react";
import HeaderSection from "../components/HeaderSection";
import Product from "./Product";
import Customers from "./Customers";
import Aboutus from "./AboutUs/Aboutus";
import ContactUs from "./ContactUs/Contactus";
import './Homepage.css';
import Navbar from "../components/Navbar";

function Homepage() {

    return (

        <section id="Home">
            <div style={{ width: 'auto', height: 'auto'}}>
            <HeaderSection />
        </div>
        </section>

    )
}
export default Homepage;
