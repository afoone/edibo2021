import React, { Component } from "react";
import axios from "axios";

export default class InvoiceTable extends Component {
  constructor(props) {
    super(props);
    // inicializar el estado
    this.state = {
      facturas: [],
    };
  }

  componentDidMount() {
    // traernos las facturas
    axios.get("http://localhost:8000/facturas").then((res) =>
      this.setState({
        facturas: res.data,
      })
    );
  }

  render() {
    return (
      <div>
        <table className="ui celled table">
          <thead>
            <tr>
              <th>Numero de factura</th>
              <th>Cliente</th>
              <th>Importe</th>
              <th>Fecha</th>
            </tr>
          </thead>
          <tbody>
            {this.state.facturas.map((factura, index) => (
              <tr key={index}>
                <td>{factura.id}</td>
                <td>{factura.cliente}</td>
                <td>{factura.importe}</td>
                <td>{factura.fecha}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
