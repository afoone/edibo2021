import { BrowserRouter as Router } from 'react-router-dom'
import Routes from "./Routes";

function App() {
  return (
    <div className="app ui container">
      <Router>
        <Routes/>
      </Router>
    </div>
  );
}

export default App;
