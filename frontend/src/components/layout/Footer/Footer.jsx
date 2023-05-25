import React from "react";
import playstore from "../../../images/playstore.png";
import appstore from "../../../images/Appstore.png";
import "./Footer.css";
const Footer = () => {
  return (
    <footer id='footer'>
      <div className='leftFooter'>
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App fro Android and IOs mobile phones</p>
        <img src={playstore} alt='playstore' />
        <img src={appstore} alt='appstore' />
      </div>
      <div className='midFooter'>
        <h1>E-COMMERCE</h1>
        <p>Hight Quality is our first Priority</p>
        <p>Copyright 2023 &copy; Wahab-khan</p>
      </div>
      <div className='rightFooter'>
        <h4>Follow Us</h4>
        <a href='#'>Instagram</a>
        <a href='#'>Youtube</a>
        <a href='#'>Facebook</a>
      </div>
    </footer>
  );
};

export default Footer;
