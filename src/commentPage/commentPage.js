import './CommentPage.css'
import commentpost from '../resources/commentpost.jpg'
import ThreeDotMenu from '../resources/postNavMenu.svg'
import defaultProfile from '../resources/default_profile.jpg'
import bipulchettri from '../resources/bipulchettri.jpg'
import post3a from '../resources/posts/post3a.jpg'

import dot from '../resources/dot.svg'
import commentProfile from '../resources/commentProfile.jpg'
import { useState } from 'react'
import { Link } from 'react-router-dom'


const SingleComment=(props)=>{
    
    var data = props.data.item;
    
    return(
    <div className="commentPageSingleComment">
                            <div className="singleComment" style={{justifyContent:'flex-start'}}>
                                <div>
                                    <img src={data['picture']} alt="profile_picture" className = "profileImage" style={{marginLeft:'15px'}} />
                                </div>
                                <div className="singleCommentWrap" style={{margin:'0px 0px 0px 15px',width:'100%',alignItems:'center'}}>
                                    <div>
                                        <b>{data['profile']}</b> {data['comment']}
                                    </div>
                                    <div className="commentReaction" style={{marginRight:'10px'}} >
                                        <button className='commentLikeButton'>
                                        <svg aria-label="Like" fill="#262626" height='10px' viewBox="0 0 48 48" width='10px'>
                                            <path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
                                        </svg>
                                        </button>
                                    </div>
                                    
                                </div>
                                
                            </div>
                            <div className="commentOptions">
                                <div className="commentTime" style={{fontWeight:'400'}}>
                                    {data['time']}
                                </div>
                                <div className="likes" style={{marginLeft:'15px'}}>
                                    {data['likes']}
                                </div>
                                <div className="reply" style={{marginLeft:'15px'}}>
                                    Reply
                                </div>
                            </div>
                    </div>
    )
}

const unlikedHeart = (height=24)=>{
    return(
        <svg aria-label="Like" fill="#262626" height={height} viewBox="0 0 48 48" width={height}>
            <path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
        </svg>
    )
}
const likedHeart=(height=24)=>{
    return(
        <svg aria-label="Unlike" class="_8-yf5 " color="#ed4956" fill="#ed4956" height={height} role="img" viewBox="0 0 48 48" width={height}>
            <path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path></svg>
    )
}

const CommentPage=()=>{
    
    const [liked, setliked] = useState(false)
    const [saved,setSaved] = useState(false)
    const [comment,updateComment] = useState('')
    return (
        <div className="commentPageWrapper">
           <div className="commentPageContainer">
                <div className="postSection">
                    <img src={commentpost} alt="post" className='commentPostImage'/>
                </div>
                <div className="commentSection" style={{position:'relative'}}>
                    <div className="postNav" style={{height:'60px',borderBottom: '1px solid rgba(239,239,239,1)'}}>
                        <div className="postNavLeft">
                            <div className="profileImageWrapper">
                                <img src={commentProfile} alt="profile_picture" className = "profileImage" />
                            </div>
                            <div className="postUsername">
                                <a href="https://instagram.com/netflix" className="CommentPageprofileLink">
                                netflix
                                </a>
                                <span className='CommentPageprofileLink dot' >
                                    <img src={dot} alt="dot" className="dot" />
                                </span>
                                <span className='CommentPageprofileLink'>
                                    Following
                                </span>
                            </div>
                        </div>
                        <div className="postNavRight">
                            <img src={ThreeDotMenu} alt="profile_picture" className = "dotMenu"/>
                        </div>
                    </div>
                    <div className="commentPost" style={{marginTop:'25px'}}>
                        <div style={{display:'flex' ,marginLeft:'15px'}}>
                            <img src={commentProfile} alt="profile_picture" className = "profileImage" />
                        </div>
                        <div style={{marginLeft:'15px'}}>
                            <div >
                                <a href="https://instagram.com/netflix" className="CommentPageprofileLink"
                                >
                                        netflix
                                </a>
                                <span className='postDescription'>

                                stranger things day welcome to California.
                                </span>
                                
                                <span className='postDescription' style={{fontSize:'12px'}}>10h</span>
                            </div>
                        </div>
                        
                    </div>
                    <div style={{marginTop:'20px'}}>
                    {
                        data.map((item,index)=>{
                            return(
                                <SingleComment data={{item}} />
                            )
                        })
                    }

                    </div>
                    <div className="LowerComment">
                    <div >
                        <div className="postNav" style={{paddingLeft:'0px',paddingTop:'12px'}}>
                            <div className="postNavLeft" >
                                    <div className="actionIcons" onClick={()=>setliked(!liked)}>
                                        <button className='commentLikeButton'>

                                        { liked ? likedHeart():   unlikedHeart()}
                                        </button>
                                    </div>
                                    <div className="actionIcons">
                                        
                                        <button className='commentLikeButton'>
                                        <Link to='/comment'>
                                        <svg aria-label="Comment" fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path clipRule="evenodd" d="M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z" fillRule="evenodd"></path></svg>                        
                                        </Link>
                                        </button>
                                    </div>
                                    <div className="actionIcons">
                                        <svg aria-label="Share Post" fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z"></path></svg>
                                    </div>
                
                            </div>
                            <div className="postNavRight">
                            <button className='commentLikeButton' onClick={()=>{setSaved(!saved)}}>
                                {
                                    !saved?
                                    <svg aria-label="save" className="_8-yf5 " fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path d="M43.5 48c-.4 0-.8-.2-1.1-.4L24 29 5.6 47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1zM24 26c.8 0 1.6.3 2.2.9l15.8 16V3H6v39.9l15.8-16c.6-.6 1.4-.9 2.2-.9z"></path></svg>
                                    :
                                    <svg aria-label="Remove" class="_8-yf5 " color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 48 48" width="24"><path d="M43.5 48c-.4 0-.8-.2-1.1-.4L24 28.9 5.6 47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1z"></path></svg>

                                }
                            </button>
                            </div>
        
                        </div>
                    </div>
                    <div className='likedbyWrapper'>
                        <div >
                            <img src={defaultProfile} alt="profile_picture" 
                            className = "profileImage"  style={{width:'20px'}}
                            />
                        </div>
                        <div className="likedBy">
                            Liked by <span>artist_priyanka10</span> and <span>others</span>
                        </div>
                    </div>
                    <div className='likedByDivTime'>
                        4 days Ago
                    </div>
                    <div className= 'commentWrapper likedBy'>
                            <div className="smiley">
                                <svg fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path d="M24 48C10.8 48 0 37.2 0 24S10.8 0 24 0s24 10.8 24 24-10.8 24-24 24zm0-45C12.4 3 3 12.4 3 24s9.4 21 21 21 21-9.4 21-21S35.6 3 24 3z"></path><path d="M34.9 24c0-1.4-1.1-2.5-2.5-2.5s-2.5 1.1-2.5 2.5 1.1 2.5 2.5 2.5 2.5-1.1 2.5-2.5zm-21.8 0c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5-2.5-1.1-2.5-2.5zM24 37.3c-5.2 0-8-3.5-8.2-3.7-.5-.6-.4-1.6.2-2.1.6-.5 1.6-.4 2.1.2.1.1 2.1 2.5 5.8 2.5 3.7 0 5.8-2.5 5.8-2.5.5-.6 1.5-.7 2.1-.2.6.5.7 1.5.2 2.1 0 .2-2.8 3.7-8 3.7z"></path></svg>
                            </div>
                            <div className="commentBox">
                                <input type="text" placeholder='Add a comment...' className="inputComment" onChange={(e)=>{updateComment(e.target.value)}}/>
                            </div>
                            <div className={comment.length<=0?"postButton disabled" : "postButton enabled"}>
                                <b>Post</b>
                            </div>
                    </div>
                    </div> 
           </div>
        </div>
        </div>
    )
}




const data = [
    {
        id: 1,
        profile: 'stranger_things',
        comment: 'cant wait for it to release',
        time: '10h',
        likes: '5 likes',
        picture:defaultProfile
    },
    {
        id: 2,
        profile: 'mks_tuart',
        comment: '😮😮😮👏👏👏',
        time: '6h',
        likes: '2 likes',
        picture:bipulchettri
    },
    {
        id: 3,
        profile: 'stranger_fans',
        comment: 'i cant wait 😍😍',
        time: '1h',
        likes: '1 likes',
        picture:post3a
    }

]

export default CommentPage;