import React, { useState } from 'react'
import './Story.css'
import StoryLogo from '../../resources/storylogo.png'
import {Splide,SplideSlide} from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

import Post1a from '../../resources/StoryPosts/post1a.jpg'
import Post1b from '../../resources/StoryPosts/post1b.jpg'
import ProfilePost1 from '../../resources/StoryPosts/storyProfiles/profilepost1.jpg'
import { findDOMNode } from 'react-dom';
import { useRef } from 'react';


const Story=()=>{
    const [storymode, setstorymode] = useState(false)
    const scrollLeft=()=>{

        var element = document.getElementById('storyPresentation')
        element.scrollLeft = element.scrollLeft - 240
    }
    const scrollRight=()=>{
        var element = document.getElementById('storyPresentation')
        element.scrollLeft = element.scrollLeft + 240
    }
    const setStory=(value)=>{
        setstorymode(value)
    }
    return (
        <div>
            {
                storymode?
                <div className='storyWrapperOn'>
                    <div className='storyInstaLogo'>
                        <img src={StoryLogo} alt='' className='storyLogoImage'/>
                    </div>
                    <div className='storyPlayer' style={{display:'flex'}}>
                        <StoryPlayer/>
                    </div>
                    <div className='exitStory'>
                        <button className='exitStoryButton' onClick={()=>{setstorymode(false)}}>
                            <svg aria-label='Close' class='_8-yf5 ' color='#ffffff' fill='#ffffff' height='24' role='img' viewBox='0 0 48 48' width='24'><path clip-rule='evenodd' d='M41.8 9.8L27.5 24l14.2 14.2c.6.6.6 1.5 0 2.1l-1.4 1.4c-.6.6-1.5.6-2.1 0L24 27.5 9.8 41.8c-.6.6-1.5.6-2.1 0l-1.4-1.4c-.6-.6-.6-1.5 0-2.1L20.5 24 6.2 9.8c-.6-.6-.6-1.5 0-2.1l1.4-1.4c.6-.6 1.5-.6 2.1 0L24 20.5 38.3 6.2c.6-.6 1.5-.6 2.1 0l1.4 1.4c.6.6.6 1.6 0 2.2z' fill-rule='evenodd'></path></svg>
                        </button>
                    </div>
                </div>
                
                :
                <div className='storyWrapper'  id='storyWrapper' >
                    <div id='storyPresentation' className='storyPresentation'>
                        {
                            userStory.map((data,i)=>{
                                return <SingleStory imgsource={data.profile} username={data.username} key={data.id} setStory={setStory}/>
                            })
                        }
                    </div>
                    <div className = 'arrowWrapper'>
                        <div className='leftArrowWrapper' onClick={scrollLeft} style={{zIndex:'1'}}/>
                        <div className='rightArrowWrapper' onClick={scrollRight} style={{zIndex:'1'}}/>   
                    </div>
                </div> 
            }
        </div>
        
        
    )
}

const StoryLoaderAnimation=()=>{

    // const progress = Array.from(document.getElementsByClassName('progress'))
    // const playNext = (e) => {
    //     const current = e && e.target;
    //     let next;

    //     if (current) {
    //       const currentIndex = progress.indexOf(current);
    //       if (currentIndex < progress.length) {
    //         next = progress[currentIndex+1];
    //       }
    //       current.classList.remove('active');
    //       current.classList.add('passed');
    //     } 
        
    //     if (!next) {
    //       progress.map((el) => {
    //         el.classList.remove('active');
    //         el.classList.remove('passed');
    //       })
    //       next = progress[0];
        
    //     } 
    //     next.classList.add('active'); 
    // }
      
    // progress.map(el => el.addEventListener("animationend", playNext, false));
    // playNext(progress[0]);
    
    return (
    <div className='progressContainer'>
        <div style={{animationDuration: '5s'}} className="progress">
        </div>
    </div>
)
}


const StoryPlayer=()=>{
    const [startingPointer, setstartingPointer] = useState(0)
        return (
            <div className= 'storyPlayerWrapper'>
                <div className='storyPlayerDiv'>
                    <img src={Post1a} alt='' className='storyPictureSize'/>
                </div>
                <div className='storyPlayerDiv' style={{paddingRight:'4px'}}>
                    <img src={Post1a} alt='' className='storyPictureSize'/> 
                </div>
                <div className='currentlyPlayed'>
                    <div style={{width:'30px',paddingRight:'10px'}}>
                        <div className='leftArrowWrapperStory' >
                        </div>
                    </div>
                    <div style={{width:'100%',height:'100%',position:'relative'}}>
                        <div className='storyDetailWrapper'>
                            <div className="loaderWrapper">
                                <StoryLoaderAnimation/>
                            </div>
                            <div className="storyUserDetailWrapper">
                                <div className="userStoryDetail">
                                    <div className="storyUserImage">
                                        <img src={ProfilePost1} alt="" className='userStoryProfile'/>
                                    </div>
                                    <div className="storyUserName">
                                        <a href="/sariturk" className="storyUserName" style={{padding:'10px'}}>
                                            sariturk
                                        </a>
                                    </div>
                                    <div className="storyTime">
                                        5h
                                    </div>
                                </div>
                               
                                <div className="storyButtonsWrapper">
                                    <div className="storyPlayPause">
                                        <button className='storyButtons'>
                                            <svg aria-label="Play" class="_8-yf5 " color="#ffffff" fill="#ffffff" height="16" role="img" viewBox="0 0 48 48" width="16"><path d="M9.6 46.5c-1 0-2-.3-2.9-.8-1.8-1.1-2.9-2.9-2.9-5.1V7.3c0-2.1 1.1-4 2.9-5.1 1.9-1.1 4.1-1.1 5.9 0l30.1 17.6c1.5.9 2.3 2.4 2.3 4.1 0 1.7-.9 3.2-2.3 4.1L12.6 45.7c-.9.5-2 .8-3 .8z"></path></svg>
                                        </button>
                                    </div>
                                    <div className="storySound">
                                        <button className='storyButtons'>
                                            <svg aria-label="Video has no audio." class="_8-yf5 " color="#ffffff" fill="#ffffff" height="16" role="img" viewBox="0 0 48 48" width="16"><path clip-rule="evenodd" d="M42.9 24l4.6 4.6c.6.6.6 1.6 0 2.2l-1.4 1.4c-.6.6-1.6.6-2.2 0l-4.6-4.6-4.6 4.6c-.6.6-1.6.6-2.2 0l-1.4-1.4c-.6-.6-.6-1.6 0-2.2l4.6-4.6-4.6-4.6c-.6-.6-.6-1.6 0-2.2l1.4-1.4c.6-.6 1.6-.6 2.2 0l4.6 4.6 4.6-4.6c.6-.6 1.6-.6 2.2 0l1.4 1.4c.6.6.6 1.6 0 2.2L42.9 24zM24.1 47.6L11.3 34.7H1.6C.7 34.7 0 34 0 33.2V14.8c0-.8.7-1.5 1.5-1.5h9.7L24.1.4c.9-.9 2.5-.3 2.5 1v45.1c0 1.3-1.6 2-2.5 1.1z" fill-rule="evenodd"></path></svg>
                                        </button>
                                    </div>
                                    <div className="storyOptions">
                                        <button className='storyButtons'>
                                            <svg aria-label="Menu" class="_8-yf5 " color="#ffffff" fill="#ffffff" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M12 9.75A2.25 2.25 0 1014.25 12 2.25 2.25 0 0012 9.75zm-6 0A2.25 2.25 0 108.25 12 2.25 2.25 0 006 9.75zm12 0A2.25 2.25 0 1020.25 12 2.25 2.25 0 0018 9.75z" fill-rule="evenodd"></path></svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <img src={Post1a} alt='' className='storyPictureSizePlaying'/>
                        <div className='replyStoryWrapper'>
                            <div className='replyStoryMessageWrapper'>
                                <input type="text" placeholder='Reply to {username}' className='replyStoryMessage' />
                            </div>
                            <div className="replyStoryButtonWrapper">
                                <button className='replyStoryButton'>
                                    <svg aria-label="Direct" color="#dbdbdb" fill="#dbdbdb" height="24" role="img" viewBox="0 0 48 48" width="24"><path d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z"></path></svg>
                                </button>
                            </div>

                        </div>
                    </div>
                    <div style={{width:'30px', paddingLeft:'10px'}}>
                        <div className='rightArrowWrapperStory' >
                        </div>
                    </div>
                </div>
                <div className='storyPlayerDiv' style={{paddingLeft:'4px'}}>
                    <img src={Post1a} alt='' className='storyPictureSize'/>
                </div>
                <div className='storyPlayerDiv'>
                    <img src={Post1a} alt='' className='storyPictureSize'/>
                </div>
            </div>
        )
}


const StoryData=[
    {
        storyIndex:1,
        userProfile:{
            username:'sariturk',
            profilePicture:Post1a,
        },
        story:[
            {
            id:1,
            type:'image',
            source:Post1a,
            time:'17h'
            },
            {
                id:2,
                type:'image',
                source:Post1b,
                time:'15h'
            }
        ] 
    },
    {
        storyIndex:2,
        userProfile:{
            username:'sariturk',
            profilePicture:Post1a,
        },
        story:[
            {
            id:1,
            type:'image',
            source:Post1a,
            time:'17h'
            },
            {
                id:2,
                type:'image',
                source:Post1b,
                time:'15h'
            }
        ] 
    },
    {
        storyIndex:3,
        userProfile:{
            username:'sariturk',
            profilePicture:Post1a,
        },
        story:[
            {
            id:1,
            type:'image',
            source:Post1a,
            time:'17h'
            },
            {
                id:2,
                type:'image',
                source:Post1b,
                time:'15h'
            }
        ] 
    },
    {
        storyIndex:4,
        userProfile:{
            username:'sariturk',
            profilePicture:Post1a,
        },
        story:[
            {
            id:1,
            type:'image',
            source:Post1a,
            time:'17h'
            },
            {
                id:2,
                type:'image',
                source:Post1b,
                time:'15h'
            }
        ] 
    },
    {
        storyIndex:5,
        userProfile:{
            username:'sariturk',
            profilePicture:Post1a,
        },
        story:[
            {
            id:1,
            type:'image',
            source:Post1a,
            time:'17h'
            },
            {
                id:2,
                type:'image',
                source:Post1b,
                time:'15h'
            }
        ] 
    },
    {
        storyIndex:6,
        userProfile:{
            username:'sariturk',
            profilePicture:Post1a,
        },
        story:[
            {
            id:1,
            type:'image',
            source:Post1a,
            time:'17h'
            },
            {
                id:2,
                type:'image',
                source:Post1b,
                time:'15h'
            }
        ] 
    },
    {
        storyIndex:7,
        userProfile:{
            username:'sariturk',
            profilePicture:Post1a,
        },
        story:[
            {
            id:1,
            type:'image',
            source:Post1a,
            time:'17h'
            },
            {
                id:2,
                type:'image',
                source:Post1b,
                time:'15h'
            }
        ] 
    },
    {
        storyIndex:8,
        userProfile:{
            username:'sariturk',
            profilePicture:Post1a,
        },
        story:[
            {
            id:1,
            type:'image',
            source:Post1a,
            time:'17h'
            },
            {
                id:2,
                type:'image',
                source:Post1b,
                time:'15h'
            }
        ] 
    },
    {
        storyIndex:9,
        userProfile:{
            username:'sariturk',
            profilePicture:Post1a,
        },
        story:[
            {
            id:1,
            type:'image',
            source:Post1a,
            time:'17h'
            },
            {
                id:2,
                type:'image',
                source:Post1b,
                time:'15h'
            }
        ] 
    },
    {
        storyIndex:10,
        userProfile:{
            username:'sariturk',
            profilePicture:Post1a,
        },
        story:[
            {
            id:1,
            type:'image',
            source:Post1a,
            time:'17h'
            },
            {
                id:2,
                type:'image',
                source:Post1b,
                time:'15h'
            }
        ] 
    }

]


const SingleStory=(props)=>{

    return (
        <div className='singleStory' style={{paddingLeft:'6px'}} onClick={()=>{props.setStory(true)}}>
                <div className='storyImageWrapper'>
                    <div className='storyImageDiv' >
                        <img src={props.imgsource} alt='' width='56px' height='56px' className='storyImage'/>
                    </div>
                </div>
                <div className='storyUsername' style={{textAlign:'center'}}>
                    {props.username.length > 8 ? props.username.substring(0,8)+'...' : props.username}
                </div>
        </div>
        
    )
}



const userStory=[
    {
        id:1,
        username:'silverswan131',
        profile:'https://randomuser.me/api/portraits/med/men/75.jpg'
    },
    {
        id:8,
        username:'lois Ramoos',
        profile:'https://images.unsplash.com/photo-1493612276216-ee3925520721?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80'
    },
    {
        id:2,
        username:'marhoward',
        profile:'https://images.unsplash.com/photo-1496449903678-68ddcb189a24?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cmFuZG9tfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80'
    },
    {
        id:3,
        username:'vivan_scott',
        profile:'https://images.unsplash.com/photo-1489533119213-66a5cd877091?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cmFuZG9tfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60'
    },
    {
        id:4,
        username:'maxy__21',
        profile:'https://randomuser.me/api/portraits/med/men/91.jpg'
    },
    {
        id:5,
        username:'charlie_puth',
        profile:'https://images.unsplash.com/photo-1509114397022-ed747cca3f65?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHJhbmRvbXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
    },
    {
        id:6,
        username:'gordenliam',
        profile:'https://randomuser.me/api/portraits/med/men/73.jpg'
    },
    {
        id:7,
        username:'marsha11',
        profile:'https://randomuser.me/api/portraits/med/men/17.jpg'
    },
    
    {
        id:9,
        username:'jessica789brown',
        profile:'https://randomuser.me/api/portraits/med/women/55.jpg'
    },
    {
        id:10,
        username:'carmendean',
        profile:'https://randomuser.me/api/portraits/med/women/25.jpg'
    },
    {
        id:11,
        username:'jessie_franklin',
        profile:'https://randomuser.me/api/portraits/med/men/80.jpg'
    },
    {
        id:12,
        username:'franzis_Perez',
        profile:'https://randomuser.me/api/portraits/med/men/78.jpg'
    },
    {
        id:13,
        username:'heather_day',
        profile:'https://randomuser.me/api/portraits/med/women/49.jpg'
    },
    {
        id:14,
        username:'devonkim__',
        profile:'https://randomuser.me/api/portraits/med/men/40.jpg'
    },
    {
        id:15,
        username:'MarianNR',
        profile:'https://randomuser.me/api/portraits/med/women/61.jpg'
    }

]





export default Story;