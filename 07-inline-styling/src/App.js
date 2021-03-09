import { BrowserRouter as Router } from 'react-router-dom'
import Routes from "./Routes";
import { Provider } from 'react-redux'
import store from './redux/store'

function App() {
  return (
    <div className="app ui container">
      <Provider store={store}>
        <Router>
          <Routes />
        </Router>
      </Provider>
    </div>
  );
}

export default App;
