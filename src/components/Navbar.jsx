import { useRef, useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-scroll';
import logo from '../Assest/logo.png'
import './Navbar.css'

function Navbar() {
    const navRef = useRef();
    const [isNavOpen, setIsNavOpen] = useState(false);
    
    const showNavbar = () => {
        navRef.current?.classList.toggle("responsive_nav");
    };

    const closeNavbar = () => {
        setIsNavOpen(false);
    };

    useEffect(() => {
        // Wait for the component to mount and the DOM to be ready
        const header = document.querySelector('header');
        if (header) {
            window.addEventListener('scroll', () => {
                if (window.scrollY > 0) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }
            });
        }
    }, []);


    return (
        <header>
            <div className="d-flex justify-content-between align-items-center w-100">
                {/* <h3 className="text-warning">LOGO</h3> */}
                <div className="logo">
                    <img src={logo} width={40} />
                </div>
                <div>
                    <nav ref={navRef} className="w-100">
                        <Link
                            to="Home"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={50}
                            onClick={() => { closeNavbar(); showNavbar() }}
                            style={{ cursor: "pointer" }}

                        >
                            Home
                        </Link>

                        <Link
                            to="Product"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={50}
                            onClick={() => { closeNavbar(); showNavbar() }}
                            style={{ cursor: "pointer" }}

                        >
                            Products
                        </Link>

                       
                        
                        <Link
                            to="Customers"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={50}
                            onClick={() => { closeNavbar(); showNavbar() }}
                            style={{ cursor: "pointer" }}

                        >
                            Customers
                        </Link>

                        <Link
                            to="Aboutus"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={50}
                            onClick={() => { closeNavbar(); showNavbar() }}
                            style={{ cursor: "pointer" }}

                        >
                            About Us
                        </Link>
                        
                        <Link
                            to="Contact Us"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={50}
                            onClick={() => { closeNavbar(); showNavbar() }}
                            style={{ cursor: "pointer" }}

                        >
                            Contact Us
                        </Link>
                        <Link
                            to="Blog"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={50}
                            onClick={() => { closeNavbar(); showNavbar() }}
                            style={{ cursor: "pointer" }}


                        >
                            Blog
                        </Link>




                        <button
                            className="nav-btn nav-close-btn"
                            onClick={showNavbar}>
                            <FaTimes />
                        </button>
                    </nav>
                </div>
            </div>
            <button
                className="nav-btn"
                onClick={showNavbar}>
                <FaBars />
            </button>
        </header>
    );
}

export default Navbar;
