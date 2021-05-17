import './Body.css'
import Story from './StorySection/Story'
import DefaultProfile from '../resources/default_profile.jpg'
const Body=()=>{
    return(
            <div className="bodyWrapper">
                <div className="newsFeed">
                        <Story/>
                        NewsFeed
                </div>
                <div className='accountSection'>
                    <div className='accountDetailsWrapper'>
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
                            <div className='suggestionHeader'>
                                <div >
                                    Suggestions For You
                                </div>
                                <div>
                                    See All
                                </div>

                            </div>
                            <div className="suggestionList">
                                <div className="suggestionSingleList">
                                    <div>
                                        <img src={DefaultProfile} alt="asd" width='35px' height='35px' />  
                                    </div>
                                    <div className="accountNameWrapper">
                                        <div className="username">
                                            <b>suraj_barailee</b>
                                        </div>
                                        <div className="accountDetail"  >
                                            New to instagram
                                        </div>
                                    </div>
                                    <div  >
                                                Follow
                                    </div>
                                
                                </div>
                                
                              
                            </div>
                            <div className="helperLinks">

                                About Help Press API Jobs Privacy Terms Locations Top Accounts Hashtags Language


                            </div>
                        
                    </div>
                </div>
            </div>    
    
    )
}

export default Body;



                        
                            