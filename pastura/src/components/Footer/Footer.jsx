import React from "react";
import TecnologoInformaticaLogo from "../../img/TipLogo.png";

//inline styles
const styles = {
  footer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000",
    color: "#fff",
    padding: "25px 0",
    fontSize: "0.7rem",
  },
  image:{
    //cool image design
    width: "30px",
    height: "30px",
    borderRadius: "50%",
    border: "1px solid #fff",
    objectFit: "cover",
    objectPosition: "center",
    marginBottom: "10px"
  }
};

const Footer = () => {
  return (
    <footer style={styles.footer}>
        <img style={styles.image} src={TecnologoInformaticaLogo} alt="Tecnologo Informatica"/>
        <p>Desarrollado por: <strong>Federico Rodríguez y Milton Ayala.</strong></p>

    </footer>
  );
};
export default Footer;
