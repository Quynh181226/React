let str: string='banana'
let res: string=""
for (let i of str){
    if(!res.includes(i)){
        res+=i
    }
}
console.log(res)