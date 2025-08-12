abstract class Shape{
    private name: String
    constructor(name: string){
        this.name=name
    }
    getName(): string{
        return this.name
    }
    abstract getSize(): string
}
class Rectangle extends Shape{
    width: number
    height: number
    constructor(name: string, width: number, height: number) {
        super(name)
        this.width = width
        this.height = height
    }
    getSize(): string {
        return `${this.width}\n ${this.height}`;
    }
}
const rec=new Rectangle('rec', 5, 3)
console.log(rec.getName(),rec.getSize())