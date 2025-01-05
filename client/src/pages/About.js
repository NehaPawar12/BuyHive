import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About Us - Ecommerce"}>
      <div className="container py-5">
        <div className="row align-items-center">
          {/* Image Section */}
          <div className="col-md-6">
            <img
              src="/images/about1.jpeg"
              alt="About Us"
              style={{
                width: "100%",
                borderRadius: "10px",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
              }}
            />
          </div>
          {/* Content Section */}
          <div className="col-md-6">
            <h2 className="mb-4">About Us</h2>
            <p style={{ lineHeight: "1.8", textAlign: "justify" }}>
              Welcome to <strong>BuyHive</strong>, your trusted e-commerce
              platform where quality meets convenience. Our mission is to
              provide customers with a seamless shopping experience, offering
              high-quality products and unparalleled customer support. With a
              user-friendly interface and secure payment options, we are
              committed to making your online shopping journey enjoyable and
              hassle-free.
            </p>
            <p style={{ lineHeight: "1.8", textAlign: "justify" }}>
              Our team is dedicated to bringing you the best deals and
              innovative solutions for all your needs. Join us and explore a
              world of endless possibilities at your fingertips. Thank you for
              choosing BuyHive!
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
