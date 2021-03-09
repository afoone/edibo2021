import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import InvoiceDetail from './components/InvoiceDetail';
import InvoiceForm from './components/InvoiceForm';
import InvoiceTable from './components/InvoiceTable'


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <InvoiceTable></InvoiceTable>
          </Route>
          <Route exact path="/new">
            <InvoiceForm></InvoiceForm>
          </Route>
          <Route exact path="/:id">
            <InvoiceDetail></InvoiceDetail>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
