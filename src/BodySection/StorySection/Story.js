import './Story.css'


const Story=()=>{
    const scrollLeft=()=>{

        var element = document.getElementById("storyPresentation")
        element.scrollLeft = element.scrollLeft - 240
    }
    const scrollRight=()=>{
        var element = document.getElementById("storyPresentation")
        element.scrollLeft = element.scrollLeft + 240
    }
    return (
        <div className="storyWrapper"  id="storyWrapper">
            <div id='storyPresentation' className='storyPresentation'>
                {
                    userStory.map((data,i)=>{
                        return <SingleStory imgsource={data.profile} username={data.username} key={data.id}/>
                    })
                }
            </div>
            <div className = "arrowWrapper">
                <div className="leftArrowWrapper" onClick={scrollLeft}/>
                    
                <div className="rightArrowWrapper" onClick={scrollRight}/>   
                {/* <div className={"leftArrowWrapper "+ (document.getElementById("storyPresentation").scrollLeft===0? "removeArrow":"")} onClick={scrollLeft}/>
                    
                <div className={"rightArrowWrapper "+ (document.getElementById("storyPresentation").scrollRight===0? "removeArrow":"")} onClick={scrollRight}/>    */}
            </div>
        </div> 
    )
}




const SingleStory=(props)=>{
    return (
        <div className="singleStory" style={{paddingLeft:'6px'}}>
                <div className='storyImageWrapper'>
                    <div className='storyImageDiv' >
                        <img src={props.imgsource} alt="" width='56px' height='56px' className='storyImage'/>
                    </div>
                </div>
                <div className="storyUsername" style={{textAlign:'center'}}>
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