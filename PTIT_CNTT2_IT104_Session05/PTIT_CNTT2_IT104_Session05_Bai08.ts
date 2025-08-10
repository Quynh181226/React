class Book{
    public title:string
    public author:string
    constructor(title:string, author:string){
        this.title = title
        this.author = author
    }
    public getInfor(): string{
        return `${this.title} ${this.author}`
    }
}
class Library{
    private books: Book[]=[]
    public addBook(book:Book): void{
        this.books.push(book)
    }
    public findBook(name: string):void{
        this.books.forEach((b)=>{
                if(b.title.includes(name)){
                    console.log(b.getInfor())
                }
        })
    }
}
const lib=new Library()
lib.addBook(new Book('1001', 'Laydy'))
lib.addBook(new Book('1002', 'Laydy'))
lib.addBook(new Book('1003', 'Laydy'))
lib.addBook(new Book('1004', 'Laydy'))
lib.addBook(new Book('1005', 'Laydy'))
lib.findBook('1001')