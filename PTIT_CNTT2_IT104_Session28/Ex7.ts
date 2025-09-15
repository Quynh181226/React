type CallBack=(val: number, idx: number, arr: number[]) => void

const myForEach = (CallBack: CallBack, arr: number[]) => {
    for(let i = 0; i < arr.length; i++) {
        CallBack(arr[i]!, i, arr)
    }
}

const Print=(val: number, idx: number, arr: number[])=>{
    console.log(`Pos: ${idx}, el: ${val}, arr: ${arr}`)
}

const nums:number[]=[1, 2, 3, 4, 5]
myForEach(Print, nums)