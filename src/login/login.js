import './login.css';
import PlayStoreImage from '../resources/playstore.png'
import AppStoreImage from '../resources/appstore.png' 
const Login=()=>{

    return (
    <div className='loginWrapper'>
        <div className="leftWrapper">

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
                    <button className='loginButton' >
                        Log In
                    </button>
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
    )

}

export default Login