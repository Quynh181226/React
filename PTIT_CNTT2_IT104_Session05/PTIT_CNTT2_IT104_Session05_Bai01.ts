class Vehicle{
    name: string
    year: number
    company: string
    constructor(name: string, year: number, company: string) {
        this.name = name
        this.year = year
        this.company = company
    }
    getInfor(): string{
        return `${this.name} ${this.year} ${this.company}`
    }
}
const v1=new Vehicle('la', 2022, 'wave')
const v2=new Vehicle('ha', 2024, 'wave')
console.log(v1.getInfor())
console.log(v2.getInfor())