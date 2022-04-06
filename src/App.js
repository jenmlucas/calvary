import React from "react";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div>
    <Router>
      <Nav></Nav>
      <Switch>
      <Route exact path="/home" component={Home} />
      <Route exact path="/about" component={About} />
      </Switch>
    </Router>
      <Footer></Footer>
      </div>
  );
}

export default App;
