
import './EditProfile.css'
import ProfileImage from '../../resources/profile_pic.jpg'


const EditProfile=()=>{
return <div className="profileContainer editProfileWrapper" >
    <div className="editLeftDiv" >
        <div className="editColumnOptions active">
            Edit Profile
        </div>
        <div className="editColumnOptions">
            Change Password
        </div>
        <div className="editColumnOptions">
            Apps And Websites
        </div>
        <div className="editColumnOptions">
            Email and SMS
        </div>
        <div className="editColumnOptions">
            Push Notification
        </div>
        <div className="editColumnOptions">
            Manage Contacts
        </div>
        <div className="editColumnOptions">
            Privacy and Security
        </div>
        <div className="editColumnOptions">
           Login Activity
        </div>
        <div className="editColumnOptions">
            Emails from Instagram
        </div>
        <div className="editColumnOptions" style={{color: '#0095f6'}}>
            Switch to Professional Account
        </div>
    </div>
    <div className="editRightDiv">
        <Edit/>
    </div>






</div>
}



const Edit=()=>{
    return(
        <div className='editWrapper'>
            <div className="editOptionBodyWrapper">
                <div className="changeProfile sameLine">
                    <div style={{display:'flex',alignItems:'baseline',flexDirection:'row-reverse',}}>
                        <img src={ProfileImage} alt="profile_picture" width='38' height='38'
                            style={{borderRadius:'38px'
                            }}/>
                    </div>
                    <div>
                        <div style={{fontSize:'20px'}}>
                            suraj_barailee
                        </div>
                        <div style={{
                            fontSize:'14px',
                            fontFamily:'inherit',
                            color:'#0095f6',
                            fontWeight:600,
                            marginTop:'-1px'
                            
                            }}>
                            Change Profile Photo
                        </div>
                    </div>
                </div>

                <div className='sameLine'>
                    <div style={{
                    fontWeight:'600',
                    flexDirection:'row-reverse',
                    

                    }}>
                        Name
                    </div>
                    <div>
                        <div>
                            <input type="text" className ='editInput' value='Suraj Barailee' />
                        </div>
                        <div style={{fontSize:'12px',color:'#8e8e8e',padding:'10px 0px',fontWeight:'400'}}>
                        Help people discover your account by using the name you're<br/>
                         known by: either your full name, nickname, or business name.
                        <div style={{padding:'7px 0px'}}>
                            You can only change your name twice within 14 days.
                        </div>
                        </div>
                    </div>
                </div>  
                <div className='sameLine'>
                    <div style={{
                    fontWeight:'600',
                    flexDirection:'row-reverse',
                    
                    }}>
                        Username
                    </div>
                    <div>
                        <div>
                            <input type="text" className ='editInput' value='suraj_barailee' />
                        </div>
                        <div style={{fontSize:'12px',color:'#8e8e8e',padding:'10px 0px',fontWeight:'400'}}>
                        In most cases, you'll be able to change your username back to <br/>
                        suraj_barailee for another 14 days. <a href='https://help.instagram.com/876876079327341'>Learn More</a>
                        
                        </div>
                    </div>
                </div>
                <div className='sameLine'>
                    <div style={{
                    fontWeight:'600',
                    flexDirection:'row-reverse',
                    
                    }}>
                        Website
                    </div>
                    <div>
                        <div>
                            <input type="text" className ='editInput' value='suraj_barailee' />
                        </div>
                        
                    </div>
                </div>
                <div className='sameLine'>
                    <div style={{
                    fontWeight:'600',
                    flexDirection:'row-reverse',
                    
                    }}>
                        Bio
                    </div>
                    <div style={{fontFamily:'inherit'}}>
                        <div>
                            <textarea type="text" className ='editInput' />
                        </div>
                        <div style={{fontSize:'12px',color:'#8e8e8e',padding:'10px 0px',fontWeight:'400',fontFamily:'inherit'}}>
                            
                        <div style={{fontSize:'14px',fontWeight:'600',paddingBottom:'2px'}}>Personal Information</div>
                            Provide your personal information, even if the account is used for a<br/>
                            business, a pet or something else. This won't be a part of your <br/>
                            public profile.
                        </div>
                        
                    </div>
                </div>
                <div className='sameLine'>
                    <div style={{
                    fontWeight:'600',
                    flexDirection:'row-reverse',
                    
                    }}>
                        Email
                    </div>
                    <div>
                        <div>
                            <input type="text" className ='editInput' value='test@testing.com' />
                        </div>
                        
                    </div>
                </div>
                <div className='sameLine'>
                    <div style={{
                    fontWeight:'600',
                    flexDirection:'row-reverse',
                    
                    }}>
                        Phone Number
                    </div>
                    <div>
                        <div>
                            <input type="text" className ='editInput' value='+977 9000000000' />
                        </div>
                    </div>
                </div>
                <div className='sameLine'>
                    <div style={{
                    fontWeight:'600',
                    flexDirection:'row-reverse',
                    
                    }}>
                        Gender
                    </div>
                    <div>
                        <div>
                            <input type="text" className ='editInput' value='Male' />
                        </div>
                    </div>
                </div>
                <div className='sameLine'>
                    <div style={{
                    fontWeight:'600',
                    flexDirection:'row-reverse',
                    
                    }}>
                        Similar Account Suggestions
                    </div>
                    <div>
                        <div>
                            <input type="checkbox"  />
                            Include your account when <br/> 
                            recommending similar accounts <br/>
                            people might want to follow.[?]
                        </div>
                        <div>
                        </div>
                        <div>
                            <button className='submitButton' disabled> Submit</button>
                            <button className = 'disableLink'>Temporarilt disable my account</button>
                        </div>
                    </div>
                    
                </div>


            
            
            </div>
        </div>
    )
}

export default EditProfile;