import './NavBar.css'
import Logo from  '../resources/insta_logo.png'
import Profile from '../resources/profile_pic.jpg'

import { useState } from 'react'
import SearchResult from './SearchBox/searchresult'

const NavBar=()=>{
    const [activeIcon,updateActiveIcon] =useState('')
    const [activeSearch,updateSearchIcon] =useState(false) 
    const [searchPlaceHolder,updatesearchPlaceHolder]=useState('')
    const toggleonSearch=()=>{
        document.getElementById('searchBoxCover').style.visibility='hidden'
        document.getElementById('searchBox').style.visibility='visible'
        document.getElementById('searchBox').focus();
        updateSearchIcon(true)
        
    }
    const toggleoffSearch=(button)=>{
        document.getElementById('searchBox').style.visibility='hidden'
        document.getElementById('searchBoxCover').style.visibility='visible'
        if (button===true){
            updatesearchPlaceHolder('')
        }
        updateSearchIcon(false)
    }
    const togglesvgIcon=(value)=>{  
        var location = window.location.pathname
        var checklocation=true
        if (value==='activity'){
            if (activeIcon!=='activity'){      
                updateActiveIcon('activity')
                checklocation=false
            }
        }
        else if (value==='profile'){
            if (activeIcon!=='profile'){        
                updateActiveIcon('profile')
                checklocation=false
                console.log('asd')
            }
        }
        if (checklocation===true){
            if(location==='/')
            {
                updateActiveIcon('home')
            }
            else if(location==='/inbox/')
            {
                updateActiveIcon('inbox')
            }
            else if(location==='/explore/')
            {
                updateActiveIcon('explore')
            }
        }


        
    }
    const textSearch=(e)=>{
        updatesearchPlaceHolder(e.target.value)
    }
    if (activeIcon===''){
        togglesvgIcon();
    }

    return (
        
            <div className="navWrapper">
                <div className='navContentWrapper'>
                    <div className='navContent'>
                        <div className="navLogoWrapper">
                            <a href='/'>
                                <div className="logoContainer">
                                    <div style={{marginTop:'7px'}}>
                                        <img class= 'logoImage'alt="Instagram" src={Logo}/>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="navSearchWrapper" onBlur={()=>{toggleoffSearch(false)}} >
                            
                                <div className='inputBoxWrapper' >
                                    <div className='searchIcon'>
                                        <div className="searchIconImage">
                                        </div>
                                    </div>
                                    <input type="text"  onChange={textSearch} placeholder = {searchPlaceHolder===''?'Search':searchPlaceHolder} className="inputBox" id="searchBox" value = {searchPlaceHolder} autoComplete='off'/>
                                    <div className='searchIcon'>
                                        <div className='closeIcon' onClick={()=>{toggleoffSearch(true)}}></div>
                                    </div>
                                </div>
                                <div className={'searchBoxCover'}
                                id='searchBoxCover'
                                style={{cursor:'text'}} 
                                onClick={toggleonSearch}>
                                    <div style={{marginRight:'10px' }} >
                                    {searchPlaceHolder===''?'Search':searchPlaceHolder}
                                    
                                    </div>
                                </div> 
                            </div>    
                        <div className="navButtonWrapper">
                    <div className="buttonContainer">
                        <div className="svgWrapper">
                            <a href="/">
                                { 
                                    activeIcon==='home'?
                                    <svg aria-label="Home"  fill="#262626" height="22" viewBox="0 0 48 48" width="22"><path d="M45.5 48H30.1c-.8 0-1.5-.7-1.5-1.5V34.2c0-2.6-2.1-4.6-4.6-4.6s-4.6 2.1-4.6 4.6v12.3c0 .8-.7 1.5-1.5 1.5H2.5c-.8 0-1.5-.7-1.5-1.5V23c0-.4.2-.8.4-1.1L22.9.4c.6-.6 1.6-.6 2.1 0l21.5 21.5c.3.3.4.7.4 1.1v23.5c.1.8-.6 1.5-1.4 1.5z"></path></svg>
                                    :
                                    <svg aria-label="Home" fill="#262626" height="22" viewBox="0 0 48 48" width="22"><path d="M45.3 48H30c-.8 0-1.5-.7-1.5-1.5V34.2c0-2.6-2-4.6-4.6-4.6s-4.6 2-4.6 4.6v12.3c0 .8-.7 1.5-1.5 1.5H2.5c-.8 0-1.5-.7-1.5-1.5V23c0-.4.2-.8.4-1.1L22.9.4c.6-.6 1.5-.6 2.1 0l21.5 21.5c.4.4.6 1.1.3 1.6 0 .1-.1.1-.1.2v22.8c.1.8-.6 1.5-1.4 1.5zm-13.8-3h12.3V23.4L24 3.6l-20 20V45h12.3V34.2c0-4.3 3.3-7.6 7.6-7.6s7.6 3.3 7.6 7.6V45z"></path></svg>
                                }
                            </a>
                        </div>
                        <div className="svgWrapper">
                            <a href="/inbox/">
                            { 
                                    activeIcon==='inbox'?
                                    <svg aria-label="Direct" class="_8-yf5 " fill="#262626" height="22" viewBox="0 0 48 48" width="22"><path d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l13.2 13c.5.4 1.1.6 1.7.3l16.6-8c.7-.3 1.6-.1 2 .5.4.7.2 1.6-.5 2l-15.6 9.9c-.5.3-.8 1-.7 1.6l4.6 19c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.5-.5.5-1.1.2-1.6z"></path></svg>                                        
                                    :
                                    <svg aria-label="Direct" class="_8-yf5 " fill="#262626" height="22" viewBox="0 0 48 48" width="22"><path d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z"></path></svg>
                            }
                            </a>
                        </div>
                        <div className="svgWrapper">
                            <a href="/explore/" >
                                {
                                    activeIcon==='explore'? 
                                    <svg aria-label="Find People" class="_8-yf5 " fill="#262626" height="22" viewBox="0 0 48 48" width="22"><path clip-rule="evenodd" d="M24 0C10.8 0 0 10.8 0 24s10.8 24 24 24 24-10.8 24-24S37.2 0 24 0zm12.2 13.8l-7 14.8c-.1.3-.4.6-.7.7l-14.8 7c-.2.1-.4.1-.6.1-.4 0-.8-.2-1.1-.4-.4-.4-.6-1.1-.3-1.7l7-14.8c.1-.3.4-.6.7-.7l14.8-7c.6-.3 1.3-.2 1.7.3.5.4.6 1.1.3 1.7zm-15 7.4l-5 10.5 10.5-5-5.5-5.5z" fill-rule="evenodd"></path></svg>
                                    :
                                    <svg aria-label="Find People"  fill="#262626" height="22" viewBox="0 0 48 48" width="22"><path clip-rule="evenodd" d="M24 0C10.8 0 0 10.8 0 24s10.8 24 24 24 24-10.8 24-24S37.2 0 24 0zm0 45C12.4 45 3 35.6 3 24S12.4 3 24 3s21 9.4 21 21-9.4 21-21 21zm10.2-33.2l-14.8 7c-.3.1-.6.4-.7.7l-7 14.8c-.3.6-.2 1.3.3 1.7.3.3.7.4 1.1.4.2 0 .4 0 .6-.1l14.8-7c.3-.1.6-.4.7-.7l7-14.8c.3-.6.2-1.3-.3-1.7-.4-.5-1.1-.6-1.7-.3zm-7.4 15l-5.5-5.5 10.5-5-5 10.5z" fill-rule="evenodd"></path></svg>    
                                }
                            </a>
                        </div>
                        <div className="svgWrapper">
                            <div onClick={()=>{togglesvgIcon('activity')}}>

                            {
                                activeIcon==='activity'?
                                <svg aria-label="Activity Feed" class="_8-yf5 " fill="#262626" height="22" viewBox="0 0 48 48" width="22"><path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path></svg>                                    
                                :
                                <svg aria-label="Activity Feed" fill="#262626" height="22" viewBox="0 0 48 48" width="22"><path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path></svg>
                            }
                            </div>
                        </div>
                        <div className="svgWrapper">
                            <div className={activeIcon==='profile' ? 'profileActive':'profileInactive'} onClick={()=>{togglesvgIcon('profile')}} >
                                <div style={{width: '23px', height: '23px',borderRadius:'50px',overflow:'hidden',border:'1px solid white'}}>
                                    <img  src={Profile} alt="instagram's profile" style={{width:'23px',height:'23px',borderRadius:'50px'}}/>
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>
                    </div>
                    {activeSearch?<SearchResult/>:''}
                </div>  
                
            </div>
             
    )
}
export default NavBar;