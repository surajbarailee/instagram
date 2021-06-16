import './Body.css'
import Story from './StorySection/Story'
import ThreeDotMenu from '../resources/postNavMenu.svg'
import PostImage from '../resources/posts/post1.jpg'
import VideoPost from '../resources/ExploreResources/download.mp4'
import PlayButton from '../resources/play.png'

import {useRef,useState} from "react";

import DefaultProfile from '../resources/default_profile.jpg'
const Body=()=>{
    return(
            <div className="bodyWrapper">
                <div className="newsFeed">
                    <Story/>
                    <NewsFeed/>
                </div>
                <AccountSection/>
            </div>
    )
}


const NewsFeed = ()=>{
    return <div>
        <SinglePost/>
        <SinglePost video='true' videosource={VideoPost} />
        <SinglePost/>
        <SinglePost video='true' videosource={VideoPost} />

    </div>
}


const Post=(props)=>{
    const [isPlaying,setIsPlaying] = useState(false)   
    const videoRef = useRef(null);
    const onPlay=()=>{
        setIsPlaying(true)
    }
    const onPause=()=>{
        setIsPlaying(false)
    }
    const playorPause=()=>{
        if (videoRef.current.paused){

            videoRef.current.play();
        }        
        else{
            videoRef.current.pause();
        }
    }
    if (props.video==='true'){
        return(
            <div className="videoWrapper">
                <video src={VideoPost}  
                onPlay={onPlay}
                onPause={onPause}
                style={{width: '100%'}} 
                ref ={videoRef}/> 
                <div className="controlsWrapper" onClick={playorPause}>
                <img src={PlayButton} alt="" 
                className={`controls ${isPlaying ? "controlHidden":"controlShown"} `}
    
                />

                </div>
            </div>
        )
    }
    return(
        <img src={PostImage} alt="post by memenepal" className="postImage" />
    )
}


const SinglePost=(props)=>{
    const [comment,updateComment] = useState('')
        return( 
            <div className="singlePostWrapper">
                    <div className="postNav" style={{height:'60px'}}>
                        <div className="postNavLeft">
                            <div className="profileImageWrapper">
                                <img src={DefaultProfile} alt="profile_picture" className = "profileImage" />
                            </div>
                            <div className="postUsername">
                                <a href="https://instagram.com" className="profileLink">
                                memenepal
                                </a>
                            </div>
    
                        </div>
                        <div className="postNavRight">
                            <img src={ThreeDotMenu} alt="profile_picture" className = "dotMenu"/>
                        </div>
                    </div>
                    <div className="postBody" >
                        <Post video={props.video} src={props.videosource}  alt="post by memenepal"/>
                    </div>
                    <div className="postNav" style={{paddingLeft:'0px',paddingTop:'12px'}}>
    
                        <div className="postNavLeft" >
                                <div className="actionIcons">
                                    <svg aria-label="Like" fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path></svg>
                                </div>
                                <div className="actionIcons">
                                    <svg aria-label="Comment" fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path clipRule="evenodd" d="M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z" fill-rule="evenodd"></path></svg>                        </div>
                                <div className="actionIcons">
                                    <svg aria-label="Share Post" fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z"></path></svg>
                                </div>
            
                        </div>
                        <div className="postNavRight">
                            <svg aria-label="save" className="_8-yf5 " fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path d="M43.5 48c-.4 0-.8-.2-1.1-.4L24 29 5.6 47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1zM24 26c.8 0 1.6.3 2.2.9l15.8 16V3H6v39.9l15.8-16c.6-.6 1.4-.9 2.2-.9z"></path></svg>
                        </div>
    
                    </div>
    
                    <div className="commentsWrapper">
                        <div className="likeStatus">
                            Liked by <b>nanapatekar</b> and <b>others</b>
                        </div>
                        <div className="postDetails">
                            <b>nanapatekar</b> VOTE: Gareth Southgate will reveal his squad for the Euros tomorrow but who would you pick? 
                        </div>
                        <div className="commentStatus">
                            View all 300 comments
                        </div>
                        <div className="commentList">
                            <div className="singleComment">
                                <div className="usernameComment">
                                    <b>addonnishedon</b> Can't wait!
                                </div>
                                <div className="commentReaction">
                                    <svg aria-label="Like" fill="#262626" height="12" viewBox="0 0 48 48" width="12"><path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path></svg>
                                </div>
                            </div>
                            <div className="singleComment">
                                <div className="usernameComment">
                                    <b>addonnishedon</b> MY first comment YAY!!!
                                </div>
                                <div className="commentReaction">
                                    <svg aria-label="Like" fill="#262626" height="12" viewBox="0 0 48 48" width="12"><path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path></svg>
                                </div>
                            </div>
                        
                            <div className="time">
                                18 hrs ago
                            </div>
                        </div>
                    </div>
                    <hr style={{borderTop:'1px solid #DBDBDB'}}/>
                    
                    <div className= 'commentWrapper'>
                            <div className="smiley">
                                <svg fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path d="M24 48C10.8 48 0 37.2 0 24S10.8 0 24 0s24 10.8 24 24-10.8 24-24 24zm0-45C12.4 3 3 12.4 3 24s9.4 21 21 21 21-9.4 21-21S35.6 3 24 3z"></path><path d="M34.9 24c0-1.4-1.1-2.5-2.5-2.5s-2.5 1.1-2.5 2.5 1.1 2.5 2.5 2.5 2.5-1.1 2.5-2.5zm-21.8 0c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5-2.5-1.1-2.5-2.5zM24 37.3c-5.2 0-8-3.5-8.2-3.7-.5-.6-.4-1.6.2-2.1.6-.5 1.6-.4 2.1.2.1.1 2.1 2.5 5.8 2.5 3.7 0 5.8-2.5 5.8-2.5.5-.6 1.5-.7 2.1-.2.6.5.7 1.5.2 2.1 0 .2-2.8 3.7-8 3.7z"></path></svg>
                            </div>
                            <div className="commentBox">
                                <input type="text" placeholder='Add a comment...' className="inputComment" onChange={e=>updateComment(e.target.value)}/>
                            </div>
                            <div className={comment.length<=0?"postButton disabled" : "postButton enabled"}>
                                <b>Post</b>
                            </div>
                        </div>
                    
            </div>
       )
}
    




const AccountSection =()=>{
    return(
    <div className='accountSection' >
        <div className='accountDetailsWrapper' style={{position:'fixed'}}>
                <div className="accountDetails">
                    <div >
                        <img src={DefaultProfile} alt="profile_picture" width='56px' height='56px' style={{borderRadius:'56px'}}/>  
                    </div>
                    <div className="accountNameWrapper" style={{marginLeft:'16px'}}>
                        <div className="username">
                            <b>suraj_barailee</b>
                        </div>
                        <div className="accountDetail"  style={{fontWeight:'500',color:'rgba(142,142,142,1)'}}>
                            Suraj Barailee
                        </div>
                    </div>
                    <div style={{color:'rgba(0,149,246,1)',fontWeight:'600',fontSize:'11px'}}>
                        Switch
                    </div>
                </div>          
                <div className='suggestionHeader'style={{paddingBottom:'5px'}}>
                    <div >
                        Suggestions For You
                    </div>
                    <div>
                        See All
                    </div>

                </div>
                <div className="suggestionList">
                    <SuggestionSingleList/>
                    <SuggestionSingleList/>
                    <SuggestionSingleList/>
                    <SuggestionSingleList/>
                    <SuggestionSingleList/>      
                </div>
                <div className="helperLinks">
                    
                        <Links link='About' url='https://about.instagram.com'/>
                        <Links link='Help' url='https://about.instagram.com'/>
                        <Links link='Press' url='https://about.instagram.com'/>
                        <Links link='API' url='https://about.instagram.com'/>
                        <Links link='Jobs' url='https://about.instagram.com'/>
                        <Links link='Privacy' url='https://about.instagram.com'/>
                        <Links link='Terms' url='https://about.instagram.com'/>
                        <Links link='Locations' url='https://about.instagram.com'/>
                        <br/>
                        <Links link='Top' url='https://about.instagram.com'/>
                        <Links link='Accounts' url='https://about.instagram.com'/>
                        <Links link='Hashtags' url='https://about.instagram.com'/>
                        <Links link='Language' url='https://about.instagram.com'/>

                        <div style={{color :'#DEDEDE',
                        fontSize:'11px',
                        padding:'15px 0px 0px 5px',
                        fontWeight:'600'

                        
                        }}> 
                        &copy; 2021 INSTAGRAM FROM FACEBOOK 
                        </div>
                </div>
        </div>
    </div>
    )
}


const SuggestionSingleList =()=>{
    return(
    <div className="suggestionSingleList" >
        <div >
            <img src={DefaultProfile} alt="asd" width='32px' height='32px' />  
        </div>
        <div className="accountNameWrapper" style={{marginLeft:'10px'}}>
            <div className="username">
                <b>suraj_barailee</b>
            </div>
            <div className="accountDetail"  >
                New to instagramasdasdasdas
            </div>
        </div>
        <div style={{color:'rgba(0,149,246,1)',fontWeight:'600',fontSize:'11px'}}>
            Follow
        </div>
    </div>
    )
}


const Links=(props)=>{
    return (
        <li>
            <a href={props.url} className="links">{props.link}</a>
        </li>
    )
}


export default Body;



                        
                            