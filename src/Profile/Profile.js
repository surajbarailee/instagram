import './Profile.css';
import { useState } from 'react';
import DefaultProfile from '../resources/default_profile.jpg'
import PostFiller from '../resources/postfiller.jpg'
import PlayStoreImage from '../resources/playstore.png'
import AppStoreImage from '../resources/appstore.png' 


import Image1 from '../resources/savedResources/image1.jpg'
import Image2 from '../resources/savedResources/image2.jpg'
import Image3 from '../resources/savedResources/image3.jpg'
import Image4 from '../resources/savedResources/image4.jpg'
import Image5 from '../resources/savedResources/image5.jpg'
import Image6 from '../resources/savedResources/image6.jpg'
import { Link } from 'react-router-dom';

const Posts=()=>{
    return (
        <div className='profilePostWrapper'>
            <div className='leftPostDiv'>
                <img src={PostFiller} alt="postfiller" width='380px' height='380px'/>
            </div>

            <div className='rightPostDiv'>
                <div className='firstMessage'>
                    Start capturing and sharing your moments.
                </div>
                <div className='secondMessage'>
                    Get the app to share your first photo or video.
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
    )

}


const Igtv=()=>{
    return (
        <div className='igtvWrapper'>
            <div style={{fontFamily:'inherit',fontSize:'14px',fontWeight:600,color:'rgba(142,142,142,1)'}}>
                Videos
            </div>
            <div>
                <a href='/'>
                    <button className='uploadButton'>
                        Upload
                    </button>
                </a>
            </div>
        </div>
    )
}


const Saved=()=>{
    return (
        <div>
            <div className='igtvWrapper savedWrapper'>
                    <div style={{fontFamily:'inherit',fontSize:'12px',fontWeight:400,color:'rgba(142,142,142,1)'}}>
                        Only you can see what you've saved
                    </div>
                    <div>
                        <a href='/'>
                            <button className='newCollectionButton'>
                                + New Collection 
                            </button>
                        </a>
                    </div>
            </div>
            <div className="galleryWrapper" style={{width:'100%',padding:'0px',margin:'0px'}}>
                    <div className="galleryContainer" style={{width:'100%',padding:'0px',margin:'0px'}}>
                        <div className="savedImageArea">
                            <div className="savedPictureWrapper">
                                <img src={Image1} alt="picture1" className='singlePicture' />
                            </div>
                            <div className="savedPictureWrapper">
                                <img src={Image2} alt="picture1" className='singlePicture' />
                            </div>
                            <div className="savedPictureWrapper">
                                <img src={Image3} alt="picture1" className='singlePicture' />
                            </div>
                            <div className="savedPictureWrapper">
                                <img src={Image4} alt="picture1" className='singlePicture' />
                            </div>
                            <div className="savedPictureWrapper">
                                <img src={Image5} alt="picture1" className='singlePicture' />
                            </div>
                            <div className="savedPictureWrapper">
                                <img src={Image6} alt="picture1" className='singlePicture' />
                            </div>
                        </div>
                    </div>

            </div>
        </div>     
    )

}



const Profile =()=>{
    const [showdiv, updateShowDiv] = useState('POSTS')
    const [showSettingOption, setshowSettingOption] = useState(false)

    function updatesettingOption(value){
        var scrollbar = document.getElementById('navWrapper').parentNode;
        if (value===true){
            scrollbar.style.overflow='hidden'
        }
        else{
            scrollbar.style.overflow=''
        }
        setshowSettingOption(value)
    }

    return (
        <div className="profileContainer" >
            <div className="profileWrapper">
                <div className="topDiv">
                    <div className="profileDiv">
                        <div>
                            <img src={DefaultProfile} alt="suraj_barailee" className='profilePicture'/>
                        </div>
                    </div>
                    <div className="profileDetails">
                        <div className='profileNameLine'>
                            <div className='mainProfileName'>
                                suraj_barailee
                            </div>
                            <div>
                                <a href="/accounts/edit">
                                    <button className='EditButton' >
                                        Edit Profile
                                    </button>
                                </a>
                            </div>
                            <div className='settingIcon' onClick={()=>{updatesettingOption(true)}}>
                                <svg aria-label="Options" className="_8-yf5 " fill="#262626" height="24" role="img" viewBox="0 0 48 48" width="24">
                                    <path clip-rule="evenodd" d="M46.7 20.6l-2.1-1.1c-.4-.2-.7-.5-.8-1-.5-1.6-1.1-3.2-1.9-4.7-.2-.4-.3-.8-.1-1.2l.8-2.3c.2-.5 0-1.1-.4-1.5l-2.9-2.9c-.4-.4-1-.5-1.5-.4l-2.3.8c-.4.1-.8.1-1.2-.1-1.4-.8-3-1.5-4.6-1.9-.4-.1-.8-.4-1-.8l-1.1-2.2c-.3-.5-.8-.8-1.3-.8h-4.1c-.6 0-1.1.3-1.3.8l-1.1 2.2c-.2.4-.5.7-1 .8-1.6.5-3.2 1.1-4.6 1.9-.4.2-.8.3-1.2.1l-2.3-.8c-.5-.2-1.1 0-1.5.4L5.9 8.8c-.4.4-.5 1-.4 1.5l.8 2.3c.1.4.1.8-.1 1.2-.8 1.5-1.5 3-1.9 4.7-.1.4-.4.8-.8 1l-2.1 1.1c-.5.3-.8.8-.8 1.3V26c0 .6.3 1.1.8 1.3l2.1 1.1c.4.2.7.5.8 1 .5 1.6 1.1 3.2 1.9 4.7.2.4.3.8.1 1.2l-.8 2.3c-.2.5 0 1.1.4 1.5L8.8 42c.4.4 1 .5 1.5.4l2.3-.8c.4-.1.8-.1 1.2.1 1.4.8 3 1.5 4.6 1.9.4.1.8.4 1 .8l1.1 2.2c.3.5.8.8 1.3.8h4.1c.6 0 1.1-.3 1.3-.8l1.1-2.2c.2-.4.5-.7 1-.8 1.6-.5 3.2-1.1 4.6-1.9.4-.2.8-.3 1.2-.1l2.3.8c.5.2 1.1 0 1.5-.4l2.9-2.9c.4-.4.5-1 .4-1.5l-.8-2.3c-.1-.4-.1-.8.1-1.2.8-1.5 1.5-3 1.9-4.7.1-.4.4-.8.8-1l2.1-1.1c.5-.3.8-.8.8-1.3v-4.1c.4-.5.1-1.1-.4-1.3zM24 41.5c-9.7 0-17.5-7.8-17.5-17.5S14.3 6.5 24 6.5 41.5 14.3 41.5 24 33.7 41.5 24 41.5z" fill-rule="evenodd">
                                    </path>
                                </svg>
                            </div>
                        </div>
                        <div className="postDetails">
                            <div>
                                <b>0</b> posts
                            </div>
                            <div className="">
                                <b>161</b> followers
                            </div>
                            <div className="">
                                <b>519</b> following
                            </div>
                        </div>
                        <div className="realName">
                            <div>
                                Suraj Barailee
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bottomDiv">
                    <div className="headers">
                        <div className={`headersTag ${showdiv==='POSTS' ? "headerTopBorder":""} `}
                        onClick={()=>{updateShowDiv('POSTS')}}>
                                <div className='headersSvg'>
                                    <svg   fill="#262626" height="12" role="img" viewBox="0 0 48 48" width="12"><path clip-rule="evenodd" d="M45 1.5H3c-.8 0-1.5.7-1.5 1.5v42c0 .8.7 1.5 1.5 1.5h42c.8 0 1.5-.7 1.5-1.5V3c0-.8-.7-1.5-1.5-1.5zm-40.5 3h11v11h-11v-11zm0 14h11v11h-11v-11zm11 25h-11v-11h11v11zm14 0h-11v-11h11v11zm0-14h-11v-11h11v11zm0-14h-11v-11h11v11zm14 28h-11v-11h11v11zm0-14h-11v-11h11v11zm0-14h-11v-11h11v11z" fill-rule="evenodd"></path></svg>
                                </div>
                                <div className='headersName'>
                                    POSTS
                                </div>
                        </div>
                        <div className={`headersTag ${showdiv==='IGTV' ? "headerTopBorder":""} `}
                        onClick={()=>{updateShowDiv('IGTV')}}>
                            <div className='headersSvg'>
                                <svg  fill="#8e8e8e" height="12" role="img" viewBox="0 0 48 48" width="12"><path d="M41 10c-2.2-2.1-4.8-3.5-10.4-3.5h-3.3L30.5 3c.6-.6.5-1.6-.1-2.1-.6-.6-1.6-.5-2.1.1L24 5.6 19.7 1c-.6-.6-1.5-.6-2.1-.1-.6.6-.7 1.5-.1 2.1l3.2 3.5h-3.3C11.8 6.5 9.2 7.9 7 10c-2.1 2.2-3.5 4.8-3.5 10.4v13.1c0 5.7 1.4 8.3 3.5 10.5 2.2 2.1 4.8 3.5 10.4 3.5h13.1c5.7 0 8.3-1.4 10.5-3.5 2.1-2.2 3.5-4.8 3.5-10.4V20.5c0-5.7-1.4-8.3-3.5-10.5zm.5 23.6c0 5.2-1.3 7-2.6 8.3-1.4 1.3-3.2 2.6-8.4 2.6H17.4c-5.2 0-7-1.3-8.3-2.6-1.3-1.4-2.6-3.2-2.6-8.4v-13c0-5.2 1.3-7 2.6-8.3 1.4-1.3 3.2-2.6 8.4-2.6h13.1c5.2 0 7 1.3 8.3 2.6 1.3 1.4 2.6 3.2 2.6 8.4v13zM34.6 25l-9.1 2.8v-3.7c0-.5-.2-.9-.6-1.2-.4-.3-.9-.4-1.3-.2l-11.1 3.4c-.8.2-1.2 1.1-1 1.9.2.8 1.1 1.2 1.9 1l9.1-2.8v3.7c0 .5.2.9.6 1.2.3.2.6.3.9.3.1 0 .3 0 .4-.1l11.1-3.4c.8-.2 1.2-1.1 1-1.9s-1.1-1.2-1.9-1z"></path></svg>
                            </div>
                            <div className='headersName'>
                                IGTV
                            </div>
                        </div>
                        <div className={`headersTag ${showdiv==='SAVED' ? "headerTopBorder":""} `}
                        onClick={()=>{updateShowDiv('SAVED')}}>
                            <div className='headersSvg'>
                                <svg  fill="#8e8e8e" height="12" role="img" viewBox="0 0 48 48" width="12"><path d="M43.5 48c-.4 0-.8-.2-1.1-.4L24 29 5.6 47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1zM24 26c.8 0 1.6.3 2.2.9l15.8 16V3H6v39.9l15.8-16c.6-.6 1.4-.9 2.2-.9z"></path></svg>
                            </div>
                            <div className='headersName'>
                                SAVED
                            </div>
                        </div>
                        <div className={`headersTag ${showdiv==='TAGGED' ? "headerTopBorder":""} `}
                        onClick={()=>{updateShowDiv('TAGGED')}}>
                            <div className='headersSvg'>
                                <svg fill="#8e8e8e" height="12" role="img" viewBox="0 0 48 48" width="12"><path d="M41.5 5.5H30.4c-.5 0-1-.2-1.4-.6l-4-4c-.6-.6-1.5-.6-2.1 0l-4 4c-.4.4-.9.6-1.4.6h-11c-3.3 0-6 2.7-6 6v30c0 3.3 2.7 6 6 6h35c3.3 0 6-2.7 6-6v-30c0-3.3-2.7-6-6-6zm-29.4 39c-.6 0-1.1-.6-1-1.2.7-3.2 3.5-5.6 6.8-5.6h12c3.4 0 6.2 2.4 6.8 5.6.1.6-.4 1.2-1 1.2H12.1zm32.4-3c0 1.7-1.3 3-3 3h-.6c-.5 0-.9-.4-1-.9-.6-5-4.8-8.9-9.9-8.9H18c-5.1 0-9.4 3.9-9.9 8.9-.1.5-.5.9-1 .9h-.6c-1.7 0-3-1.3-3-3v-30c0-1.7 1.3-3 3-3h11.1c1.3 0 2.6-.5 3.5-1.5L24 4.1 26.9 7c.9.9 2.2 1.5 3.5 1.5h11.1c1.7 0 3 1.3 3 3v30zM24 12.5c-5.3 0-9.6 4.3-9.6 9.6s4.3 9.6 9.6 9.6 9.6-4.3 9.6-9.6-4.3-9.6-9.6-9.6zm0 16.1c-3.6 0-6.6-2.9-6.6-6.6 0-3.6 2.9-6.6 6.6-6.6s6.6 2.9 6.6 6.6c0 3.6-3 6.6-6.6 6.6z"></path></svg>
                            </div>
                            <div className='headersName'>
                                TAGGED
                            </div>
                        </div>
                    </div>

                    {showdiv==='POSTS' && <Posts/>}
                    {showdiv==='IGTV' && <Igtv/>}
                    {showdiv==='SAVED' && <Saved/>}
                    {showdiv==='TAGGED' && <Posts/>}

                </div>
            <ProfileFooter/>
            </div>  
        {showSettingOption &&     
        <div className= 'settingOptionWrapper'>
            <div className="settingOption">
                <div style={{borderTopLeftRadius:'12px',borderTopRightRadius:'12px'}}>
                    <Link to ='../accounts/edit'>
                        <button className="singleSettingOption" style={{borderTopLeftRadius:'12px',borderTopRightRadius:'12px'}}>
                            Change Password
                        </button>
                    </Link>
                </div>
                <div>
                <Link to ='../nametag'>
                    <button className="singleSettingOption">
                        Nametag
                    </button>
                </Link>
                </div>
                <div>
                <Link to ='../accounts/edit'>
                    <button className="singleSettingOption">
                        Apps and Websites
                    </button>
                </Link>
                </div>
                <div>
                <Link to ='../accounts/edit'>
                    <button className="singleSettingOption">
                        Notifications
                    </button>
                </Link>
                </div>
                <div>
                <Link to ='../accounts/edit'>
                    <button className="singleSettingOption">
                        Privacy And Security
                    </button>
                </Link>
                </div>
                <div>
                <Link to ='../accounts/edit'>
                    <button className="singleSettingOption">
                        Login Activity
                    </button>
                </Link>
                </div>
                <div>
                <Link to ='../accounts/edit'>
                    <button className="singleSettingOption">
                        Emails from Instagram
                    </button>
                </Link>
                </div>
                <div>
                <Link to ='../accounts/edit'>
                    <button className="singleSettingOption">
                        Report a Problem
                    </button>
                </Link>
                </div>
                <div>

                    <button className="singleSettingOption">
                        Log Out
                    </button>
                </div>
                <div style={{borderBottomLeftRadius:'12px',borderBottomRightRadius:'12px'}}>
                    <button className="singleSettingOption" style={{borderBottomLeftRadius:'12px',borderBottomRightRadius:'12px'}}
                    onClick={()=>{updatesettingOption(false)}}
                    
                    
                    
                    >
                        Cancel
                    </button>
                </div>

                
            </div>









        </div>
        
        }
        
        </div>
    )
}


const ProfileFooter=()=>{
    return (
        <div style={{
        padding:'15px 0px 0px 0px',
        backgroundColor:'rgba(250,250,250,1)',
        bottom:'0'
        }}>
            <div className='footerLinks'>
                <div>
                    <a href="https://about.instagram.com">About</a>
                </div>
                <div>
                    <a href="https://about.instagram.com/blog">Blog</a>
                </div>
                <div>
                    <a href="https://instagram.com/about/jobs">Jobs</a>
                </div>
                <div>
                    <a href="https://help.instagram.com">Help</a>
                </div>
                <div>
                    <a href="https://developers.facebook.com">API</a>
                </div>
                <div>
                    <a href="https://instagram.com/legal/privacy">Privacy</a>
                </div>
                <div>
                    <a href="https://instagram.com/legal/terms">Terms</a>
                </div>
                <div>
                    <a href="https://instagram.com/directory/profiles">Top Accounts</a>
                </div>
                <div>
                    <a href="https://instagram.com/directory/hashtags">HashTags</a>
                    </div>
                <div>
                    <a href="https://instagram.com/explore/locations/">Locations</a>
                </div>
            </div>
        <div className='footerLinks footerCopyRight'>
            <div>
            English&nbsp;&nbsp;
            <span style={{display: 'inline-block', transform: 'rotate(180deg)'}}>
                <svg aria-label="Down Chevron Icon" className="_8-yf5 " fill="#8e8e8e" height="12" role="img" viewBox="0 0 48 48" width="12"><path d="M40 33.5c-.4 0-.8-.1-1.1-.4L24 18.1l-14.9 15c-.6.6-1.5.6-2.1 0s-.6-1.5 0-2.1l16-16c.6-.6 1.5-.6 2.1 0l16 16c.6.6.6 1.5 0 2.1-.3.3-.7.4-1.1.4z"></path></svg>
            </span>

            </div>  
            <div style={{display:'flex',alignItems:'center'}}>
            &copy; 2021 Instagram from facebook
            </div>
        </div>
        </div>
    )
}






export default Profile;
export {ProfileFooter};