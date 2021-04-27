import './NavBar.css'
import Logo from  '../resources/insta_logo.png'
const NavBar=()=>{
    return (
    <div className="navWrapper">
        <div className="contentWrapper">
            <div className="navLogo">
                <a href='/' tabIndex="0">
                    <div classname="">
                        <img alt="Instagram" src={Logo}/>
                    </div>
                </a>
            </div>
            <div>asdasd</div>
        </div>      
    </div>
    )
}
export default NavBar;

