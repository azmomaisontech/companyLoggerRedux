import React, { Fragment, useEffect } from "react";
import NavBar from "./components/layouts/NavBar";
import AddBtn from "./components/layouts/AddBtn";
import Logs from "./components/logs/Logs";
import AddLogModal from "./components/logs/AddLogModal";
import EditLogModal from "./components/logs/EditLogModal";
import AddTechModal from "./components/tech/AddTechModal";
import TechListModal from "./components/tech/TechListModal";
import { Provider } from "react-redux";
import store from "./store";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import "./App.css";

const App = () => {
  useEffect(() => {
    M.AutoInit();
  }, []);

  return (
    <Provider store={store}>
      <Fragment>
        <NavBar />
        <div className="container">
          <Logs />
        </div>
        <AddBtn />
        <AddLogModal />
        <EditLogModal />
        <AddTechModal />
        <TechListModal />
      </Fragment>
    </Provider>
  );
};

export default App;
