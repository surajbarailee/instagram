import './NameTag.css'
import { useState } from 'react';
import {ProfileFooter} from '../Profile'

import NameTag1 from '../../resources/nameTag/nametag1.png'
import NameTag2 from '../../resources/nameTag/nametag2.png'
import NameTag3 from '../../resources/nameTag/nametag3.png'
import NameTag4 from '../../resources/nameTag/nametag4.png'
import NameTag5 from '../../resources/nameTag/nametag5.png'
import NameTag6 from '../../resources/nameTag/nametag6.png'
import {saveAs} from 'file-saver';

function ImageValue(value){

    if (value === 1){
        return NameTag1
    }
    if (value === 2){
        return NameTag2
    }
    if (value === 3){
        return NameTag3
    }
    if (value === 4){
        return NameTag4
    }
    if (value === 5){
        return NameTag5
    }
    if (value === 6){
        return NameTag6
    }

}

const saveFile=(value)=>{
    var image = ImageValue(value)
    saveAs(image)
}

const NameTagImage=(props)=>{
    return(
        <img src={ImageValue(props.value)} alt="nameTag" height='300' width='300'/>
    )
}


const NameTag=()=>{
    const [nameTag, setnameTag] = useState(1)

        return (
            <div className="nameTagMainWrapper">
                <div className={`nameTagTop ${'background' + nameTag}`}>
                    <div className="tagScanMainWrapper">
                        <div className="tagScanLeft">
                           <NameTagImage value={nameTag}/>
                        </div>
                        <div className="tagScanRight" >
                            <div className='nameTagHeading'>
                                Nametag Helps People Follow you Quickly
                            </div>
                            <div className='nameTagDescription'>
                                People can scan your nametag with the Instagram camera to easily follow you.
                                Download and print your nametag,then stick it on your products, posters and more.
                            </div>
                            <div className='palleteButtonWrapper'>
                                <div className='singleButtonWrapper'>
                                    <button
                                        onClick={()=>{setnameTag(1)}}
                                        className={`palleteButton palleteButtonPurple ${nameTag===1?'selectedButton':''}`}>
                                    </button>
                                </div>
                                <div className='singleButtonWrapper'>
                                    <button
                                        onClick={()=>{setnameTag(2)}}
                                        className={`palleteButton palleteButtonOrange ${nameTag===2?'selectedButton':''}`}>
                                    </button>
                                </div>
                                <div className='singleButtonWrapper'>
                                    <button
                                        onClick={()=>{setnameTag(3)}}
                                        className={`palleteButton palleteButtonBlue ${nameTag===3?'selectedButton':''}`}>
                                    </button>
                                </div>
                                <div className='singleButtonWrapper'>
                                    <button
                                        onClick={()=>{setnameTag(4)}}
                                        className={`palleteButton palleteButtonSkyBlue ${nameTag===4?'selectedButton':''}`}>
                                    </button>
                                </div>
                                <div className='singleButtonWrapper'>
                                    <button
                                        onClick={()=>{setnameTag(5)}}
                                        className={`palleteButton palleteButtonGreen ${nameTag===5?'selectedButton':''}`}>
                                </button>
                                </div>
                                <div className='singleButtonWrapper'>
                                    <button
                                        onClick={()=>{setnameTag(6)}}
                                        className={`palleteButton palleteButtonBlack ${nameTag===6?'selectedButton':''}`}>
                                    </button>
                                </div>
                                
                            </div>
                            <div className='downloadNametagWrapper'>
                                
                                <button className='downloadNametag'
                                onClick={()=>{saveFile(nameTag)}}>
                                    Download Nametag
                                </button>
                                
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className="nameTagBottom">
                    <div className="bottomHeader">
                        Print a Nametag That's Easy to Scan
                    </div>
                    <div className='nametagTips'>
                        <div className='singleTipWrapper'>
                            <div className="nametagTipsImage bgp1">

                            </div>
                            <div className="nametagTipsHeading">
                                Keep Your Nametag Clean
                            </div>
                            <div className="nametagTipsDesription">
                            Avoid altering the design or printing on 
                            dark or patterned colors.
                            </div>
                        </div>
                        <div className='singleTipWrapper'>
                            <div className="nametagTipsImage bgp2">

                            </div>
                            <div className="nametagTipsHeading">
                                Stick to flat Surface
                            </div>
                            <div className="nametagTipsDesription">
                                Cameras should be able to capture your entire nametag.
                            </div>
                        </div>

                        <div className='singleTipWrapper'>
                            <div className="nametagTipsImage bgp3">

                            </div>
                            <div className="nametagTipsHeading">
                                Find a Size That Fits
                            </div>
                            <div className="nametagTipsDesription">
                                Print smaller for up-close scans, and larger for scans from a distance
                            </div>
                        </div>
                    </div>
                </div>
                <ProfileFooter/>
                
            </div>
        )

}

export default NameTag;