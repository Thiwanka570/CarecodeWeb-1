import React from "react";
import "./ContactUs.css"; // Replace with your CSS file path

function ContactUs() {
  return (
    <section id="Contact Us" className="contactUs">
      <h1 className="header">Contact CareCode Solutions</h1>
      <p>
        We welcome your inquiries, feedback, and collaboration opportunities.
        Contact CareCode Solutions using the information below, and our
        dedicated team will be pleased to assist you.
      </p>
      <div className="contactForm">
        <div className="contactDetails">
          <div className="address">
            <h2>Office Address:</h2>
            <p>
              CareCode Solutions Inc.
              <br />
              123 Healthcare Drive,
              <br />
              Suite 456,
              <br />
              City, State 12345,
              <br />
              Country
            </p>
          </div>

          <div className="generalInquiries">
            <h2>General Inquiries:</h2>
            <p>Email: info@carecodesolutions.com</p>
            <p>Phone: +1 (123) 456-7890</p>
          </div>
        </div>

        <center>
          <div className="salesPartnerships">
            <h2>Sales and Partnerships:</h2>
            <p>Email: sales@carecodesolutions.com</p>
            <p>Phone: +1 (123) 456-7891</p>
          </div>

          <div className="technicalSupport">
            <h2>Technical Support:</h2>
            <p>
              For existing customers and users, our technical support team is
              available to address any inquiries or issues you may have.
            </p>
            <p>Email: support@carecodesolutions.com</p>
            <p>Phone: +1 (123) 456-7892</p>
          </div>
        </center>

        <div className="feedbackSuggestions">
          <h2>Feedback and Suggestions:</h2>
          <p>
            Your feedback is invaluable to us. If you have any suggestions or
            recommendations to help us improve our products and services, please
            don't hesitate to reach out to us. We appreciate your insights.
          </p>
          <p>Email: feedback@carecodesolutions.com</p>
        </div>
      </div>

      <div className="officeHours">
        <h2>Office Hours:</h2>
        <p>Our office is open during the following hours:</p>
        <p>Monday - Friday: 9:00 AM - 6:00 PM (Local Time)</p>
      </div>
    </section>
  );
}

export default ContactUs;
