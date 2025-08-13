class Vehicle{
    protected name: string
    protected speed: number
    protected id: string
    constructor(name: string, speed: number, id: string) {
        this.name=name
        this.speed=speed
        this.id=id
    }
    slowDown(val: number): number{
        return this.speed=this.speed-val
    }
    speedUp(val: number): number{
        return this.speed=this.speed+val
    }
    showSpeed(){
        console.log(this.speed)
    }
}
class Bicycle extends Vehicle{
    private gear: number
    constructor(name: string, speed: number, id: string, gear: number) {
        super(name, speed, id)
        this.gear=gear
    }
}
const bicycle=new Bicycle('Laydo', 20, 'A001', 32)
bicycle.speedUp(20)
bicycle.showSpeed()