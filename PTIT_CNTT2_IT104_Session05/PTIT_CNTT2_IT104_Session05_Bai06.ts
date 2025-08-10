class Book{
    private readonly title:string
    private readonly author:string
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
    public printBooks(): void{
        this.books.forEach((book, idx)=>{
            console.log(`${idx+1}. ${book.getInfor()}`)
        })
    }
}
const lib=new Library()
lib.addBook(new Book('1001', 'Laydy'))
lib.addBook(new Book('1002', 'Laydy'))
lib.addBook(new Book('1003', 'Laydy'))
lib.addBook(new Book('1004', 'Laydy'))
lib.addBook(new Book('1005', 'Laydy'))
lib.printBooks()