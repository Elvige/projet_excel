import React from "react";

class Listebd extends React.Component{

  render (){
    return <div>
        <div className="title_tablebd col-lg-8 offset-lg-2">
            <h2>La Liste des Base de données</h2>
        </div>
        <div className="div-tablebd col-lg-8 offset-lg-2">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Numero</th>
                        <th scope="col">Nom de la Base</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Otto</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Thornton</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Thornton</td>
                    </tr>
                </tbody>
            </table>
        </div> 
    </div>
  }

}

export default Listebd;
