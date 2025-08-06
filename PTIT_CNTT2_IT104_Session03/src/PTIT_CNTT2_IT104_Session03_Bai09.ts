const btnSum = document.getElementById("btnSum") as HTMLButtonElement
const btnSub = document.getElementById("btnSub") as HTMLButtonElement
const btnMul = document.getElementById("btnMul") as HTMLButtonElement
const btnDiv = document.getElementById("btnDiv") as HTMLButtonElement
const btnPower= document.getElementById("btnPower") as HTMLButtonElement
const btnSqrt=document.getElementById("btnSqrt") as HTMLButtonElement
const btnFactorial= document.getElementById("btnFactorial") as HTMLButtonElement
const calc=document.getElementById("cal") as HTMLButtonElement
const ans=document.getElementById("ans") as HTMLDivElement
const input1= document.getElementById("input1") as HTMLInputElement
const input2= document.getElementById("input2") as HTMLInputElement

btnSum.addEventListener("click", ()=> curr="+")
btnSub.addEventListener("click", ()=> curr="-")
btnMul.addEventListener("click", ()=> curr="*")
btnDiv.addEventListener("click", ()=> curr="/")
btnPower.addEventListener("click", ()=> curr="^")
btnSqrt.addEventListener("click", ()=> curr="√")
btnFactorial.addEventListener("click", ()=> curr="!")

let curr=""

let res: number
let text: string
calc.addEventListener('click', ()=>{
    const x=parseFloat(input1.value)
    const y=parseFloat(input2.value)
    if(isNaN(x)) return
    if(isNaN(y) && curr!=="!") return
    switch (curr){
        case "+":
            res=x+y
            text=`${x}+${y}=${res}`
            break;
        case "-":
            res=x-y
            text=`${x}-${y}=${res}`
            break;
        case "*":
            res=x*y
            text=`${x}*${y}=${res}`
            break;
        case "/":
            if(y===0) return
            res=x/y
            text=`${x}/${y}=${res}`
            break;
        case "^":
            res=Math.pow(x, y)
            text=`${x}^${y}=${res}`
            break;
        case "√":
            if(y===0) return
            res=Math.pow(x, 1/y)
            text=`${y}√${x}=${res.toFixed(2)}`
            break;
        case "!":
            if(x<0) return
            if(!Number.isInteger(x)) return
            res=factorial(x)
            text=`${x}!=${res}`
            break;
        default:
            showError('Invalid')
            return
    }
    ans.textContent=text
    ans.className=""
})
factorial=(n: number)=> {
    return n<=1 ? 1: n*factorial(n-1)
}
showError=(mes: string)=>{
    ans.textContent=`Loi: ${mes}`
    ans.className="error"
}