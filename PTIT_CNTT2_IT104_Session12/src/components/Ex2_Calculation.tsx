export const Ex2_Calculation=()=>{
    const sum=(a: number, b: number): number=>{
        return a+b
    }
    const sub=(a: number, b: number): number=>{
        return a-b
    }
    const mul=(a: number, b: number): number=>{
        return a*b
    }
    const div=(a: number, b: number): number=>{
        return a/b
    }
    return(
        <div>
            <h2>List result</h2>
            <ul>
                <li>10+10={sum(10, 10)}</li>
                <li>10-10={sub(10, 10)}</li>
                <li>10*10={mul(10, 10)}</li>
                <li>10/10={div(10, 10)}</li>
            </ul>
        </div>
    )
}