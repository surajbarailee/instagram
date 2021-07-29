
import './Searchresult.css'
import { useState } from 'react'
const SearchResult=()=>{
    const [history,updateHistory]=useState(searchHistoryData)
    const updateHistoryWrapper=(id)=>{
    if (id===0){
        updateHistory([])
    }
    else{
        var new_history=history.filter(data=>data['id']!==id)
        updateHistory(new_history)
    }
}
    return (
        <div className='searchResult'>
            <div className="diamondDiv"/>
            <div className='searchSuggestionWrapper'/>
            <div className='searchSuggestion'>
                <div className="searchHeader">
                    <div className="recent">
                        Recent
                    </div>
                    <div className='clear' style={{color:'#0095f6',cursor:'pointer'}} onClick={()=>{updateHistoryWrapper(0)}}>
                        Clear All
                    </div>
                </div>
                    <div className="suggestionList" style={{minHeight:'315px'}}>
                    {
                        history.map((data,i)=>{
                            return <SearchHistoryList data={data} key={data.id} updatehistory={updateHistoryWrapper}/>
                        })
                    }     
                </div>
            </div>
        </div>
    )
}

const searchHistoryData=[
    {
        id:1,
        realname:'Bipul Chettri',
        username:'bipulchettri',
        followerFriends:[],
        accountLink:'https://www.instagram.com/bipulchettri/',
        profilePicture:'https://picsum.photos/id/1001/60/60',
        story:false,
        storyurl:'',
        verified:true
        
    },
    {
        id:2,
        realname:'Coder Humor',
        username:'coder.wow',
        followerFriends:['phantom.lancer'],
        accountLink:'https://www.instagram.com/bipulchettri/',
        profilePicture:'https://picsum.photos/id/21/60/60',
        story:false,
        storyurl:'',
        verified:true
    },
    {
        id:3,
        realname:'Create Programs',
        username:'programcreator',
        followerFriends:[],
        accountLink:'https://www.instagram.com/coder.wow/',
        profilePicture:'https://picsum.photos/id/1/50/50',
        story:false,
        storyurl:'',
        verified:false
    },
    {
        id:4,
        realname:'Inks and Arts',
        username:'penandink_art',
        followerFriends:['nature_prophet','lancer'],
        accountLink:'https://www.instagram.com/penandink_art/',
        profilePicture:'https://picsum.photos/id/1035/60/60',
        story:false,
        storyurl:'',
        verified:false
    },
    {
        id:5,
        realname:'Asmi Shrestha',
        username:'asmishresth',
        followerFriends:['lina','rikimaru'],
        accountLink:'https://www.instagram.com/asmishrestha/',
        profilePicture:'https://picsum.photos/id/1082/60/60',
        story:false,
        storyurl:'',
        verified:true
    },
    {
        id:6,
        realname:'Bipul Chettri',
        username:'bipulchettri',
        followerFriends:['gaben','invoker','phantom_assasin'],
        accountLink:'https://www.instagram.com/bipulchettri/',
        profilePicture:'https://picsum.photos/id/1001/60/60',
        story:false,
        storyurl:'',
        verified:false
    },
    {
        id:7,
        realname:'Coder Humor',
        username:'coder.wow',
        followerFriends:['phantom.lancer'],
        accountLink:'https://www.instagram.com/bipulchettri/',
        profilePicture:'https://picsum.photos/id/21/60/60',
        story:false,
        storyurl:'',
        verified:true
    },
    {
        id:8,
        realname:'Create Programs',
        username:'programcreator',
        followerFriends:['ogre_magi','slark','lancer','io'],
        accountLink:'https://www.instagram.com/coder.wow/',
        profilePicture:'https://picsum.photos/id/1/50/50',
        story:false,
        storyurl:'',
        verified:false
    },
    {
        id:9,
        realname:'Inks and Arts',
        username:'penandink_art',
        followerFriends:['nature_prophet','lancer'],
        accountLink:'https://www.instagram.com/penandink_art/',
        profilePicture:'https://picsum.photos/id/1035/60/60',
        story:false,
        storyurl:'',
        verified:true
    },
    {
        id:10,
        realname:'Asmi Shrestha',
        username:'asmishresth',
        followerFriends:['lina','rikimaru'],
        accountLink:'https://www.instagram.com/asmishrestha/',
        profilePicture:'https://picsum.photos/id/1082/60/60',
        story:false,
        storyurl:'',
        verified:false
    }

]

const SearchHistoryList =(props)=>{
    console.log(props.data.id)
    var followers = props.data.followerFriends[0]
    var total= props.data.followerFriends.length
    if(total===1){
        followers = '. Followed by '+ props.data.followerFriends[0]
    }
    if(total>1){
        followers = props.data.followerFriends.join(',')
        followers = followers.slice(0,10)
        followers = '. Followed by '+followers + "..."

    }
    if(total===0){
        followers = ""
    }
    return(
    <div className="historyList" >
        <div >
            <img src={props.data.profilePicture} alt="profile" width='36px' height='36px' style={{borderRadius:'32px'}}/>  
        </div>
        <div className="accountNameWrapper" style={{marginLeft:'10px'}}>
            <div className="username" style={{display:'flex'}}>
                <div>
                    <b>{props.data.username}&nbsp;</b>
                </div>
                {props.data.verified && 
                <div className='verifiedIcon'>
                </div>}
            </div>
            <div className="accountDetail"  style={{fontSize:'12px',fontWeight:'300',display:'flex'}}>
                {props.data.realname} <div>.</div> {followers}
            </div>
        </div>
        <div  onClick={()=>{props.updatehistory(props.data.id)}}>
        <svg aria-label="Close"  fill="#8e8e8e" height="16" role="img" viewBox="0 0 48 48" width="16"><path clipRule="evenodd" d="M41.8 9.8L27.5 24l14.2 14.2c.6.6.6 1.5 0 2.1l-1.4 1.4c-.6.6-1.5.6-2.1 0L24 27.5 9.8 41.8c-.6.6-1.5.6-2.1 0l-1.4-1.4c-.6-.6-.6-1.5 0-2.1L20.5 24 6.2 9.8c-.6-.6-.6-1.5 0-2.1l1.4-1.4c.6-.6 1.5-.6 2.1 0L24 20.5 38.3 6.2c.6-.6 1.5-.6 2.1 0l1.4 1.4c.6.6.6 1.6 0 2.2z" fillRule="evenodd"></path></svg> 
        </div>
    </div>
    )
}




export default SearchResult;