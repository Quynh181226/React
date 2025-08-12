//adstract class co the chua methob bthg va adstract method
abstract class Job{
    type: string

    constructor(type: string) {
        this.type = type
    }
    //methob thong thg co the sdung ttiep or override
    printType(): void {
        console.log(`Type  job: ${this.type}`)
    }

    //abstract method chi kbao, ko co than ham, lop con bat buoc dinh nghia
    abstract calcSalary(): number
}
//class con ke thua tu adstrct class va dinh nghia chi tiet cho abstract
class partTimeJob extends Job{
    workingHour: number

    constructor(props, workingHour: number) {
        //goi c.. class cha
        super(props)
        this.workingHour = workingHour
    }
    //dinh nghia lai pthuc abstract calc
    calcSalary(): number {
        return 30000 * this.workingHour
    }
}
class fullTimeJob extends Job{
    constructor(type: string) {
        super(type);
    }
    //ttu
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