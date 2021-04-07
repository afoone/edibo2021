import React from 'react';
import Title from './Components/Title';
import Table from './Components/Table';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import InvoiceForm from './Components/InvoiceForm';
import InvoiceDetail from './Components/InvoiceDetail';
import { Redirect } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <Title title="Facturas"></Title>
      <br></br>
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to="/facturas" />
          </Route>

          <Route exact path="/facturas">
            <Table></Table>
          </Route>

          <Route exact path="/new">
            <InvoiceForm></InvoiceForm>
          </Route>

          <Route exact path="/facturas/:id">
            <InvoiceDetail></InvoiceDetail>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
