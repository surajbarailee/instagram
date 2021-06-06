import './App.css';
import NavBar from './NavBar/NavBar'
import Body from './BodySection/Body'
import Explore from './Explore/explore'

import {Route,Redirect,BrowserRouter as Router} from 'react-router-dom'
function App() {
  return (
    <div>
          <Router>
            <NavBar></NavBar>
                <Route exact path="/" component={Body} />
                <Route exact path="/home">
                  <Redirect to="/" />
                </Route>
                <Route exact path="/explore/" component={Explore} />
                {/* <Route exact path="/" component={Body} /> */}
                {/* <Route exact path="/About" component={About} /> */}
          </Router>
    </div>

  );
}

export default App;
