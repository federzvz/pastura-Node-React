import React, { Fragment, useState } from "react";
import ListadoPastura from "../ListadoPastura/ListadoPastura";

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
  const [filtros, setFiltros] = useState({
    Mocollo1: "",
    ConsistenciaLigula: "",
    FormaLamina: "",
    TipoLamina: "",
    TipoProductivo: "",
  });

  return (
    <Fragment>
      <div style={styles.SelectElementTop}>
        <select
          class="form-select form-select-sm mb-3"
          aria-label=".form-select-lg example"
          style={styles.Filtro}
          onChange={(e) => {
            setFiltros({
              ...filtros,
              Mocollo1: e.target.value,
            });
          }}
        >
          <option value="" selected>-- Mocollo --</option>
          <option value="Semi rollizo" onClick>
            Semi rollizo
          </option>
          <option value="Comprimido">Comprimido</option>
          <option value="Semi Rolliza">Semi Rolliza</option>
          <option value="Rollizo">Rollizo</option>
        </select>
        <select
          class="form-select form-select-sm mb-3"
          aria-label=".form-select-lg example"
          style={styles.Filtro}
          onChange={(e) => {
            setFiltros({
              ...filtros,
              ConsistenciaLigula: e.target.value,
            });
          }}
        >
          <option value="" selected>-- Consistecia de la ligula --</option>
          <option value="Membranacea">Membranacea</option>
          <option value="Disuelta en pelos">Disuelta en pelos</option>
          <option value="Mixta">Mixta</option>
        </select>
        <select
          class="form-select form-select-sm mb-3"
          aria-label=".form-select-lg example"
          style={styles.Filtro}
          onChange={(e) => {
            setFiltros({
              ...filtros,
              FormaLamina: e.target.value,
            });
          }}
        >
          <option value="" selected>-- Froma de la lamina --</option>
          <option value="Linear">Linear</option>
          <option value="Navicular">Navicular</option>
          <option value="Linear-Lanceolada">Linear-Lanceolada</option>
          <option value="Lanceolada">Lanceolada</option>
        </select>
        <select
          class="form-select form-select-sm mb-3"
          aria-label=".form-select-lg example"
          style={styles.Filtro}
          onChange={(e) => {
            setFiltros({
              ...filtros,
              TipoLamina: e.target.value,
            });
          }}
        >
          <option value="" selected>-- Tipo de lamina --</option>
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
          onChange={(e) => {
            setFiltros({
              ...filtros,
              TipoProductivo: e.target.value,
            });
          }}
        >
          <option value="" selected>-- Tipo productivo --</option>
          <option value="Tierno">Tierno</option>
          <option value="Duro">Duro</option>
          <option value="Ordinario">Ordinario</option>
          <option value="Tierno-Ordinario">Tierno-Ordinario</option>
        </select>
      </div>
      <ListadoPastura filtros={filtros} />
    </Fragment>
  );
};
export default FiltroPastura;
