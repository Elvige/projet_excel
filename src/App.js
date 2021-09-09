import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import Header from "./composants/Header";
import Footer from "./composants/Footer";
import Liste from "./composants/Liste";
import Bd from "./composants/Bd";
import Home from "./composants/Home";
import Listebd from "./composants/Listebd";
import "./css/Home.css";
import "./css/Header.css";
import "./css/Footer.css";
import "./css/Liste.css";
import "./css/Bd.css";
import "./css/Listebd.css";

import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

class Fichier extends React.Component{

  render (){
    return <Router>
      <div>
        <Header/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/liste" component={Liste}/>
          <Route path="/bd" component={Bd}/>
          <Route path="/listebd" component={Listebd}/>
        </Switch> 
        <Footer/>
      </div>
    </Router>    
  }

}

export default Fichier;
