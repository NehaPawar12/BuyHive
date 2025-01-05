import React from "react";
import Layout from "./../components/Layout/Layout";
import "../styles/Policy.css"; // Importing the custom CSS file for styling

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="policy-container">
        <div className="row policy-content">
          <div className="col-md-6 policy-image">
            <img
              src="/images/privacy.jpg"
              alt="privacy"
              className="img-fluid rounded"
            />
          </div>
          <div className="col-md-6 policy-text">
            <h2 className="policy-title">Privacy Policy</h2>
            <p className="policy-description">
              Your privacy is important to us. This policy outlines the types of
              personal information we collect and how we use, share, and protect
              your information.
            </p>
            <h4 className="policy-section-title">1. Information Collection</h4>
            <p className="policy-section-text">
              We collect personal information when you use our website, such as
              your name, email, and payment details for order processing.
            </p>
            <h4 className="policy-section-title">2. Data Usage</h4>
            <p className="policy-section-text">
              Your personal information is used to enhance your experience on
              our site, process your orders, and send updates or promotional
              offers with your consent.
            </p>
            <h4 className="policy-section-title">3. Data Protection</h4>
            <p className="policy-section-text">
              We implement various security measures to safeguard your personal
              information and prevent unauthorized access or disclosure.
            </p>
            <p className="policy-description">
              By using our services, you agree to the terms and conditions of
              this privacy policy. We may update this policy from time to time, so
              please check this page periodically.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
