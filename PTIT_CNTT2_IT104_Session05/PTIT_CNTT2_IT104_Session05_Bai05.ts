class Rectangle{
    private width:number
    private height:number
    constructor(width:number, height:number){
        this.width = width
        this.height = height
    }
    public getWith(): number{
        return this.width
    }
    public setWith(width:number){
        this.width = width
    }
    public getHeight():number{
        return this.height
    }
    public setHeight(height:number){
        this.height = height
    }
    public getPeri(): number{
        return 2*(this.width+this.height)
    }
    public getArea(): number{
        return this.width*this.height
    }
}
const rec =new Rectangle(10, 8)
console.log("w  h  p  a\n"+rec.getWith(), rec.getHeight(), rec.getPeri(), rec.getArea())
rec.setWith(5)
rec.setHeight(20)
console.log(rec.getWith(), rec.getHeight(), rec.getPeri(), rec.getArea())