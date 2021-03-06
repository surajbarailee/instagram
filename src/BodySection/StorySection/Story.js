import React, { useState } from 'react';
import './Story.css';
import StoryLogo from '../../resources/storylogo.png';
import { useEffect } from 'react';
import {userStory,StoryData} from '../../data.js'

import loading from '../../resources/loader.gif'


const Story=()=>{
    const [storymode, setstorymode] = useState(false)
    const [arrowLeftFlag,setarrowLeftFlag] = useState(false)
    const [arrowRightFlag,setarrowRightFlag] = useState(true)
    const [firstLoad,setfirstLoad] = useState(true)
    const scrollLeft=()=>{

        var element = document.getElementById('storyPresentation')

        element.scrollLeft = element.scrollLeft - 240
        if (element.scrollLeft - 240 <= 0)
        {
            setarrowLeftFlag(false)
        }
        else{
            setarrowLeftFlag(true)
        }
        if (element.scrollLeft <= element.scrollWidth - element.clientWidth)
        {
            setarrowRightFlag(true)
        }
        else{
            setarrowRightFlag(false)
        }

    }
    const scrollRight=()=>{
        var element = document.getElementById('storyPresentation')
        
        if (element.scrollLeft + 240 < element.scrollWidth - element.clientWidth)
        {
            setarrowRightFlag(true)
        }
        else{
            setarrowRightFlag(false)
        }
        if (element.scrollLeft >= 0)
        {
            setarrowLeftFlag(true)
        }
        
        element.scrollLeft = element.scrollLeft + 240

    }
    const setStory=(value)=>{
        setstorymode(value)
    }
    const loaderRemover=()=>{
        setTimeout(() => {
            const loader = document.getElementById('spinner')
            if (loader){
            loader.style.display = 'none'
            }
          }, 2000);
        
    }
    

    window.onload = function() {
        loaderRemover();
    }
    
    const exitStory=()=>{
        setstorymode(false);
        loaderRemover();
    }
    

    
    return (
        <div style={{overflow:'hidden'}}>
            {
                storymode?
                <div className='storyWrapperOn'>
                    <div className='storyInstaLogo' id='logo'>
                        <img src={StoryLogo} alt='instagram Logo' className='storyLogoImage' style={{display:'inherit'}}/>
                    </div>
                    <div className='storyPlayer' style={{display:'flex'}}>
                        <StoryPlayer setStory = {setStory}/>
                    </div>
                    <div className='exitStory'>
                        <button className='exitStoryButton' onClick={()=>{exitStory()}}>
                            <svg aria-label='Close'  color='#ffffff' fill='#ffffff' height='24' role='img' viewBox='0 0 48 48' width='24'><path clipRule='evenodd' d='M41.8 9.8L27.5 24l14.2 14.2c.6.6.6 1.5 0 2.1l-1.4 1.4c-.6.6-1.5.6-2.1 0L24 27.5 9.8 41.8c-.6.6-1.5.6-2.1 0l-1.4-1.4c-.6-.6-.6-1.5 0-2.1L20.5 24 6.2 9.8c-.6-.6-.6-1.5 0-2.1l1.4-1.4c.6-.6 1.5-.6 2.1 0L24 20.5 38.3 6.2c.6-.6 1.5-.6 2.1 0l1.4 1.4c.6.6.6 1.6 0 2.2z' fillRule='evenodd'></path></svg>
                        </button>
                    </div>
                </div>
                :  
                <div className='storyWrapper'  id='storyWrapper' >
                    <div style={{textAlign:'center',margin:'5px 0px -15px 0px'}} >
                    <img src={loading} alt="loading" width='30px' id='spinner'/>
                    </div>
                    <div id='storyPresentation' className='storyPresentation'>
                        {
                            userStory.map((data,i)=>{
                                return <SingleStory imgsource={data.profile} username={data.username} key={data.id} setStory={setStory}/>
                            })
                        }
                    </div>
                    
                    <div className = 'arrowWrapper'>
                        { arrowLeftFlag?
                         
                        <div className='leftArrowWrapper' onClick={scrollLeft} style={{zIndex:'1'}}/>
                        :
                        <div className='leftArrowWrapper' onClick={scrollLeft} style={{zIndex:'-1'}}/>
                        }
                        { arrowRightFlag?
                         
                         <div className='rightArrowWrapper' onClick={scrollRight} style={{zIndex:'1'}}/>
                         :
                         <div className='rightArrowWrapper' onClick={scrollRight} style={{zIndex:'-1'}}/>
                         }
                    </div>
                </div> 
                
            }
        </div>
    )
}

const UserLabels=(props)=>{
    const data = StoryData[props.index]['userProfile']
    return(
        <div className="userLabels">
            <div className=" userStoryLabelWrapper">
                <div className='userStoryImageWrapper'>
                    <div className="storyImageWrapper" style={{padding:'0px',margin:'0px',maxWidth:'56px'}}>
                            <img src={data['profilePicture']} alt="" width='56px' height='56px' className='storyImage' 
                            style={{padding:'0px',margin:'0px',display:'block'}}/>
                    </div>
                </div>
                
                <div className="storyLableUsername">
                    {data['username']}
                </div>
                <div className="  storyLabelTime">
                    {StoryData[props.index]['story'][0]['time']}
                </div>
            </div>
        </div>
    
    )
}

const StoryPlayer=(props)=>{
    const setStory = props.setStory
    const [startingPointer, setstartingPointer] = useState(0)

    const StoryPlayerDiv =(props)=>{
        if (props.index<0 || props.index>= StoryData.length){ return <div className='storyPlayerDiv'></div>}
        const storydata = StoryData[props.index]
        return (
        <div className='storyPlayerDiv'>
            <div className='storyPictureSize'>
               <img src={storydata['storyThumbnail']} alt='' className='storyPictureSize' style={{opacity:'0.4'}}/>
               <UserLabels index = {props.index}/>
           </div>
       </div>
        )
    }

    const CurrentlyPlayed=(props)=>{
        
        const StoryClicked=()=>{
    
            const main_story_parent = document.getElementById('progress_bar_status')
            if (main_story_parent.style.animationPlayState==='paused'){
                main_story_parent.style.animationPlayState='running'
            }
            else {
                main_story_parent.style.animationPlayState='paused'
               
            }
        }
        function updatePlayingStory(value){
            if (value==='i'){
                if (currentPlayerIndex + 1 < playingStory.length){
                    setcurrentPlayerIndex(currentPlayerIndex + 1)
                    
                }
                else{
                    if (startingPointer + 1 < StoryData.length){
                        setstartingPointer(startingPointer + 1)
                        
                    }
                    else{
                        setStory(false)
                    }
                }
            }
            else{
                if (currentPlayerIndex - 1 >= 0){
                    setcurrentPlayerIndex(currentPlayerIndex - 1)
                }
                else{
                    if (startingPointer - 1 >= 0){
                        setstartingPointer(startingPointer - 1)
                    }
                    else{
                        setStory(false)
                    }
                }
            }
        }
        
        const Progressbar=()=>{
            return <div  className="progress" id='progress_bar_status'></div>
        }
        useEffect(()=>{
            const progress = Array.from(document.querySelectorAll('.progress'))
            const playNext = (e) => {
                const current = e && e.target;
                let next;
                if (current) {
                    const currentIndex = progress.indexOf(current);
                    if (currentIndex < progress.length) {
                    next = progress[currentIndex+1];
                    }
                    current.classList.remove('active');
                    current.classList.add('passed');
                    updatePlayingStory('i')
                } 
                
                if (!next) {
                    progress.forEach((el) => {
                    el.classList.remove('active');
                    el.classList.remove('passed');
                    })
                    next = progress[0];
                }
                next.classList.add('active');
              }
              progress.map(el => el.addEventListener("animationend", playNext, false));
              playNext();
        },[]);

        
        const playingStory  = StoryData[props.index]['story']
        const userDetail =StoryData[props.index]['userProfile']
        const [currentPlayerIndex, setcurrentPlayerIndex] = useState(0)
        return(
            <div className='currentlyPlayed'>
                <div style={{width:'30px',paddingRight:'10px'}}>
                    <div className='leftArrowWrapperStory'  onClick={()=>{updatePlayingStory()}}>
                    </div>
                </div>
                <div className='playingStoryWrapper' id='main_story_parent'>
                    <div className='storyDetailWrapper'>
                        <div className="loaderWrapper">
                            <div className="progressContainer">
                                {StoryData[props.index].story.map(function(value,index){
                                    return <Progressbar key={value['id']}/>
                                })}
                                
                            </div>
                        </div>
                        <div className="storyUserDetailWrapper">
                            <div className="userStoryDetail">
                                <div className="storyUserImage">
                                    <img src={userDetail['profilePicture']} alt="main_story" className='userStoryProfile' />
                                </div>
                                <div className="storyUserName">
                                    <a href="/sariturk" className="storyUserName" style={{padding:'10px'}}>
                                        {userDetail['username']}
                                    </a>
                                </div>
                                <div className="storyTime">
                                    {playingStory[currentPlayerIndex]['time']}
                                </div>
                            </div>                       
                            <div className="storyButtonsWrapper">
                                <div className="storyPlayPause">
                                    <button className='storyButtons' id='play_pause_button'>
                                         
                                        <svg aria-label="Pause" class="_8-yf5 " color="#ffffff" fill="#ffffff" height="16" role="img" viewBox="0 0 48 48" width="16"><path d="M15 1c-3.3 0-6 1.3-6 3v40c0 1.7 2.7 3 6 3s6-1.3 6-3V4c0-1.7-2.7-3-6-3zm18 0c-3.3 0-6 1.3-6 3v40c0 1.7 2.7 3 6 3s6-1.3 6-3V4c0-1.7-2.7-3-6-3z"></path></svg>
                                        
                                        {/* <svg aria-label="Play" color="#ffffff" fill="#ffffff" height="16" role="img" viewBox="0 0 48 48" width="16"><path d="M9.6 46.5c-1 0-2-.3-2.9-.8-1.8-1.1-2.9-2.9-2.9-5.1V7.3c0-2.1 1.1-4 2.9-5.1 1.9-1.1 4.1-1.1 5.9 0l30.1 17.6c1.5.9 2.3 2.4 2.3 4.1 0 1.7-.9 3.2-2.3 4.1L12.6 45.7c-.9.5-2 .8-3 .8z"></path></svg> */}
                                    
                                    </button>
                                </div>
                                <div className="storySound">
                                    <button className='storyButtons'>
                                        <svg aria-label="Video has no audio."  color="#ffffff" fill="#ffffff" height="16" role="img" viewBox="0 0 48 48" width="16"><path clipRule="evenodd" d="M42.9 24l4.6 4.6c.6.6.6 1.6 0 2.2l-1.4 1.4c-.6.6-1.6.6-2.2 0l-4.6-4.6-4.6 4.6c-.6.6-1.6.6-2.2 0l-1.4-1.4c-.6-.6-.6-1.6 0-2.2l4.6-4.6-4.6-4.6c-.6-.6-.6-1.6 0-2.2l1.4-1.4c.6-.6 1.6-.6 2.2 0l4.6 4.6 4.6-4.6c.6-.6 1.6-.6 2.2 0l1.4 1.4c.6.6.6 1.6 0 2.2L42.9 24zM24.1 47.6L11.3 34.7H1.6C.7 34.7 0 34 0 33.2V14.8c0-.8.7-1.5 1.5-1.5h9.7L24.1.4c.9-.9 2.5-.3 2.5 1v45.1c0 1.3-1.6 2-2.5 1.1z" fillRule="evenodd"></path></svg>
                                    </button>
                                </div>
                                <div className="storyOptions">
                                    <button className='storyButtons'>
                                        <svg aria-label="Menu"  color="#ffffff" fill="#ffffff" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M12 9.75A2.25 2.25 0 1014.25 12 2.25 2.25 0 0012 9.75zm-6 0A2.25 2.25 0 108.25 12 2.25 2.25 0 006 9.75zm12 0A2.25 2.25 0 1020.25 12 2.25 2.25 0 0018 9.75z" fillRule="evenodd"></path></svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img src={playingStory[currentPlayerIndex]['source']} alt='main_story' className='storyPictureSizePlaying' onClick={()=>{StoryClicked()}}/>
                    <div className='replyStoryWrapper'>
                        <div className='replyStoryMessageWrapper'>
                            <input type="text" placeholder={`Reply to ${userDetail['username']}`} className='replyStoryMessage' />
                        </div>
                        <div className="replyStoryButtonWrapper">
                            <button className='replyStoryButton'>
                                <svg aria-label="Direct" color="#dbdbdb" fill="#dbdbdb" height="24" role="img" viewBox="0 0 48 48" width="24"><path d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z"></path></svg>
                            </button>
                        </div>

                    </div>
                </div>
                <div style={{width:'30px', paddingLeft:'10px'}}>
                    <div className='rightArrowWrapperStory'onClick={()=>{updatePlayingStory('i')}}>
                    </div>
                </div>
            </div>
        )
    }
        return (
            <div className= 'storyPlayerWrapper'>
                <StoryPlayerDiv index={startingPointer-2}/>
                <StoryPlayerDiv index={startingPointer-1}/>
                <CurrentlyPlayed index={startingPointer}/>
                <StoryPlayerDiv index={startingPointer+1}/>
                <StoryPlayerDiv index={startingPointer+2}/>
            </div>
        )
}

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


export default Story;