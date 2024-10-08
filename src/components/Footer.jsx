import React from 'react';
import logo from '../images/logo.png';
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaWhatsappSquare } from "react-icons/fa";
import { SiLinktree } from "react-icons/si";
const Footer = () => {
  return (
    <footer className=" text-black py-4 ">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
        <div className="hidden sm:flex items-center mb-4 md:mb-0">
          <img src={logo} alt="Logo" className="h-44 mr-2" />
        </div>
        
        <div className="text-center mb-4 md:mb-0">
          <h3 className="font-semibold mb-4">Follow us on our socials:</h3>
          <div className="flex justify-center gap-5">
            <a href='https://www.linkedin.com/company/mlsa-miet/' className='text-3xl'><FaLinkedin /></a>
            <a href='https://www.instagram.com/mlsamiet' className='text-3xl'><FaInstagram /></a>
            <a href='https://x.com/MlsaMiet' className='text-3xl'><FaXTwitter /></a>
            <a href='https://chat.whatsapp.com/DXjoWMoEPsfBeCrVtBJNqc' className='text-3xl'><FaWhatsappSquare /></a>
            <a href='https://linktr.ee/mlsamiet' className='text-3xl'><SiLinktree /></a>
          </div>
        </div>
        
        <div className="text-center md:text-right">
          <p><b>Address</b>  : <br />  Delhi-Roorkee Highway, <br />  Baghpat Bypass <br />  Meerut</p>
          <p> <b>Contact Number:</b> <br /> 8057296589</p>
        </div>
      </div>
      
      <div className="text-center mt-4">
        <p>@Rights Reserved : MLSA MIET</p>
      </div>
    </footer>
  );
};

export default Footer;
