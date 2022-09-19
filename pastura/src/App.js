import { Fragment } from "react";
import "./App.css";
import FiltroPastura from "./components/FiltroPastura/FiltroPastura";
import Footer from "./components/Footer/Footer";
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
      <Footer />
    </Fragment>
  );
}

export default App;
