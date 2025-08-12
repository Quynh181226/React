interface changeSpeed{
    SpeedUp(speed:number): void
    slowDown(speed:number): void
    stop(): void
}
class Vehicle implements changeSpeed{
    private speed:number
    constructor(speed:number): void{
        this.speed=speed
    }
    SpeedUp(speed:number): void{
        this.speed+=speed
        console.log('SpeedUp: '+this.speed)
    }
    slowDown(speed:number): void{
        this.speed-=speed
        console.log('SlowDown : '+this.speed)
    }
    stop(): void{
        this.speed=0
        console.log('Stop')
    }
}
const vehicle=new Vehicle(50)
vehicle.SpeedUp(20)
vehicle.slowDown(10)
vehicle.stop()