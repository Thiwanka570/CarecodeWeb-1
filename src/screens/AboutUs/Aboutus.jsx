import { useEffect, useRef } from "react";
import "./Aboutus.css";
import AboutUsImage from "../../Assest/aboutUsImage.png";

function Aboutus() {
  const aboutImageRef = useRef(null);

  // // Function to add the "fadeIn" class for image animation
  // const fadeInImage = () => {
  //   aboutImageRef.current.classList.add("fadeIn");
  // };

  // // Trigger the image animation when the component mounts
  // useEffect(() => {
  //   fadeInImage();
  // }, []);

  return (
    <section id="Aboutus" className="bgAbout">
      <div className="about-container">
        {/* <div className="about-image">
          <img
            ref={aboutImageRef}
            src={AboutUsImage}
            alt="About Us"
            className="aboutImage"
          />
        </div> */}

        <div className="about-content">
          <h1 className="about-header">About CareCode Solutions</h1>
          <div className="about-paragraph">
            <p>
              Welcome to CareCode Solutions, a distinguished leader in the domain
              of healthcare information management. Our unwavering commitment to
              advancing the field of healthcare technology has brought us to the
              forefront of innovation and excellence. With over a decade of
              dedicated service, we take immense pride in our journey of growth,
              transformation, and the positive impact we've had on healthcare
              institutions across the globe.
            </p>
          </div>
          <h1 className="about-header">Our Vision</h1>
          <div className="about-paragraph">
            <p>
              At CareCode Solutions, we envision a world where healthcare
              information is not just managed but seamlessly optimized, where
              patient care is elevated to new standards of efficiency and
              excellence. We're driven by a vision of accessible, adaptable, and
              interconnected healthcare systems that empower medical professionals
              and institutions to deliver the highest quality care.
            </p>
          </div>
          <h1 className="about-header">Our Founding</h1>
          <div className="about-paragraph">
            <p>
              Our story begins in 2004 when Dr. M H B Ariyaratne, a seasoned
              medical practitioner, recognized the need for an innovative
              Electronic Medical Record (EMR) System tailored to his general
              practice. With a passion for healthcare and technology, Dr.
              Ariyaratne pioneered the development of a revolutionary EMR system,
              designed to streamline medical records and transform patient care.
            </p>
          </div>
          {/* Other paragraphs go here */}
        </div>
      </div>
    </section>
  );
}

export default Aboutus;
