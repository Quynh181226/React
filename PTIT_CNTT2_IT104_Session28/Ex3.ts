type CallBack=(idx: number, val: number) =>void
const processArr=(c: CallBack, arr: number[]) => {
    arr.forEach((val, idx) => {
        setTimeout(()=>{
            c(idx+1, val)
        }, 1000*(idx+1))
    })
}

const logInfo=(idx: number, val: number) =>{
    console.log(`${idx}: ${val}`)
}

const arr: number[] = [1, 2, 3, 4, 5]
processArr(logInfo, arr)