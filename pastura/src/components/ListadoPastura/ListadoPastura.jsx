import React, { useState, useEffect } from "react";
import axios from "axios";

const styles = {
  Table: {
    width: "80%",
    marginTop: "210px",
  },
};

const ListadoPastura = () => {
  const [pasturas, setPasturas] = useState([]);

  useEffect(() => {
    axios
      .post("http://localhost:1234/pasturas/getAll")
      .then((response) => {
        setPasturas(response.data);
      })

    // empty dependency array means this effect will only run once (like componentDidMount in classes)
  }, []);

  return (
    <div style={styles.Table}>
      <div className="row">
        <div className="col-12">
          <h1>Listado de Pasturas</h1>
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
              </tr>
            </thead>
            <tbody>
              {pasturas.map((pastura) => (
                <tr key={pastura._id}>
                  <td>{pastura.Familia}</td>
                  <td>{pastura.Especie}</td>
                  <td>{pastura.TipoVegetativo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ListadoPastura;
