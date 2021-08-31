import './NameTag.css'
import { useState } from 'react';


import NameTag1 from '../../resources/nameTag/nametag1.png'
import NameTag2 from '../../resources/nameTag/nametag2.png'
import NameTag3 from '../../resources/nameTag/nametag3.png'
import NameTag4 from '../../resources/nameTag/nametag4.png'
import NameTag5 from '../../resources/nameTag/nametag5.png'
import NameTag6 from '../../resources/nameTag/nametag6.png'



const NameTag=()=>{
    const [nameTag, setnameTag] = useState(1)

        return (
            <div className="nameTagMainWrapper">
                <div className="nameTagTop">
                    <div className="tagScanMainWrapper">
                        <div className="tagScanLeft">
                            <img src={NameTag1} alt="" height='300' width='300'/>
                        </div>
                        <div className="tagScanRight" >
                            <div className='nameTagHeading'>
                                Nametag Helps People Follow you Quickly
                            </div>
                            <div className='nameTagDescription'>
                                People can scan your nametag with the Instagram camera to easily follow you.
                                Download and print your nametag,then stick it on your products,posters and more.
                            </div>
                            <div className='palleteButtonWrapper'>
                                <button className='palleteButton palleteButtonPurple'></button>
                                <button className='palleteButton palleteButtonOrange'></button>
                                <button className='palleteButton palleteButtonBlue'></button>
                                <button className='palleteButton palleteButtonSkyBlue'></button>
                                <button className='palleteButton palleteButtonGreen'></button>
                                <button className='palleteButton palleteButtonBlack'></button>
                                
                            </div>
                            <div>
                                <button>
                                    Download Nametag
                                </button>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="nameTagBottom">

                </div>

                
            </div>
        )

}

export default NameTag;