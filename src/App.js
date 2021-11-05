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
import {useLocation} from 'react-router-dom';
import {useState} from 'react';
function App() {
  return (
    <div style={{height:'100%',width:'100%'}}>
          <Router>
            <Route path='/login' component={Login}/>
            <>
              <DefaultContainer/>
            </>
          </Router>
    </div>

  );
}

   

const DefaultContainer = () => {
  const location = useLocation();
  const [locationvalue, setlocationvalue] = useState(location.pathname)
  console.log(locationvalue)
  return (
    <>
      {(window.location.pathname!=='/login')?<NavBar/>:''} 
      <Route exact path="/" component={Body} />
      <Route exact path="/home">
        <Redirect to="/" />
      </Route>
      <Route exact path="/explore/" component={Explore} />
      <Route exact path="/inbox/" component={Inbox} />
      <Route exact path="/suraj_barailee/" component={Profile} />
      <Route exact path="/accounts/edit" component={EditProfile} />
      <Route exact path="/nametag" component={NameTag} />
      
    </>
  )
}

export default App;
