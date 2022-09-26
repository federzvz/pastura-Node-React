import { Fragment } from "react";
import "./App.css";
import FiltroPastura from "./components/FiltroPastura/FiltroPastura";
import Footer from "./components/Footer/Footer";
import Footer2 from "./components/Footer/Footer2";
import ListadoPastura from "./components/ListadoPastura/ListadoPastura";

function App() {
  return (
    <Fragment>
      <div className="App">
        <header className="App-header">
          <FiltroPastura />
          <ListadoPastura />
        </header>
      </div>
      {/* <Footer /> */}
      <Footer2 />
    </Fragment>
  );
}

export default App;
