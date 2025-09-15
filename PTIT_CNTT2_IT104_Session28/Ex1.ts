type CallBack=(result: number) => void

const Sum=(a: number, b: number, CallBack:CallBack)=>{
    const res=a+b
    CallBack(res)
}

Sum(13, 4, (ans)=>{
    console.log(ans)
})