import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/footer.css'

const Footer = () => {
  return (
    <div className="footer">
      <h4>
        All Rights Reserved &copy; Neha Pawar
      </h4>
      <p className="mt-3">
        <Link to="/about">About</Link>|
        <Link to="/contact">Contact</Link>|
        <Link to="/policy">Privacy Policy</Link>
      </p>
    </div>
  );
}

export default Footer;
