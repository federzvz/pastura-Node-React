import React from "react";
import TecnologoInformaticaLogo from "../../img/TipLogo.png";
import { MDBFooter, MDBContainer, MDBIcon, MDBBtn } from "mdb-react-ui-kit";
import { hover } from "@testing-library/user-event/dist/hover";

const styles = {
  Icon: {
    background: `url(${TecnologoInformaticaLogo})`,
    height: "40px",
    width: "40px",
    display: "block",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    border: "none",
    cursor: "pointer",

  }
};

const Footer2 = () => {
  return (
    <MDBFooter className="bg-dark text-center text-white">
      <MDBContainer className="p-4 pb-0">
        <section className="">
          <p className="d-flex justify-content-center align-items-center">
            <span className="me-3">Tecnologo Informático Paysandú</span>

            <a className="example" href="https://www.fing.edu.uy/tecnoinf/paysandu/index.html">
              <i style={styles.Icon}  ></i>
            </a>
          </p>
        </section>
      </MDBContainer>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2022 Desarrolladores:&nbsp;
        <a className="text-white" href="https://github.com/AyalaTon">
          Milton Ayala
        </a>
        <a>&nbsp;y&nbsp;</a>
        <a className="text-white" href="https://github.com/federzvz">
          Federico Rodriguez
        </a>
      </div>
    </MDBFooter>
  );
};
export default Footer2;
