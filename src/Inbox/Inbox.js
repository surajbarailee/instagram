import './Inbox.css'





const messagelist=[

    {
        id:1,
        username:'marionette',
        picture:'',
        last_message:'huss goodnight',
        date:'27w',
        seen:true,
        verified:true
    },
    {
        id:2,
        username:'handemiyy',
        picture:'',
        last_message:'Sent you a message',
        date:'31w',
        seen:false,
        verified:false,
    },
    {
        id:3,
        username:'ankit_vaidya',
        picture:'',
        last_message:'Dhanyabaad haii',
        date:'42w',
        seen:true,
        verified:false,
    },
    {
        id:4,
        username:'nepali_riders_in_california',
        picture:'',
        last_message:'Active 2h ago',
        date:'',
        seen:true,
        verified:false,
    },
    {
        id:5,
        username:'marionette',
        picture:'',
        last_message:'Sent you a message',
        date:'81w',
        seen:true,
        verified:false,
    },
    {
        id:6,
        username:'anjana_nair15',
        picture:'',
        last_message:'Active Now',
        date:'',
        seen:true,
        verified:false,
    },
    {
        id:6,
        username:'chelsea_bipul',
        picture:'',
        last_message:'Active 2h ago',
        date:'',
        seen:true,
        verified:false,
    },
    {
        id:7,
        username:'madritista',
        picture:'',
        last_message:'ahh ma aaisake',
        date:'94w',
        seen:true,
        verified:false,
    },
    {
        id:8,
        username:'madritista',
        picture:'',
        last_message:'ahh ma aaisake',
        date:'94w',
        seen:true,
        verified:false,
    },
    {
        id:9,
        username:'roshni_acharya',
        picture:'',
        last_message:'sakkisakyo tyo ta',
        date:'100w',
        seen:true,
        verified:false,
    },
    {
        id:10,
        username:'bhawana_stores',
        picture:'',
        last_message:'hajur xa',
        date:'195w',
        seen:true,
        verified:false,
    }



]








const Inbox=()=>{
    return (
        <div className='inboxMainWrapper'>
            <div className="inboxMainContainer">
                <div className="messageNavigation">
                    <div className="newMessage">
                        <div className="profileName">
                            <div>
                                suraj_barailee
                            </div>
                            <div style={{transform: 'rotate(180deg)',padding:'0px 10px'}}>
                                <svg aria-label="Down Chevron Icon" class="_8-yf5 " fill="#262626" height="20" role="img" viewBox="0 0 48 48" width="20"><path d="M40 33.5c-.4 0-.8-.1-1.1-.4L24 18.1l-14.9 15c-.6.6-1.5.6-2.1 0s-.6-1.5 0-2.1l16-16c.6-.6 1.5-.6 2.1 0l16 16c.6.6.6 1.5 0 2.1-.3.3-.7.4-1.1.4z"></path></svg>
                            </div>

                        </div>
                        <div className="newMessageIcon">
                            <svg aria-label="New Message" class="_8-yf5 " fill="#262626" height="24" role="img" viewBox="0 0 44 44" width="24"><path d="M33.7 44.12H8.5a8.41 8.41 0 01-8.5-8.5v-25.2a8.41 8.41 0 018.5-8.5H23a1.5 1.5 0 010 3H8.5a5.45 5.45 0 00-5.5 5.5v25.2a5.45 5.45 0 005.5 5.5h25.2a5.45 5.45 0 005.5-5.5v-14.5a1.5 1.5 0 013 0v14.5a8.41 8.41 0 01-8.5 8.5z"></path><path d="M17.5 34.82h-6.7a1.5 1.5 0 01-1.5-1.5v-6.7a1.5 1.5 0 01.44-1.06L34.1 1.26a4.45 4.45 0 016.22 0l2.5 2.5a4.45 4.45 0 010 6.22l-24.3 24.4a1.5 1.5 0 01-1.02.44zm-5.2-3h4.58l23.86-24a1.45 1.45 0 000-2l-2.5-2.5a1.45 1.45 0 00-2 0l-24 23.86z"></path><path d="M38.2 14.02a1.51 1.51 0 01-1.1-.44l-6.56-6.56a1.5 1.5 0 012.12-2.12l6.6 6.6a1.49 1.49 0 010 2.12 1.51 1.51 0 01-1.06.4z"></path></svg>
                        </div>
                    </div>
                </div>
                <div className="messageBox">
                    
                </div>
            </div>
        </div>
    )
}

export default Inbox;