import Navigate from './Navigate';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ApplicantDetails from './ApplicantDetails';
import Shortlist from './Shortlist';
import Reject from './Reject';


function App() {

  return (
    <Router>
      <div className="App">
      <Navigate />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/ApplicantDetails/:id">
              <ApplicantDetails />
            </Route>
            <Route path="/shortlisted">
              <Shortlist />
            </Route>

            <Route path="/rejected">
              <Reject />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
