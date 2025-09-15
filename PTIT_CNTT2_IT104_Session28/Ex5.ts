type CallBack = (res: boolean) => void

const CheckCondition=(CallBack: CallBack, res: boolean) => {
    setTimeout(()=>{
        CallBack(res)
    }, 1000)
}

const Print=(res :boolean) => {
    console.log("Đk trả về: ", res)
}
CheckCondition(Print, false)