import React from "react";

class Liste extends React.Component{

  render (){
    return <div>
        <div className="title_table col-lg-8 offset-lg-2">
            <h2>La Liste des fichiers</h2>
        </div>
        <div className="div-table col-lg-10 offset-lg-1">
            <table className="table table-striped">
                <thead className="table-success">
                    <tr>
                        <th scope="col">Nom</th>
                        <th scope="col">Fichier</th>
                        <th scope="col">Table</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <td>Larry the Bird</td>
                        <td>Thornton</td>
                        <td>@twitter</td>
                    </tr>
                    <tr>
                        <td>Larry</td>
                        <td>Thorn</td>
                        <td>@skype</td>
                    </tr>
                </tbody>
            </table>
        </div> 
    </div>
  }

}

export default Liste;
