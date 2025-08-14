function check <T extends boolean>(val: T){
    if(val==true) console.log('hi')
    else console.log('buy')
}
const n: boolean=true
check(n)