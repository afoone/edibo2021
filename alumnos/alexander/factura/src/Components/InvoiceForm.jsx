import React, { Component } from 'react';
import axios from 'axios';
import { v4 as uuid } from 'uuid'
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
    
    addClient = () => {
      const newClientObject = {
        id:uuid(),
        cliente: this.state.newClient,
        fecha: this.state.newDate,
        importe:this.state.newImporte,
      };

      axios
        .post("http://localhost:8000/facturas", newClientObject) 
        .then(
          res => this.setState({
           facturas: [...this.state.facturas, res.data],
          })
        )
        .catch(console.error);
      
    };

    upDateClient = (facturas) => {
      const newClientObject = {
        cliente: this.state.newClient,
        fecha: facturas.fecha,
        importe:facturas.importe,
      };

      axios
        .put(`http://localhost:8000/facturas/${facturas.id}`, newClientObject) 
        .then(
          res => this.setState({
            facturas: [...this.state.facturas.filter(i=>i.id!==facturas.id), res.data],
          })
        )
        .catch(console.error);
      
    };
  
    onChangeInputCliente = (e) => {
      this.setState({
        newClient: e.target.value,
      });
    };

    onChangeInputFecha= (e) => {
      this.setState({
        newDate: e.target.value,
      });
    };

    onChangeInputImporte = (e) => {
      this.setState({
        newImporte: e.target.value,
      });
    };
  
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
          
          <form>

          <br></br><label>Cliente</label>
          <input
            type="text"
            onChange={(e) => this.onChangeInputCliente(e)}
            value={this.state.newClient}
          ></input>

            <br></br><label>Producto</label>
            <input
            type="text"
            onChange={(e) => this.onChangeInputFecha(e)}
            value={this.state.newDate}
          ></input>

            <br></br><label>Precio</label>
            <input
            type="text"
            onChange={(e) => this.onChangeInputImporte(e)}
            value={this.state.newImporte}
          ></input>
          </form>

          <Link to="/facturas"><button class="ui button active">Ir a facturas</button></Link>
          <button onClick={this.addClient} class="ui primary button">Guardar</button>
          
        </div>
      );
    }
  }
  
  export default InvoiceForm;