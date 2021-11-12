import './CommentPage.css'
import commentpost from '../resources/commentpost.jpg'
import ThreeDotMenu from '../resources/postNavMenu.svg'

import dot from '../resources/dot.svg'
import commentProfile from '../resources/commentProfile.jpg'
const CommentPage=()=>{
    console.log('CommentPage')
    return (
        <div className="commentPageWrapper">
           <div className="commentPageContainer">
                <div className="postSection">
                    <img src={commentpost} alt="post" className='commentPostImage'/>
                </div>
                <div className="commentSection">
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
                    <div className="commentPost">
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
                    <div className="comments">
                        
                            <div className="singleComment" style={{justifyContent:'flex-start'}}>
                                <div>
                                    <img src={commentProfile} alt="profile_picture" className = "profileImage" style={{marginLeft:'15px'}} />
                                </div>
                                <div className="singleCommentWrap" style={{marginLeft:'15px',width:'100%',alignItems:'center'}}>
                                    <div>
                                        <b>strangerThings</b> cant wait
                                    </div>
                                    <div className="commentReaction" style={{marginRight:'10px'}} >
                                        <button className='commentLikeButton'>
                                        <svg aria-label="Like" fill="#262626" height='10px' viewBox="0 0 48 48" width='10px'>
                                            <path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
                                        </svg>
                                        </button>
                                    </div>
                                    <div className="commentTime">
                                        <div className="time">
                                            1d
                                        </div>
                                        <div className="likes">
                                            5 likes
                                        </div>
                                        <div className="reply">
                                            report
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                </div>
           </div>
        </div>
        </div>
    )
}


export default CommentPage;