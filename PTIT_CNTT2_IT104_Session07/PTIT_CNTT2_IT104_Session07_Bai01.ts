class Emplyee{
    name: string
    company: string
    private phone: string
    constructor(name: string, company: string, phone: string){
        this.name=name
        this.company=company
        this.phone=phone
    }
    printInfo(){
        console.log(this.name, this.company, this.phone)
    }
    getPhone(){
        return this.phone
    }
}
class Manager extends Emplyee{
    teamSize: number
    constructor(name: string, phone: string, company: string, teamSize: number) {
        super(name, company, phone)
        this.teamSize=teamSize
    }
    printInfo() {
        console.log(this.name, this.company)
    }
}
const manager=new Manager('Quynh', 'Ptit', '09227272625', 8)
console.log(manager)