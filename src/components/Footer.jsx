import React from "react";
import './Footer.css';

function Footer() {
    return (
        <footer className="footer" style={{ backgroundColor: "black" }}>
            <div className="container d-flex flex-column justify-content-center align-items-center text-center text-white" style={{ minHeight: "250px" }}>
                <div>
                    <p>&copy; 2023 Your CareCode</p>
                    <p>Contact: InfoCareCode@gmail.com</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
