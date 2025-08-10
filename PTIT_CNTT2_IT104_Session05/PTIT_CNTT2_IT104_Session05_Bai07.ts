class Book{
    private id: number
    public title:string
    public author:string
    constructor(id: number, title:string, author:string){
        this.id = id
        this.title = title
        this.author = author
    }
    public getId():number{
        return this.id
    }
    public getInfo(): string{
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
            console.log(`${idx+1}. ${book.getInfo()}`)
        })
        console.log('\n')
    }
    public updateBook(id: number, newTitle: string, newAuthor: string):void{
        const book=this.books.find(b=>b.getId() === id)
        if(book){
            book.title = newTitle;
            book.author = newAuthor;
        }
        return
    }
}
const lib=new Library()
lib.addBook(new Book(1, '1001', 'Laydy'))
lib.addBook(new Book(2, '1002', 'Laydy'))
lib.addBook(new Book(3, '1003', 'Laydy'))
lib.addBook(new Book(4, '1004', 'Laydy'))
lib.addBook(new Book(5, '1005', 'Laydy'))
lib.printBooks()
lib.updateBook(3, '1333', 'Laydy')
lib.printBooks()