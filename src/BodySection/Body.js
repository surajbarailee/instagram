import './Body.css'
import Story from './StorySection/Story'
import DefaultProfile from '../resources/default_profile.jpg'
const Body=()=>{
    return(
            <div className="bodyWrapper">
                <div className="bodyContent">
                    <Story/>
                    <div className='accountAndSuggestionWrapper'>
                        <div className="accountDetails">
                            <img src={DefaultProfile} alt="asd" width='56px' height='56px' />  
                             <div className="accountNameWrapper">
                                 <div className="username">
                                     <b>suraj_barailee</b>
                                </div>
                                 <div className="realName">
                                    Suraj Barailee
                                 </div>
                             </div>
                            <div className="accountSwitchWrapper">
                                 <div className="switch">
                                    Switch
                                 </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
    
    )
}

export default Body;