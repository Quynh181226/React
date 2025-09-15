type CallBack=(num: number) => void
const DisplayNumber=(CallBack: CallBack, delay: number)=>{
    let cnt=1
    setInterval(()=>{
        CallBack(cnt)
        cnt++
    }, delay)
}

const Print=(cnt: number) => {
    console.log(cnt)
}

DisplayNumber(Print, 2000)