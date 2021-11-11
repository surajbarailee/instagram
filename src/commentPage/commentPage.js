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
                    <div className="postNav" style={{height:'60px'}}>
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
                </div>
           </div>
        </div>
    )
}


export default CommentPage;