import React from "react";

import { FaFacebook, FaWhatsapp } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

import "./styles.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="logoFooter">Odonto Clinica</div>
      <div className="technicalData">
        <p>Ama Odonto S/A LTDA CNPJ: 18.908.299/0001-42 EPAO: 489</p>
        <p>Responsável Técnico: Dra. Julia CRO-CE: 7074</p>
      </div>
      <div className="footer__social">
          <div className="title">
            <p>Redes Sociais</p>
          </div>
          <div className="logoSocialMedia">
            <a href="https://www.facebook.com">
              <FaFacebook size="30" color="#3b5998" />
            </a>
          </div>

          <div className="logoSocialMedia">
            <a href="https://www.twitter.com">
              <FaTwitter size="30" color="#1da1f2" />
            </a>
          </div>
          <div className="logoSocialMedia">
            <a href="https://www.youtube.com">
              <FaYoutube size="30" color="#f00f" />
            </a>
          </div>
          <div className="logoSocialMedia">
            <a href="https://www.instagram.com">
              <FaInstagram size="30" color="#000" />
            </a>
          </div>

          <div className="logoSocialMedia">
            <a href="https://www.instagram.com">
              <FaWhatsapp size="30" color="#000" />
            </a>
          </div>
        </div> 
    </footer>
  );
};

export default Footer;
