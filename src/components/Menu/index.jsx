import React from "react";
import "./styles.css";

// import { Container } from './styles';

const Menu = () => {
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <h2>Odonto Clínica</h2>
        </div>
        <div className="options">
          <nav className="menu">
            <ul>
              <li><a href="#">Estrutura</a></li>
              <li><a href="#">Especialidades</a></li>
              <li><a href="#">Eventos</a></li>
              <li><a href="#">Whatsapp</a></li>
              <li><a href="#">Contato</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Menu;
