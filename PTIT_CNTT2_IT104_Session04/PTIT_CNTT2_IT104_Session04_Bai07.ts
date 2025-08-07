const checkPrime=(n: number)=>{
    if(n < 2) return false
    if(n===2) return true
    for(let i=2; i<=Math.sqrt(n); i++){
        if(n % i===0) return false
    }
    return true
}
const checkStr=(str: string): number=>{
    let cnt=0
    for(let i=0; i<str.length; i++){
        const char=str[i]
        if((char>='a'&&char<='z')||(char>='A'&&char<='Z')){
            cnt++
        }
    }
    return cnt
}
const processInput=(input:number)=>{
    if(typeof input==='string'){
        let flag=true
        for (let i=0; i<input.length; i++){
            if(input[i]<'0'||input[i]>'9'){
                flag=false
                break
            }
        }
        if(flag&&input.length>0){
            return Number(input)**2
        }else{
            return `${checkStr(input)} digit`
        }
    }else if (typeof input==='number'){
        return checkPrime(input)?'prime': 'not prime'
    }else {
        return input ? 'gtri true->t.hanh xly': 'gtri false->dung x.ly'
    }
}
console.log(processInput(true))
console.log(processInput('123qaz!'))
console.log(processInput(10))