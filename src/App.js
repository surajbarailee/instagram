import './App.css';
import NavBar from './NavBar/NavBar'
import Body from './BodySection/Body'
import Explore from './Explore/explore'
import Profile from './Profile/Profile'

import {Route,Redirect,BrowserRouter as Router} from 'react-router-dom'
import Inbox from './Inbox/Inbox';
function App() {
  return (
    <div style={{height:'100%',width:'100%'}}>
          <Router>
            <NavBar></NavBar>
                <Route exact path="/" component={Body} />
                <Route exact path="/home">
                  <Redirect to="/" />
                </Route>
                <Route exact path="/explore/" component={Explore} />
                <Route exact path="/inbox/" component={Inbox} />
                <Route exact path="/suraj_barailee/" component={Profile} />
                {/* <Route exact path="/" component={Body} /> */}
                {/* <Route exact path="/About" component={About} /> */}
          </Router>
    </div>

  );
}

export default App;
