import React from "react";
import Layout from "./../components/Layout/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";

const Contact = () => {
  return (
    <Layout title={"Contact Us"}>
      <div className="container mt-5">
        <div className="row align-items-center">
          {/* Left Section: Image */}
          <div className="col-md-6">
            <img
              src="/images/contact-us.png"
              alt="Contact Us"
              className="img-fluid rounded shadow"
            />
          </div>
          {/* Right Section: Contact Information */}
          <div className="col-md-6">
            <div className="p-4 bg-light rounded shadow">
              <h2 className="text-center mb-4 text-dark fw-bold">
                Get in Touch
              </h2>
              <p className="text-muted text-justify mb-3">
                Have any queries or need assistance? Feel free to reach out to
                us. We're available 24/7 to help you with any questions or
                concerns about our products and services.
              </p>
              <div className="contact-info">
                <p className="d-flex align-items-center mb-3">
                  <BiMailSend size={24} className="me-2 text-primary" />
                  <span className="fw-bold">Email:</span> help@buyhive.com
                </p>
                <p className="d-flex align-items-center mb-3">
                  <BiPhoneCall size={24} className="me-2 text-success" />
                  <span className="fw-bold">Phone:</span> +91 8888523203
                </p>
                <p className="d-flex align-items-center mb-3">
                  <BiSupport size={24} className="me-2 text-info" />
                  <span className="fw-bold">Support:</span> 24x7 Customer Service
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
