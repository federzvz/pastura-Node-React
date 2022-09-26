import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import CustomModal from "../DetallePastura/DetallePastura";

const styles = {
  Table: {
    width: "80%",
    marginTop: "210px",
  },
};

const mostrarElementoSeleccionado = (objeto) => {};

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
      <div style={styles.Table}>
        <div className="row">
          <div className="col-12">
            <h1>Listado de Pasturas</h1>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <table className="table table-striped table-dark">
            <thead className="bg-primary table-dark">
              <tr>
                <th scope="col">Familia</th>
                <th scope="col">Especie</th>
                <th scope="col">Tipo Vegetativo</th>
                <th scope="col">Tipo de Campo</th>
              </tr>
            </thead>
            <tbody>
              {filtrarPasturas(pasturas, filtros).map((pastura) => (
                <tr
                  key={pastura._id}
                  onClick={() => {
                    handlePastura(pastura);
                    handleShow();
                  }}
                >
                  <td>{pastura.Familia}</td>
                  <td>{pastura.Especie}</td>
                  <td>{pastura.TipoVegetativo}</td>
                  <td>{pastura.TipoCampo}</td>
                </tr>
              ))}
            </tbody>
          </table>
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
