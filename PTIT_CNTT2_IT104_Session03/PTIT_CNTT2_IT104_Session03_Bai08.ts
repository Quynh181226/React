const cal=(a: number|string, b: number|string)=>{
    const numA=Number(a), numB=Number(b)
    if(isNaN(Number(a))||isNaN(Number(b))) return 'Invalid'
    console.log(`Total: ${numA+numB}`)
    console.log(`Sub: ${numA-numB}`)
    console.log(`Mul: ${numA*numB}`)
    console.log(`Div: ${numB!==0 ? numA/numB : 'Cannot divide for 0'}`)
}
cal('10', 2)