import React from "react";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import OurBeliefs from "./pages/OurBeliefs";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div>
    <Router>
      <Nav></Nav>
      <Switch>
      <Route exact path="/home" component={Home} />
      <Route exact path="/beliefs" component={OurBeliefs} />
      </Switch>
    </Router>
      <Footer></Footer>
      </div>
  );
}

export default App;
