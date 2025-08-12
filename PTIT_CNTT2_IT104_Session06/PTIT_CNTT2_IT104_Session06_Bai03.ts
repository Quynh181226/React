abstract class Job{
    type: string

    constructor(type: string) {
        this.type = type
    }

    printType(): void {
        console.log(`Type  job: ${this.type}`)
    }

    abstract calcSalary(): number
}
class partTimeJob extends Job{
    workingHour: number

    constructor(props, workingHour: number) {
        super(props)
        this.workingHour = workingHour
    }
    calcSalary(): number {
        return 30000 * this.workingHour
    }
}
class fullTimeJob extends Job{
    constructor(type: string) {
        super(type);
    }
    calcSalary(): number {
        return 10000000
    }
}

const partTime=new partTimeJob('p', 80)
const fullTime=new fullTimeJob('f')

partTime.printType()
console.log('partTime: '+partTime.calcSalary())

partTime.printType()
console.log('fullTime: '+fullTime.calcSalary())