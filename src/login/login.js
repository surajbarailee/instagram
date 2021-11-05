import './login.css';
import PlayStoreImage from '../resources/playstore.png'
import AppStoreImage from '../resources/appstore.png' 
import LoginImage from '../resources/login.png'
import { ProfileFooter } from '../Profile/Profile';
import { Link } from 'react-router-dom';
import screenshots1 from '../resources/screenshots/screenshots1.jpg'
import screenshots2 from '../resources/screenshots/screenshots2.jpg'
import screenshots3 from '../resources/screenshots/screenshots3.jpg'
import screenshots4 from '../resources/screenshots/screenshots4.jpg'
import screenshots5 from '../resources/screenshots/screenshots5.jpg'


// create function to change the src of the image to the next image in the array 
// every 3 seconds
const changeImage = () => {
    let images = [screenshots1, screenshots2, screenshots3, screenshots4, screenshots5]
    let i = 0;
    setInterval(() => {
        if (i === images.length - 1) {
            i = 0;
        } else {
            i++;
        }
        if(window.location.pathname==='/login'){
            
            document.getElementById("screenshots").className='screenshots'
            document.getElementById('screenshots').src = images[i];
            window.requestAnimationFrame(function(time) {
                window.requestAnimationFrame(function(time) {
                    document.querySelector(".screenshots").className = 'screenshots fade-in';
                });
            });
        }
        }, 3000);
}

window.addEventListener('load', (event) => {
    changeImage()
  });

const Login=(props)=>{
    return (
        <div className="login-container">
            <div className='loginWrapper'>
                <div className="leftWrapper">
                    <div className="imageWrapper">
                        <img src={LoginImage} alt="Phone"/>
                        <img src={screenshots1} alt="screenshot" className="screenshots fade-in" id="screenshots"/>
                    </div>
                </div>
                <div className="rightWrapper">
                    <div className="signIn">
                        <div className='signInlogoWrapper'>
                            <div className="logo"/>
                        </div> 
                        <div className=" inputLoginWrapper username">
                            <input className='inputLogin' type="text" placeholder='Phone number,username, or email'
                                autoCapitalize='off'
                                maxLength='75'
                                name='username'
                                autoCorrect='off'
                            />
                        </div>
                        <div className=" inputLoginWrapper password">
                            <input className='inputLogin' type="password" placeholder='Password'/>
                        </div>
                        <div className="login">
                            <Link className='loginButton' to='/'>
                                Log In
                            </Link>
                        </div>
                        <div className="orWrapper">
                            <div className='orLines'> 
                            </div>
                            <div>
                                OR
                            </div>
                            <div className='orLines'>    
                            </div>
                        </div>
                        <div className="loginFacebook">
                            <button className='loginFacebookButton'>
                                <div className="facebookIcon">

                                </div>
                                <div>
                                    Log in with Facebook
                                </div>
                            </button>
                        </div>
                        <div className="forgotPassword">
                            Forgot Password?
                        </div>
                    </div>
                    <div className="SignUpWrapper">
                        <div className="signUp">

                            Dont have an account? <label className='signuplink'>Sign up</label>
                        </div>
                        
                    </div>
                    <div className="getapp">
                                <div className='getappText'>
                                    Get the app.
                                </div>
                                <div className='storeLinks'>
                            <div style={{paddingRight:'4px'}}>
                                <a href="https://apps.apple.com/app/instagram/id389801252?vt=li">
                                    <img src={AppStoreImage} alt="appstore link" width='136px'/>
                                </a>
                            </div>
                            <div style={{paddingLeft:'4px'}}>
                                <a href="https://play.google.com/store/apps/details?id=com.instagram.android">
                                        <img src={PlayStoreImage} alt="playstore link" width='136px' />
                                </a>
                            </div>
                        </div>
                    </div>
                    
                </div>
                

                
                
            </div>
            <ProfileFooter/>
        </div>
    )
}

export default Login