let firstName: string='Quynh'
let lastName: string='Nhi'
const check=(str: string): string =>{
    if(str.length===0) return str
    return str[0].toUpperCase()+str.slice(1)
}
let fullName: string=check(firstName)+' '+check(lastName)
console.log(fullName)