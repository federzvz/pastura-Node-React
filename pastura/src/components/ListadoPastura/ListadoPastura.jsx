import React from "react";

const styles = {
  Table: {
    width: "80%",
    marginTop: "210px",
  },
};

const ListadoPastura = () => {
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
                <th scope="col">GRAMINEAS</th>
                <th scope="col">Tipo Vegetativo</th>
                <th scope="col">Rizoma engrozado</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Pastura x</td>
                <td>Descripción de la pastura x</td>
                <td>Rizoma x</td>
              </tr>
              <tr>
                <td>Pastura x</td>
                <td>Descripción de la pastura x</td>
                <td>Rizoma x</td>
              </tr>
              <tr>
                <td>Pastura x</td>
                <td>Descripción de la pastura x</td>
                <td>Rizoma x</td>
              </tr>
              <tr>
                <td>Pastura x</td>
                <td>Descripción de la pastura x</td>
                <td>Rizoma x</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ListadoPastura;
