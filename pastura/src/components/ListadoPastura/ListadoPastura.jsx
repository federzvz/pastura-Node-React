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

  if (filtrosAplicados.TipoVegetativo !== "") {
    pasturasFiltradas = pasturasFiltradas.filter(
      (pastura) => pastura.TipoVegetativo === filtrosAplicados.TipoVegetativo
    );
  }

  if (filtrosAplicados.RizomaEngrosado !== "") {
    console.log(
      "pasturas:",
      pasturasFiltradas[0].RizomaEngrosado.toString(),
      "filtros:",
      filtrosAplicados.RizomaEngrosado
    );

    pasturasFiltradas = pasturasFiltradas.filter((pastura) => {
      if (pastura.RizomaEngrosado !== undefined) {
        return (
          pastura.RizomaEngrosado.toString() == filtrosAplicados.RizomaEngrosado
        );
      }
    });
  }

  if (filtrosAplicados.Mocollo1 !== "") {
    pasturasFiltradas = pasturasFiltradas.filter(
      (pastura) => pastura.Mocollo1 === filtrosAplicados.Mocollo1
    );
  }

  if (filtrosAplicados.Mocollo2 !== "") {
    pasturasFiltradas = pasturasFiltradas.filter(
      (pastura) => pastura.Mocollo2 === filtrosAplicados.Mocollo2
    );
  }

  if (filtrosAplicados.ConsistenciaLigula !== "") {
    pasturasFiltradas = pasturasFiltradas.filter(
      (pastura) =>
        pastura.ConsistenciaLigula === filtrosAplicados.ConsistenciaLigula
    );
  }

  if (filtrosAplicados.FormaLigula !== "") {
    pasturasFiltradas = pasturasFiltradas.filter(
      (pastura) => pastura.FormaLigula === filtrosAplicados.FormaLigula
    );
  }

  if (filtrosAplicados.Tamano !== "") {
    pasturasFiltradas = pasturasFiltradas.filter(
      (pastura) => pastura.Tamano === filtrosAplicados.Tamano
    );
  }

  if (filtrosAplicados.ColorLigula !== "") {
    pasturasFiltradas = pasturasFiltradas.filter(
      (pastura) => pastura.ColorLigula === filtrosAplicados.ColorLigula
    );
  }

  if (filtrosAplicados.FormaLamina !== "") {
    pasturasFiltradas = pasturasFiltradas.filter(
      (pastura) => pastura.FormaLamina === filtrosAplicados.FormaLamina
    );
  }

  if (filtrosAplicados.Canaliculada !== "") {
    pasturasFiltradas = pasturasFiltradas.filter(
      (pastura) => pastura.Canaliculada === filtrosAplicados.Canaliculada
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
    axios
      .post("https://pastura-node-react.federzvz.repl.co/pasturas/getAll")
      .then((response) => {
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
                  className="fila"
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
