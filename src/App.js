import './App.css';
import NavBar from './NavBar/NavBar'
import Body from './BodySection/Body'
import Explore from './Explore/explore'
import Profile from './Profile/Profile'
import EditProfile from './Profile/Edit Profile/EditProfie';


import {Route,Redirect,BrowserRouter as Router} from 'react-router-dom'
import Inbox from './Inbox/Inbox';
import NameTag from './Profile/NameTag/NameTag';
import Login from './login/login';
function App() {
  return (
    <div style={{height:'100%',width:'100%'}}>
          <Router>
            {/* <NavBar></NavBar>
                <Route exact path="/" component={Body} />
                <Route exact path="/home">
                  <Redirect to="/" />
                </Route>
                <Route exact path="/explore/" component={Explore} />
                <Route exact path="/inbox/" component={Inbox} />
                <Route exact path="/suraj_barailee/" component={Profile} />
                <Route exact path="/accounts/edit" component={EditProfile} />
                <Route exact path="/nametag" component={NameTag} /> */}
                {/* <Route exact path="/" component={Body} /> */}
                {/* <Route exact path="/About" component={About} /> */}
                <Login></Login>
          </Router>
    </div>

  );
}

export default App;
