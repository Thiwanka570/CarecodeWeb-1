import { useEffect, useRef } from "react";
import "./Aboutus.css";
import AboutUsImage from "../../Assest/aboutUsImage.png";
function Aboutus() {
  const aboutImageRef = useRef(null);

  // Function to add the "fadeIn" class for image animation
  const fadeInImage = () => {
    aboutImageRef.current.classList.add("fadeIn");
  };

  // Trigger the image animation when the component mounts
  useEffect(() => {
    fadeInImage();
  }, []);

  return (
    <section id="Aboutus" className="bgAbout">
      <div>
        <img
          ref={aboutImageRef}
          src={AboutUsImage}
          alt="About Us"
          className="aboutImage"
        />
      </div>

      <div className="aboutSection">
        <div className="header">About CareCode Solutions</div>
        <div className="body">
          <p>
            Welcome to CareCode Solutions, a distinguished leader in the domain
            of healthcare information management. Our unwavering commitment to
            advancing the field of healthcare technology has brought us to the
            forefront of innovation and excellence. With over a decade of
            dedicated service, we take immense pride in our journey of growth,
            transformation, and the positive impact we've had on healthcare
            institutions across the globe.
          </p>
          <h1>Our Vision</h1>
          <br />
          <p>
            At CareCode Solutions, we envision a world where healthcare
            information is not just managed but seamlessly optimized, where
            patient care is elevated to new standards of efficiency and
            excellence. We're driven by a vision of accessible, adaptable, and
            interconnected healthcare systems that empower medical professionals
            and institutions to deliver the highest quality care.
          </p>
          <h1>Our Founding</h1>
          <br />
          <p>
            Our story begins in 2004 when Dr. M H B Ariyaratne, a seasoned
            medical practitioner, recognized the need for an innovative
            Electronic Medical Record (EMR) System tailored to his general
            practice. With a passion for healthcare and technology, Dr.
            Ariyaratne pioneered the development of a revolutionary EMR system,
            designed to streamline medical records and transform patient care.
          </p>
          <h1>A Journey of Collaboration and Evolution</h1>
          <br />
          <p>
            As our EMR system gained momentum and earned the trust of fellow
            medical professionals, it expanded organically through extensive
            collaboration and feedback. Recognizing the diverse needs of our
            users, which included clinical laboratories, medical channelling
            centers, and hospitals, we embarked on a journey of continuous
            enhancement.
          </p>
          <p>
            By 2012, it became clear that a more robust platform was necessary
            to cater to the growing needs of the healthcare sector. In response,
            we launched a new JavaEE-based system as an Open Source Initiative,
            hosted on GitHub under the MIT license. The support and dedication
            of students from the Sri Lanka Institute of Advanced Technical
            Education, under the guidance of Mr. K.M.G.T.R. Waidyarathne, played
            a pivotal role in our evolution. These students, as part of their
            Higher National Diploma in Information Technology (HNDIT) program,
            contributed their knowledge and expertise to the project.
          </p>
          <p>
            Post-graduation, several of these students remained involved,
            ensuring the continuous development and success of our system. With
            the financial backing from Dr. M H B Ariyaratne, we expanded our
            horizons, aiming to reach a broader audience and offer commercial
            support services, including installations, user training,
            maintenance, cloud hosting, and troubleshooting.
          </p>
          <h1>Our Commitment</h1>
          <br />
          <p>
            We are committed to providing cutting-edge solutions that are
            tailored to the specific requirements of healthcare institutions.
            Our dedication to the healthcare sector drives us to continuously
            adapt, innovate, and evolve our solutions to meet the ever-changing
            demands of the industry.
          </p>
          <p>
            Our Comprehensive Offerings
            <br />
            CareCode Solutions encompasses a wide range of functionality, from
            Electronic Medical Records and Pharmacy Information Management to
            Laboratory Information Management and Appointment Management. Our
            holistic approach to healthcare information management ensures that
            our solutions align with the intricate and varied business workflows
            inherent to the healthcare sector.
          </p>
          <p>
            Join Us in the Future of Healthcare
            <br />
            We invite you to explore our website, discover the breadth of our
            offerings, and join us in the future of healthcare information
            management. At CareCode Solutions, we are committed to making a
            meaningful difference in the healthcare sector by delivering
            tailored, reliable, and efficient solutions to institutions
            worldwide.
          </p>
          <p>
            Contact us today to learn how we can elevate your healthcare
            operations to new heights and join us in the journey of transforming
            healthcare through technology.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Aboutus;
