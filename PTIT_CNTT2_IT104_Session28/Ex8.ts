type CallBack = <T> (val1: T, val2: T) => boolean

const MyFilter = <T> (CallBack: CallBack, arr: T[], val: T) => {
    const res: T[]=[]
    for (let i = 0; i < arr.length; i++) {
        if (CallBack(arr[i],val)!) {
            res.push(arr[i]!)
        }
    }
    console.log(res)
    return res
}

const Check =<T> ( value1: T, value2 : T):boolean=>{
    if(value1 === value2) return true
    return false
}

const nums : number[] = [1,2,2,3,4,5,6]
MyFilter(Check, nums, 2)
MyFilter(Check, nums, 10)