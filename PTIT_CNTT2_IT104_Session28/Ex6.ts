type CallBack = (task: string, delay: number) => void

const Print=(task: string, delay: number) => {
    console.log(`Func ${task} đc thực thi sau ${delay}ms`)
}

const task1=(delay: number) => {
    setTimeout(()=>{
        Print("task1", delay)
    }, delay)
}

const task2=(delay: number) => {
    setTimeout(()=>{
        Print("task2", delay)
    }, delay)
}

const task3=(delay: number) => {
    setTimeout(()=>{
        Print("task3", delay)
    }, delay)
}

task1(1000)
task2(1500)
task3(2000)