import React, { Fragment, useState } from "react";
import ListadoPastura from "../ListadoPastura/ListadoPastura";

const styles = {
  SelectElementTop: {},
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
    Apice: "",
    NervaduraCentralMarcada: "",
    Pelos: "",
    CicloVida: "",
    CicloProductivo: "",
    TipoProductivo: "",
  });

  return (
    <Fragment>
      <div className="container">
        <div style={styles.SelectElementTop}>
          <div className="row">
            <div className="col-4">
              <select
                id="TipoVegetativo"
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
            </div>
            <div className="col-4">
              <select
                id="RizomaEngrosado"
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
            </div>
            <div className="col-4">
              <select
                id="Mocollo1"
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
            </div>
          </div>
          <div className="row">
            <div className="col-4">
              <select
                id="Mocollo2"
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
                <option value="Intravaginal" onClick>
                  Intravaginal
                </option>
                <option value="Extravaginal">Extravaginal</option>
                <option value="Extravaginal principalmente">
                  Extravaginal principalmente
                </option>
                <option value="Intra o extra"> Intra o extra</option>
                <option value="Intravaginal o Extravaginal">
                  Intravaginal o Extravaginal
                </option>
                <option value="Intravaginal o Extravaginal principalmente">
                  Extravaginal (Intra en gral)
                </option>
              </select>
            </div>
            <div className="col-4">
              <select
                id="ConsistenciaLigula"
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
            </div>
            <div className="col-4">
              <select
                id="FormaLigula"
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
            </div>
          </div>
          <div className="row">
            <div className="col-4">
              <select
                id="Tamano"
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
            </div>
            <div className="col-4">
              <select
                id="ColorLigula"
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
                <option value="Castaño en hojas maduras">
                  Castaño en hojas maduras
                </option>
              </select>
            </div>
            <div className="col-4">
              <select
                id="FormaLamina"
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
                  -- Forma de la lamina --
                </option>
                <option value="Linear">Linear</option>
                <option value="Navicular">Navicular</option>
                <option value="Linear-Lanceolada">Linear-Lanceolada</option>
                <option value="Lanceolada">Lanceolada</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="col-4">
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
                id="Canaliculada"
              >
                <option value="" selected>
                  -- Canaliculada --
                </option>
                <option value="Canaliculada">Canaliculada</option>
                <option value="Acanalada">Acanalada</option>
                <option value="Ligeramente canaliculada">
                  Ligeramente canaliculada
                </option>
              </select>
            </div>
            <div className="col-4">
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
                id="TipoLamina"
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
            </div>
            <div className="col-4">
              <select
                class="form-select form-select-sm mb-3"
                aria-label=".form-select-lg example"
                style={styles.Filtro}
                onChange={(e) => {
                  setFiltros({
                    ...filtros,
                    Apice: e.target.value,
                  });
                }}
                id="Apice"
              >
                <option value="" selected>
                  -- Apice --
                </option>
                <option value="Agudo">Agudo</option>
                <option value="Obtuso">Obtuso</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="col-4">
              <select
                class="form-select form-select-sm mb-3"
                aria-label=".form-select-lg example"
                style={styles.Filtro}
                onChange={(e) => {
                  setFiltros({
                    ...filtros,
                    NervaduraCentralMarcada: e.target.value,
                  });
                }}
                id="NervaduraCentralMarcada"
              >
                <option value="" selected>
                  -- Nervadura central marcada --
                </option>
                <option value={true}>Si</option>
                <option value={false}>No</option>
              </select>
            </div>
            <div className="col-4">
              <select
                class="form-select form-select-sm mb-3"
                aria-label=".form-select-lg example"
                style={styles.Filtro}
                onChange={(e) => {
                  setFiltros({
                    ...filtros,
                    Pelos: e.target.value,
                  });
                }}
                id="Pelos"
              >
                <option value="" selected>
                  -- Pelos --
                </option>
                <option value="Glabra">Glabra</option>
                <option value="Glabra o Pubecente">Glabra o Pubecente</option>
                <option value="Pubecente">Pubecente</option>
                <option value="Pubescente">Pubescente</option>
                <option value="Glabra o Pubescente">Glabra o Pubescente</option>
                <option value="Poco a nada">Poco a nada</option>
              </select>
            </div>
            <div className="col-4">
              <select
                class="form-select form-select-sm mb-3"
                aria-label=".form-select-lg example"
                style={styles.Filtro}
                onChange={(e) => {
                  setFiltros({
                    ...filtros,
                    CicloVida: e.target.value,
                  });
                }}
                id="CicloVida"
              >
                <option value="" selected>
                  -- Ciclo de vida --
                </option>
                <option value="Anual">Anual</option>
                <option value="Perene">Perene</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="col-4">
              <select
                class="form-select form-select-sm mb-3"
                aria-label=".form-select-lg example"
                style={styles.Filtro}
                onChange={(e) => {
                  setFiltros({
                    ...filtros,
                    CicloProductivo: e.target.value,
                  });
                }}
                id="CicloProductivo"
              >
                <option value="" selected>
                  -- Ciclo Productivo --
                </option>
                <option value="Invernal">Invernal</option>
                <option value="Estival">Estival</option>
              </select>
            </div>
            <div className="col-4">
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
                id="TipoProductivo"
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
            <div className="col-4">
              <button
                type="button"
                class="btn btn-outline-secondary"
                style={styles.Filtro}
                onClick={() => {
                  // set all selects index to 0
                  document.getElementById("TipoVegetativo").selectedIndex = 0;
                  document.getElementById("RizomaEngrosado").selectedIndex = 0;
                  document.getElementById("Mocollo1").selectedIndex = 0;
                  document.getElementById("Mocollo2").selectedIndex = 0;
                  document.getElementById("ConsistenciaLigula").selectedIndex = 0;
                  document.getElementById("FormaLigula").selectedIndex = 0;
                  document.getElementById("Tamano").selectedIndex = 0;
                  document.getElementById("ColorLigula").selectedIndex = 0;
                  document.getElementById("FormaLamina").selectedIndex = 0;
                  document.getElementById("Canaliculada").selectedIndex = 0;
                  document.getElementById("TipoLamina").selectedIndex = 0;
                  document.getElementById("Apice").selectedIndex = 0;
                  document.getElementById("NervaduraCentralMarcada").selectedIndex = 0;
                  document.getElementById("Pelos").selectedIndex = 0;
                  document.getElementById("CicloVida").selectedIndex = 0;
                  document.getElementById("CicloProductivo").selectedIndex = 0;
                  document.getElementById("TipoProductivo").selectedIndex = 0;
                  setFiltros({
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
                    Apice: "",
                    NervaduraCentralMarcada: "",
                    Pelos: "",
                    CicloVida: "",
                    CicloProductivo: "",
                    TipoProductivo: "",
                  });


                }}
              >
                Limpiar filtros
              </button>
            </div>
          </div>
        </div>
        <ListadoPastura filtros={filtros} />
      </div>
    </Fragment>
  );
};
export default FiltroPastura;
