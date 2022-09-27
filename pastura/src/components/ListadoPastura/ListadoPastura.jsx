import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import CustomModal from "../DetallePastura/DetallePastura";
import Table from 'react-bootstrap/Table';

// const styles = {
//   Table: {
//     width: "80%",
    // marginTop: "210px",
//   },
// };
const Styles={
  width: "100%"
};
const Styles2={
  fontSize: "1.5rem"
};
const Styles3={
  fontSize: "1.2rem"
};


const mostrarElementoSeleccionado = (objeto) => { };

const filtrarPasturas = (pasturas, filtros) => {
  let pasturasFiltradas = pasturas;

  let filtrosAplicados = filtros.filtros;

  console.log(filtrosAplicados);

  if (filtrosAplicados.Mocollo1 !== "") {
    pasturasFiltradas = pasturasFiltradas.filter(
      (pastura) => pastura.Mocollo1 === filtrosAplicados.Mocollo1
    );
  }

  if (filtrosAplicados.ConsistenciaLigula !== "") {
    pasturasFiltradas = pasturasFiltradas.filter(
      (pastura) =>
        pastura.ConsistenciaLigula === filtrosAplicados.ConsistenciaLigula
    );
  }

  if (filtrosAplicados.FormaLamina !== "") {
    pasturasFiltradas = pasturasFiltradas.filter(
      (pastura) => pastura.FormaLamina === filtrosAplicados.FormaLamina
    );
  }

  if (filtrosAplicados.TipoLamina !== "") {
    pasturasFiltradas = pasturasFiltradas.filter(
      (pastura) => pastura.TipoLamina === filtrosAplicados.TipoLamina
    );
  }

  if (filtrosAplicados.TipoProductivo !== "") {
    pasturasFiltradas = pasturasFiltradas.filter(
      (pastura) => pastura.TipoProductivo === filtrosAplicados.TipoProductivo
    );
  }

  return pasturasFiltradas;
};

const ListadoPastura = (filtros) => {
  const [pasturas, setPasturas] = useState([]);
  const [pasturaActual, setPasturaActual] = useState([]);
  const [show, setShow] = useState(false);
  const handlePastura = (pastura) => setPasturaActual(pastura);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  useEffect(() => {
    axios.post("http://localhost:1234/pasturas/getAll").then((response) => {
      setPasturas(response.data);
    });

    // empty dependency array means this effect will only run once (like componentDidMount in classes)
  }, []);

  return (
    <Fragment>
      <div style={{marginTop: "210px"}}>
        <div className="row" >
          <div className="col-12">
            <h2>Listado de Pasturas</h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <Table striped bordered hover variant="dark" style={Styles}>
            <thead>
              <tr >
                <th style={Styles2}>Familia</th>
                <th style={Styles2}>Especie</th>
                <th style={Styles2}>Tipo Vegetativo</th>
                <th style={Styles2}>Tipo de Campo</th>
              </tr>
            </thead>
            <tbody>
              {filtrarPasturas(pasturas, filtros).map((pastura) => (
                <tr className="fila"
                  key={pastura._id}
                  onClick={() => {
                    handlePastura(pastura);
                    handleShow();
                  }}>
                  <td style={Styles3}>{pastura.Familia}</td>
                  <td style={Styles3}>{pastura.Especie}</td>
                  <td style={Styles3}>{pastura.TipoVegetativo}</td>
                  <td style={Styles3}>{pastura.TipoCampo}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>

      <CustomModal
        show={show}
        pastura={pasturaActual}
        close={() => handleClose()}
      />
    </Fragment>
  );
};

export default ListadoPastura;
