class Animal{
    private name: string
    protected age: number
    public species: string
    constructor(name: string, age: number, species: string) {
        this.name = name
        this.age = age
        this.species = species
    }
    speak(){
        console.log('trang hap')
    }
    getName(){
        return this.name
    }
    setName(name: string){
        this.name = name
    }
    getAge(){
        return this.age
    }
    setAge(age: number){
        this.age = age
    }
}
class Dog extends Animal{
    public breed: string
    constructor(name: string, age: number, species: string, breed: string) {
        super(name, age, species)
        this.breed = breed
    }
    speak():void {
        console.log('trang le')
    }
}
let randomAnimal = new Animal("animal",10,"Mamal")
randomAnimal.speak()
console.log(randomAnimal.getName())
console.log(randomAnimal.getAge())
randomAnimal.speak()
let dog = new Dog("Trang beo",20,"Mamal","pug")
