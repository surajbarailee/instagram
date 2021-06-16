import Picture1 from '../resources/ExploreResources/explorer1.jpg'
import Picture2 from '../resources/ExploreResources/explorer2.jpg'
import Picture3 from '../resources/ExploreResources/explorer3.jpg'
import Picture4 from '../resources/ExploreResources/explorer4.jpg'
import Picture5 from '../resources/ExploreResources/explorer5.jpg'
import Picture6 from '../resources/ExploreResources/explorer6.jpg'
import Picture7 from '../resources/ExploreResources/explorer7.jpg'
import Picture8 from '../resources/ExploreResources/explorer8.jpg'
import Picture9 from '../resources/ExploreResources/explorer9.jpg'


import './explore.css'


const explore=()=>{
    return (
        <div className="galleryWrapper">
            <div className="galleryContainer">
                <div className="imageArea">
                    <div className="singlePictureWrapper">
                        <img src={Picture1} alt="picture1" className='singlePicture' />
                    </div>
                    <div className="singlePictureWrapper">
                        <img src={Picture2} alt="picture1" className='singlePicture' />
                    </div>
                    <div className="singlePictureWrapper">
                        <img src={Picture3} alt="picture1" className='singlePicture' />
                    </div>
                    <div className="singlePictureWrapper">
                        <img src={Picture4} alt="picture1" className='singlePicture' />
                    </div>
                    <div className="singlePictureWrapper">
                        <img src={Picture5} alt="picture1" className='singlePicture' />
                    </div>
                    <div className="singlePictureWrapper">
                        <img src={Picture6} alt="picture1" className='singlePicture' />
                    </div>
                    <div className="singlePictureWrapper">
                        <img src={Picture7} alt="picture1" className='singlePicture' />
                    </div>
                    <div className="singlePictureWrapper">
                        <img src={Picture8} alt="picture1" className='singlePicture' />
                    </div>
                    <div className="singlePictureWrapper">
                        <img src={Picture9} alt="picture1" className='singlePicture' />
                    </div>
                </div>

            </div>
        
        </div>
    
    )
}


export default explore;