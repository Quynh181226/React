abstract class Animal{
    public name: string
    constructor(name: string) {
        this.name=name
    }
    abstract makeNose(): void
    abstract printName(): void
}
class Dog extends Animal{
    printName(): void {
        console.log(this.name)
    }
    makeNose(): void{
        console.log('au au')
    }
}
class Cat extends Animal{
    printName(): void {
        console.log(this.name)
    }
    makeNose(): void{
        console.log('eo eo')
    }
}
const dog=new Dog('dog')
dog.printName()
dog.makeNose()
const cat=new Cat('cat')
cat.printName()
cat.makeNose()
