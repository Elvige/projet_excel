import React from "react";

class Bd extends React.Component{

  render (){
    return <div className="divform col-lg-10 offset-lg-1">
      <div className="titreform">
        <h3>Paramètre de connexion à la base de donnée</h3>
      </div>
      <div className="trait">
      </div>
      <form className="formulaire" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="servername">Nom du serveur: </label>
          <input type="texte" className="form-control" id="servername" name="servername" placeholder="localhost"/>
        </div>
        <div className="form-group">  
          <label htmlFor="bdname">Nom de la base de donnée: </label>
          <input type="texte" className="form-control" id="bdname" name="bdname"/>  
        </div>
        <div className="form-group">  
          <label htmlFor="username">Nom utilisateur: </label>
          <input type="texte" className="form-control" id="username" name="username" placeholder="root"/>  
        </div>
        <div className="form-group">  
          <label htmlFor="password">Mot de passe: </label>
          <input type="texte" className="form-control" id="password" name="password"/>  
        </div>
        

        <div className="div-bouton">
          <button type="submit" className="btn btn-success col-12">Sauvegarder</button>
        </div>

        {/* {JSON.stringify(this.state)}   */}
        
      </form>
    </div> 
  }

}

export default Bd;
