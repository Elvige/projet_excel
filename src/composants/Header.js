import React from "react";
import { Link} from "react-router-dom";

export default class Header extends React.Component{


  render (){
    return <div className="div-nav col-lg-12">
        <nav className="navbar navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img src={process.env.PUBLIC_URL + "/Excel-logo.png"} alt="logo" width="40" height="28" className="d-inline-block align-text-top"/>
              MEL
            </a>
            <ul className="nav nav-pills">
              <Link to="/">
                <li className="nav-item actif">
                  <a className="nav-link" aria-current="page" href="/">Accueil</a>
                </li>
              </Link>
              <Link to="/liste">  
                <li className="nav-item">
                  <a className="nav-link" href="liste">Liste des Fichiers</a>
                </li>
              </Link>
              <Link to="/bd"> 
                <li className="nav-item">
                  <a className="nav-link" href="bd">Connexion à la base de données</a>
                </li>
              </Link>
              <Link to="/listebd"> 
                <li className="nav-item">
                  <a className="nav-link" href="listebd">Liste base de données</a>
                </li>
              </Link>
            </ul>
          </div>
        </nav>
    </div>
  }

}