class Vehicle{
    readonly id:number
    public name:string
    protected year:number
    private company:string
    constructor(id: number, name:string, year:number, company:string){
        this.id = id
        this.name = name
        this.year = year
        this.company = company
    }
    public printInfor(){
        console.log(this.id, this.name, this.year, this.company)
    }
}
const vehicle=new Vehicle(1, 'Lolo', 1990, 'NhaNha')
vehicle.printInfor()