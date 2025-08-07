const check=(val: string|number)=> {
    if(typeof val==='string')
        console.log(`${val.length} digit`)
    else
        console.log(val%2===0?'even':'odd')
}
check('nhithuy')
check(5)
check(10)