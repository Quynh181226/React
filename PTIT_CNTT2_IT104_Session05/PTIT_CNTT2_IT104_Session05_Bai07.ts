class Book{
    private readonly id: number
    public title:string
    public author:string
    constructor(title:string, author:string){
        this.title = title
        this.author = author
    }
    public getId():number{
        return this.id
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
        console.log('\n')
    }
    public updateBook(id: number, newTitle: string, newAuthor: string):void{
        const book=this.books.find(b=>b.getId() === id)
        if(book){
            book.this.title = newTitle;
            book.this.author = newAuthor;
        }
        return
    }
}
const lib=new Library()
lib.addBook(new Book('1001', 'Laydy'))
lib.addBook(new Book('1002', 'Laydy'))
lib.addBook(new Book('1003', 'Laydy'))
lib.addBook(new Book('1004', 'Laydy'))
lib.addBook(new Book('1005', 'Laydy'))
lib.printBooks()
lib.updateBook(3, '1333', 'Laydy')
lib.printBooks()