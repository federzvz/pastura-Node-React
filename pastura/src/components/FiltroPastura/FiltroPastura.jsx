import React, { Fragment } from "react";

const styles = {
  SelectElementTop: {
    position: "absolute",
    top: "0",
    width: "50%",
    marginTop: "5px",
  },
  Filtro: {
    fontSize: "0.7rem",
  },
};

const FiltroPastura = () => {
  return (
    <Fragment>
          <div style={styles.SelectElementTop}>
            <select
              class="form-select form-select-sm mb-3"
              aria-label=".form-select-lg example"
              style={styles.Filtro}
            >
              <option selected>-- Mocollo --</option>
              <option value="Semi rollizo">Semi rollizo</option>
              <option value="Comprimido">Comprimido</option>
              <option value="Semi Rolliza">Semi Rolliza</option>
              <option value="Rollizo">Rollizo</option>
            </select>
            <select
              class="form-select form-select-sm mb-3"
              aria-label=".form-select-lg example"
              style={styles.Filtro}
            >
              <option selected>-- Consistecia de la ligula --</option>
              <option value="Membranacea">Membranacea</option>
              <option value="Disuelta en pelos">Disuelta en pelos</option>
              <option value="Mixta">Mixta</option>
            </select>
            <select
              class="form-select form-select-sm mb-3"
              aria-label=".form-select-lg example"
              style={styles.Filtro}
            >
              <option selected>-- Froma de la lamina --</option>
              <option value="Linear">Linear</option>
              <option value="Navicular">Navicular</option>
              <option value="Linear-Lanceolada">Linear-Lanceolada</option>
              <option value="Lanceolada">Lanceolada</option>
            </select>
            <select
              class="form-select form-select-sm mb-3"
              aria-label=".form-select-lg example"
              style={styles.Filtro}
            >
              <option selected>-- Tipo de lamina --</option>
              <option value="Plana">Plana</option>
              <option value="Navicular-Plegada">Navicular-Plegada</option>
              <option value="Navicular">Navicular</option>
              <option value="Plegada">Plegada</option>
              <option value="Navicular a plana">Navicular a plana</option>
            </select>
            <select
              class="form-select form-select-sm mb-3"
              aria-label=".form-select-lg example"
              style={styles.Filtro}
            >
              <option selected>-- Tipo productivo --</option>
              <option value="Plana">Tierno</option>
              <option value="Navicular-Plegada">Duro</option>
              <option value="Navicular">Ordinario</option>
              <option value="Plegada">Tierno-Ordinario</option>
            </select>
          </div>
    </Fragment>
  );
};
export default FiltroPastura;
