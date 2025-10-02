import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer1">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>
            At Tomato, we are passionate about bringing delicious, high-quality
            food to your doorstep. Our mission is to make every meal a
            delightful experience, offering a diverse menu that caters to all
            tastes. With a commitment to freshness and exceptional service,we
            strive to be your go-to choice for convenient, mouthwatering
            meals.Whether you're craving a quick bite or planning a family
            feast, we’re here to deliver a satisfying culinary experience every
            time.
          </p>

          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>

        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>
              Delivery Hours:<p>Monday-Sunday: 10:00 AM - 11:00 PM</p>
            </li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+1-112-456-7890</li>
            <li>contact@tomato.com</li>
            <li>
              Address : <p>123 Foodie Lane, Gourmet City , FL 12345</p>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="footer2">
        <p className="footer-copyright">
          Copyright ©2024 Design & Development by <a href="https://wordywardrobe.netlify.app/">Sonal Kasare 🌹🌙</a>  All rights
          Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
