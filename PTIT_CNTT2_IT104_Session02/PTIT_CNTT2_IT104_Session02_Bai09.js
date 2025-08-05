const student= {
    name: "Dev",
    age: 25,
    listSubject:[
        {subject: 'Math', score: 9},
        {subject: 'Literature', score: 7},
        {subject: 'English', score: 8.5}
    ]
}
const classsification=(avg) => {
    if(avg>=8.5) return 'Hs gioi'
    else if(avg>=7) return 'Hs kha'
    else if(avg>=5) return 'Hs Tb'
    else return 'Hs yeu'
}
const maxPoint=(arr)=>{
    let max=arr[0]
    arr.forEach(el=>{
        if(el.score > max.score){
            max=el
        }
    })
    return max
}
const minPoint=(arr)=>{
    let min=arr[0]
    arr.forEach(el=>{
        if(el.score < min.score){
            min=el
        }
    })
    return min
}
const Avg=(arr)=>{
    let sum=0
    for(let i=0;i<arr.length;i++){
        sum += arr[i].score
    }
    return sum/arr.length;
}
const print=(stu)=>{
    let list=stu.listSubject
    let avg=Avg(list)

    let Max=maxPoint(list)
    let Min=minPoint(list)

    return `
            ${stu.name} is ${stu.age} years old
            Avg score: ${avg.toFixed(2)}->${classsification(avg)}
            Best sub: ${Max.subject} (${Max.score})
            Weakest sub: ${Min.subject} (${Min.score})
           `
}
console.log(print(student))