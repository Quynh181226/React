interface Geometry{
    calcArea(): number
    calcPerimeter(): number
}
class Circle implements Geometry{
    private radius: number
    constructor(radius: number){
        this.radius = radius
    }
    calcArea(): any {
        return Math.PI * this.radius * this.radius
    }
    calcPerimeter(): any {
        return 2 * Math.PI *this.radius
    }
}

class Rec implements Geometry{
    private width: number
    private height: number
    constructor(width: number, height: number){
        this.width = width
        this.height = height
    }
    calcArea(): any {
        return this.width * this.width
    }
    calcPerimeter(): any {
        return (this.height + this.height) * 2
    }
}

//bk
const circle=new Circle(5)
//d r
const rec=new Rec(4, 6)
console.log('\t a p')
console.log('Circle: '+rec.calcArea(), rec.calcPerimeter())
console.log('Perimeter: '+ rec.calcArea(), rec.calcPerimeter())
