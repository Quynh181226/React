class Employee {
    public name: string
    protected company: string
    private phone: string
    constructor(name: string, company: string, phone: string) {
        this.name = name
        this.company = company
        this.phone = phone
    }
    public printInfor(): void{
        console.log(this.name, this.company, this.phone)
    }
}
const emply=new Employee("Na", 'Maly', '0928777112')
emply.printInfor()