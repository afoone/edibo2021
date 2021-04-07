import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


export class InvoiceForm extends Component {

    constructor(props){
        super(props)
        this.state={
            facturas:[],
            newClient:'',
            newDate:'',
            newImporte:0
        }
    }

    componentDidMount() {
      axios
        .get("http://localhost:8000/facturas")
        .then((res) => {
          this.setState({
            facturas: res.data,
          });
        })
        .catch((err) => console.error(err));
    }
  
    borrarCliente = (id) => {
      axios.delete(`http://localhost:8000/facturas/${id}`).then(
        this.setState(
          {
            facturas: this.state.facturas.filter(i => i.id !== id)
          }
        )
      )
    }
  
    render() {
      console.log("render");
  
      return (
        <div className="facturas-list">

    <table class="ui single line table">
    <thead>
        <tr>
        <th>Número de factura</th>
        <th>cliente </th>
        <th> fecha</th>
        <th>importe</th>
              <th> </th>
        </tr>
    </thead>
    <tbody>
    {this.state.facturas.map((i) => (
              <tr>
                <td><Link to={`/facturas/${i.id}`}>{i.id}</Link></td>
                <td>{i.cliente} </td>
                <td>{i.fecha}</td>
                <td>{i.importe}</td>
                <td>
                <button class="negative ui button" onClick={()=>this.borrarCliente(i.id)}>Eliminar factura</button>
                </td>
                </tr>
            ))}
    </tbody>
    </table>
        <Link to="/new">
        <button class="positive ui button">Nueva factura</button>
        </Link>
        </div>
      );
    }
  }
  
  export default InvoiceForm;