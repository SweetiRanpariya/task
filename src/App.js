import Contact from './component/Contact';
import Home from './component/Home';
import Form from './component/Form';
import Table from './component/Table';

import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from './component/Navbar';

function App() {
  return (
    <Router>
      <div>
        <Navbar/>
        <Switch>
              <Route path="/Home">
                <Home />
              </Route>
              <Route path="/Contact">
                <Contact/>
              </Route>
              <Route path="/Form">
                <Form/>
              </Route>
              <Route path="/Table">
                <Table/>
              </Route>
              
            </Switch>
      </div>
  </Router>
  );
}

export default App;
