import { BrowserRouter as Router, Switch } from "react-router-dom";
import "antd/dist/antd.css";


import Context from "./contexts/mainContext";
import Home from "./views/Home";
import Login from "./views/Login";
import PrivateRoute from "./components/router/PrivateRoute";
import PublicRoute from "./components/router/PublicRoute";

import './styles/core.css';

const App = () => {
  return (
    <Context.Provider>
      <Router>
        <Switch>
          <PublicRoute path="/login" component={Login} />
          <PrivateRoute path="/" component={Home} />
        </Switch>
      </Router>
    </Context.Provider>
  );
};

export default App;
