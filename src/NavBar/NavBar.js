import './NavBar.css'
import Logo from  '../resources/insta_logo.png'
import Profile from '../resources/profile_pic.jpg'
const NavBar=()=>{
    return (
    <div className="navWrapper">
        <div className="contentWrapper">
            <div className="navLogo">
                <a href='/' tabIndex="0">
                    <div className="">
                        <img alt="Instagram" src={Logo}/>
                    </div>
                </a>
                <input type="text" placeholder='search'/>
            </div>
            <div className = 'navButtonWrapper'>
                <div className = 'navButton'>
                    <svg aria-label="Home"  fill="#262626" height="22" viewBox="0 0 48 48" width="22"><path d="M45.5 48H30.1c-.8 0-1.5-.7-1.5-1.5V34.2c0-2.6-2.1-4.6-4.6-4.6s-4.6 2.1-4.6 4.6v12.3c0 .8-.7 1.5-1.5 1.5H2.5c-.8 0-1.5-.7-1.5-1.5V23c0-.4.2-.8.4-1.1L22.9.4c.6-.6 1.6-.6 2.1 0l21.5 21.5c.3.3.4.7.4 1.1v23.5c.1.8-.6 1.5-1.4 1.5z"></path></svg>
                </div>
                <div className = 'navButton'>
                    <svg aria-label="Direct" class="_8-yf5 " fill="#262626" height="22" viewBox="0 0 48 48" width="22"><path d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z"></path></svg>                </div>
                <div className = 'navButton'>
                    <svg aria-label="Find People" class="_8-yf5 " fill="#262626" height="22" viewBox="0 0 48 48" width="22"><path clip-rule="evenodd" d="M24 0C10.8 0 0 10.8 0 24s10.8 24 24 24 24-10.8 24-24S37.2 0 24 0zm0 45C12.4 45 3 35.6 3 24S12.4 3 24 3s21 9.4 21 21-9.4 21-21 21zm10.2-33.2l-14.8 7c-.3.1-.6.4-.7.7l-7 14.8c-.3.6-.2 1.3.3 1.7.3.3.7.4 1.1.4.2 0 .4 0 .6-.1l14.8-7c.3-.1.6-.4.7-.7l7-14.8c.3-.6.2-1.3-.3-1.7-.4-.5-1.1-.6-1.7-.3zm-7.4 15l-5.5-5.5 10.5-5-5 10.5z" fill-rule="evenodd"></path></svg>    
                </div>
                <div className = 'navButton'>
                    <div class="_2dbep qNELH" role="link" tabindex="0" style={{width: '22px', height: '22px'}}>
                        <img  src={Profile} alt="suraj_barailee's profile" style={{width:'100%',height:'100%',borderRadius:'50px'}}/>
                    </div> 
                </div>
                                   

            </div>
        </div>      
    </div>
    )
}
export default NavBar;

