import React, { useContext } from "react";
import { ModoDarkContext } from "./oscuroContexto";

const Footer = () => {
  const { isModoOscuro } = useContext(ModoDarkContext);
  return (
    <footer className={isModoOscuro ? "dark" : "app"}>
      <div className="logo">
        <p>Powered by</p>
        <img src="/images/DH.png" alt="DH-logo" width="200px" />
      </div>
      <div className="social">
        <img src="/images/ico-instagram.png" alt="instagram" width="20px" />
        <img src="/images/ico-facebook.png" alt="facebook" width="20px" />
        <img src="/images/ico-tiktok.png" alt="tiktok" width="20px" />
        <img src="/images/ico-whatsapp.png" alt="whatsapp" width="20px" />
      </div>
    </footer>
  );
};

export default Footer;

