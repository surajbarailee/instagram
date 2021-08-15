
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
                    <div style={{margin :'2px 32px 0px 126px'}}>
                        <img src={ProfileImage} alt="profile_picture" width='38' height='38'
                            style={{borderRadius:'38px'
                            }}/>
                    </div>
                    <div>
                        <div style={{fontSize:'20px'}}>
                            suraj_barailee
                        </div>
                        <div style={{
                            fontSize:'14px inherit',
                            color:'#0095f6',
                            fontWeight:600,
                            marginTop:'-1px'
                            
                            }}>
                            Change Profile Photo
                        </div>
                    </div>
                </div>

                <div className='name sameLine'>
                <div style={{margin :'2px 32px 0px 126px'}}>
                        Name
                    </div>
                    <div>
                        <div>
                            <input type="text" value='Suraj Barailee' style={{minWidth:'355px',height:'27px'}}/>
                        </div>
                        <div style={{fontSize:'12px',color:'rgba(142,142,142,1)'}}>
                        Help people discover your account by using the name you're known by:<br/>
                        either your full name, nickname, or business name.
                        <div>

                        You can only change your name twice within 14 days.
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditProfile;