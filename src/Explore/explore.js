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




const Explore=()=>{

    return (
        <div className="galleryWrapper">
            <div className="galleryContainer">
                <div className="imageArea">
                    <div className="singlePictureWrapper" >
                        <img src={Picture1} alt="picture1" className='singlePicture' />
                        <div style={{position:'absolute',top:'15px',right:'25px'}}>
                              <svg aria-label="Carousel" class="_8-yf5 edmGD" color="#ffffff" fill="#ffffff" height="28" role="img" viewBox="0 0 48 48" width="28"><path d="M34.8 29.7V11c0-2.9-2.3-5.2-5.2-5.2H11c-2.9 0-5.2 2.3-5.2 5.2v18.7c0 2.9 2.3 5.2 5.2 5.2h18.7c2.8-.1 5.1-2.4 5.1-5.2zM39.2 15v16.1c0 4.5-3.7 8.2-8.2 8.2H14.9c-.6 0-.9.7-.5 1.1 1 1.1 2.4 1.8 4.1 1.8h13.4c5.7 0 10.3-4.6 10.3-10.3V18.5c0-1.6-.7-3.1-1.8-4.1-.5-.4-1.2 0-1.2.6z"></path></svg>
                        </div>
                    </div>
                    <div className="singlePictureWrapper" >
                        <img src={Picture2} alt="picture1" className='singlePicture' />
                    </div>
                    <div className="singlePictureWrapper" >
                        <img src={Picture3} alt="picture1" className='singlePicture' />
                        <div style={{position:'absolute',top:'15px',right:'25px'}}>
                              <svg aria-label="Carousel" class="_8-yf5 edmGD" color="#ffffff" fill="#ffffff" height="28" role="img" viewBox="0 0 48 48" width="28"><path d="M34.8 29.7V11c0-2.9-2.3-5.2-5.2-5.2H11c-2.9 0-5.2 2.3-5.2 5.2v18.7c0 2.9 2.3 5.2 5.2 5.2h18.7c2.8-.1 5.1-2.4 5.1-5.2zM39.2 15v16.1c0 4.5-3.7 8.2-8.2 8.2H14.9c-.6 0-.9.7-.5 1.1 1 1.1 2.4 1.8 4.1 1.8h13.4c5.7 0 10.3-4.6 10.3-10.3V18.5c0-1.6-.7-3.1-1.8-4.1-.5-.4-1.2 0-1.2.6z"></path></svg>
                        </div>
                    </div>
                    <div className="singlePictureWrapper" >
                        <img src={Picture4} alt="picture1" className='singlePicture' />
                    </div>
                    <div className="singlePictureWrapper" >
                        <img src={Picture5} alt="picture1" className='singlePicture' />
                    </div>
                    <div className="singlePictureWrapper" >
                        <img src={Picture6} alt="picture1" className='singlePicture' />
                        <div style={{position:'absolute',top:'15px',right:'25px'}}>
                              <svg aria-label="Carousel" class="_8-yf5 edmGD" color="#ffffff" fill="#ffffff" height="28" role="img" viewBox="0 0 48 48" width="28"><path d="M34.8 29.7V11c0-2.9-2.3-5.2-5.2-5.2H11c-2.9 0-5.2 2.3-5.2 5.2v18.7c0 2.9 2.3 5.2 5.2 5.2h18.7c2.8-.1 5.1-2.4 5.1-5.2zM39.2 15v16.1c0 4.5-3.7 8.2-8.2 8.2H14.9c-.6 0-.9.7-.5 1.1 1 1.1 2.4 1.8 4.1 1.8h13.4c5.7 0 10.3-4.6 10.3-10.3V18.5c0-1.6-.7-3.1-1.8-4.1-.5-.4-1.2 0-1.2.6z"></path></svg>
                        </div>
                    </div>
                    <div className="singlePictureWrapper">
                        <img src={Picture7} alt="picture1" className='singlePicture' />
                    </div>
                    <div className="singlePictureWrapper">
                        <img src={Picture8} alt="picture1" className='singlePicture' />
                        <div style={{position:'absolute',top:'15px',right:'25px'}}>
                              <svg aria-label="Carousel" class="_8-yf5 edmGD" color="#ffffff" fill="#ffffff" height="28" role="img" viewBox="0 0 48 48" width="28"><path d="M34.8 29.7V11c0-2.9-2.3-5.2-5.2-5.2H11c-2.9 0-5.2 2.3-5.2 5.2v18.7c0 2.9 2.3 5.2 5.2 5.2h18.7c2.8-.1 5.1-2.4 5.1-5.2zM39.2 15v16.1c0 4.5-3.7 8.2-8.2 8.2H14.9c-.6 0-.9.7-.5 1.1 1 1.1 2.4 1.8 4.1 1.8h13.4c5.7 0 10.3-4.6 10.3-10.3V18.5c0-1.6-.7-3.1-1.8-4.1-.5-.4-1.2 0-1.2.6z"></path></svg>
                        </div>
                    </div>
                    <div className="singlePictureWrapper">
                        <img src={Picture9} alt="picture1" className='singlePicture' />
                    </div>
                </div>

            </div>
        
        </div>
    
    )
}


export default Explore;