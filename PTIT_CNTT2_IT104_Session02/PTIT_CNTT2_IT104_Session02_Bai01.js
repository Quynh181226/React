const sum=(arr)=>{
        let ans=0
        for(const i of arr){
            if(i%2===0){
                ans+=i
            }
        }
        return ans
    }
let arr=[2, 5, 7, 8]
console.log(sum(arr))x