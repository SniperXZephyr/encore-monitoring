import { BrowserRouter as Router } from 'react-router-dom';
import ViewsComponent from './views/ViewsComponent';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Router>
        <ViewsComponent />
      </Router>
    </div>
  );
}

export default App;
