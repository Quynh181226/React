type CallBack = ()=>void

const delayedCallBack=(CallBack: CallBack, delay: number)=>{
    setTimeout(()=>{
        CallBack()
    }, delay)
}

const CallFriend: CallBack=()=>{
    console.log("CallFriend")
}
delayedCallBack(CallFriend, 200)