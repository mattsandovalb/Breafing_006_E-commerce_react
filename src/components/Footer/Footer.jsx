import React from "react";
import "./Footer.css"

function Footer() {
  return (
    <div>
      <div className="footer-content">
      <ul className="socials">
            <li><a href="#"><i className="fa-brands fa-facebook"></i> </a></li>
            <li><a href="#"><i className="fa-brands fa-twitter"></i> </a></li>
            <li><a href="#"><i className="fa-brands fa-youtube"></i> </a></li>
            <li><a href="#"><i className="fa-brands fa-instagram-square"></i> </a></li>
            <li><a href="#"><i className="fa-solid fa-envelope"></i> </a></li>
        </ul>
      </div>
      <div className="footer-bottom">
        <div className="col-md-2">
          <h6 className="text-uppercase font-weight-bold">
            <a href="#" className="nodecoration text-white">
              Sobre Nosotros
            </a>
          </h6>
        </div>

        <div className="col-md-2">
          <h6 className="text-uppercase font-weight-bold">
            <a href="#" className="nodecoration text-white">
              Medios de pago
            </a>
          </h6>
        </div>

        <div className="col-md-2">
          <h6 className="text-uppercase font-weight-bold">
            <a href="#" className="nodecoration text-white">
              Politicos de cookies
            </a>
          </h6>
        </div>

        <div className="col-md-2">
          <h6 className="text-uppercase font-weight-bold">
            <a href="#" className="nodecoration text-white">
              Politicos de Privacidad
            </a>
          </h6>
        </div>
      </div>
    </div>
  );
}

export default Footer;
