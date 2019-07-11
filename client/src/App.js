import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import Inventory from "./pages/Inventory";
import ProductDetails from "./pages/ProductDetails";
import Channels from "./pages/Channels";
import Support from "./pages/Support";
import NoMatch from "./pages/NoMatch";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.connectToServer = this.connectToServer.bind(this);
  }
  connectToServer() {
    fetch("localhost:3001/");
  }
  componentDidMount() {
    this.connectToServer();
  }

  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact="exact" path="/home" component={Landing} />
            <Route exact="exact" path="/dashboard" component={Dashboard} />
            <Route exact="exact" path="/inventory" component={Inventory} />
            <Route
              exact="exact"
              path="/productdetails"
              component={ProductDetails}
            />
            <Route exact="exact" path="/channels" component={Channels} />
            <Route exact="exact" path="/support" component={Support} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
