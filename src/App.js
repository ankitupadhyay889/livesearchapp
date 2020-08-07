import React from 'react';

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

import Home from "./web/Home";
import About from "./web/About";
import Contact from "./web/Contact";
import Services from "./web/Services";
import Navbar from "./web/Navbar";

import { Switch , Route, Redirect } from "react-router-dom";

const App = () => {

  return (
    <>

      <Navbar />
      
      <br /><br />

      <Switch>

        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/services" component={Services} />
        
        <Redirect to="/" />

      </Switch>

    </>
  
  );

};

export default App;