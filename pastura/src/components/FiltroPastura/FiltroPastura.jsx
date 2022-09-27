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
    TipoVegetativo: "",
    RizomaEngrosado: "",
    Mocollo1: "",
    Mocollo2: "",
    ConsistenciaLigula: "",
    FormaLigula: "",
    Tamano: "",
    ColorLigula: "",
    FormaLamina: "",
    Canaliculada: "",
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
              TipoVegetativo: e.target.value,
            });
          }}
        >
          <option value="" selected>
            -- Tipo Vegetativo --
          </option>
          <option value="Cespitoso" onClick>
            Cespitoso
          </option>
          <option value="Estolonifero">Estolonifero</option>
          <option value="Rizomatozo">Rizomatozo</option>
          <option value="Estolonifero-rizomatozo">
            Estolonifero-rizomatozo
          </option>
          <option value="Estoloniferorizomatiforme">
            Estoloniferorizomatiforme
          </option>
        </select>
        <select
          class="form-select form-select-sm mb-3"
          aria-label=".form-select-lg example"
          style={styles.Filtro}
          onChange={(e) => {
            setFiltros({
              ...filtros,
              RizomaEngrosado: e.target.value,
            });
          }}
        >
          <option value="" selected>
            -- Rizoma Engrosado --
          </option>
          <option value={true}>Si</option>
          <option value={false}>No</option>
        </select>
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
          <option value="" selected>
            -- Mocollo1 --
          </option>
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
              Mocollo2: e.target.value,
            });
          }}
        >
          <option value="" selected>
            -- Mocollo2 --
          </option>
          <option value="Intravaginal" onClick>Intravaginal</option>
          <option value="Extravaginal">Extravaginal</option>
          <option value="Extravaginal principalmente">Extravaginal principalmente</option>
          <option value="Intra o extra"> Intra o extra</option>
          <option value="Intravaginal o Extravaginal">Intravaginal o Extravaginal</option>
          <option value="Intravaginal o Extravaginal principalmente">Extravaginal (Intra en gral)</option>
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
          <option value="" selected>
            -- Consistecia de la ligula --
          </option>
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
              FormaLigula: e.target.value,
            });
          }}
        >
          <option value="" selected>
            -- Forma de la ligula --
          </option>
          <option value="Truncada y dientada">Truncada y dientada</option>
          <option value="Truncada">Truncada</option>
          <option value="Aguda">Aguda</option>
          <option value="Redondeada">Redondeada</option>
        </select>
        <select
          class="form-select form-select-sm mb-3"
          aria-label=".form-select-lg example"
          style={styles.Filtro}
          onChange={(e) => {
            setFiltros({
              ...filtros,
              Tamano: e.target.value,
            });
          }}
        >
          <option value="" selected>
            -- Tamaño --
          </option>
          <option value="Chica">Chica</option>
          <option value="Largos">Largos</option>
          <option value="Muy chica">Muy chica</option>
          <option value="Mas ancha que alta">Mas ancha que alta</option>
          <option value="Muy aguda">Muy aguda</option>
          <option value="No visible">No visible</option>
          <option value="Alta">Alta</option>
          <option value="Corta">Corta</option>
          <option value="Grande">Grande</option>
          <option value="Visible">Visible</option>
        </select>
        <select
          class="form-select form-select-sm mb-3"
          aria-label=".form-select-lg example"
          style={styles.Filtro}
          onChange={(e) => {
            setFiltros({
              ...filtros,
              ColorLigula: e.target.value,
            });
          }}
        >
          <option value="" selected>
            -- Color de la ligula --
          </option>
          <option value="Cataño">Cataño</option>
          <option value="Blanca o castaño">Blanca o castaño</option>
          <option value="Castaño">Castaño</option>
          <option value="Castaña">Castaña</option>
          <option value="Castaño en hojas maduras">Castaño en hojas maduras</option>
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
          <option value="" selected>
            -- Froma de la lamina --
          </option>
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
              Canaliculada: e.target.value,
            });
          }}
        >
          <option value="" selected>
            -- Canaliculada --
          </option>
          <option value="Canaliculada">Canaliculada</option>
          <option value="Acanalada">Acanalada</option>
          <option value="Ligeramente canaliculada">Ligeramente canaliculada</option>
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
          <option value="" selected>
            -- Tipo de lamina --
          </option>
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
          <option value="" selected>
            -- Tipo productivo --
          </option>
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
