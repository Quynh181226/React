const point: number[]=[8.5, 7.2, 9.0, 6.8, 7.5, 8.0, 6.9, 9.2, 7.8, 8.3]
let total=0
for (const i of point){
    total+=i
}
const avg=total/point.length
console.log(avg.toFixed(2))