import React from "react";

class Home extends React.Component{

  constructor (props){
    super(props);
    this.state = {
      numero:0
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (e){
    const name = e.target.name
    this.setState({
      [name]: e.target.value
    })
  }

  handleSubmit (e){
    e.preventDefault() //pour empecher la soumission classic 
    const data = JSON.stringify(this.state)
    console.log(data)
    this.setState({
      numero:0
    })
    
  }

  render (){
    return <div className="contenu container col-lg-6 col-md-6 col-sm-12 col-xs-12">
        <h4 className="titre">
            Sauvegarder votre document excel.
        </h4>
        <form className="div-form" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="nom">Nom du fichier: </label>
            <input type="texte" className="form-control" id="nom" name="nom"/>
          </div>
          <div className="form-group">
            <label htmlFor="fichier">Selectionner le fichier excel: </label>
            <input type="file" className="form-control" id="fichier" name="fichier"/>
          </div>

          <div className="form-group">
            <label htmlFor="bd">Choisir la Base de donnée: </label>
            <select className="form-select" id="bd" name="bd">
              <option selected value="bd1">bd One</option>
              <option value="bd2">bd Two</option>
              <option value="bd3">bd Three</option>
            </select>
          </div>  

          <div className="form-group">
            <label htmlFor="table">Choisir la Table: </label>
            <select className="form-select" id="table" name="table">
              <option selected value="tb1">Table One</option>
              <option value="tb2">Table Two</option>
              <option value="tb3">Table Three</option>
            </select>
          </div>  

          <div className="form-group">  
            <label htmlFor="numero1">Numero de classeur1: </label>
            {/* <input type="number" className="form-control" id="numero" name="numero" value={this.state.numero1} onChange={this.handleChange}/> */}
            <input type="number" className="form-control" id="numero1" name="numero1" defaultValue="0"/>  
          </div>
          

          <div className="div-bouton">
            <button type="submit" className="btn btn-success col-12">Enregistrer</button>
          </div>

          {/* {JSON.stringify(this.state)}   */}
          
        </form>
        
    </div> 
  }

}

export default Home;
