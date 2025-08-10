class Book{
    id: number
    title:string
    author:string
    year:number
    constructor(id: number, title:string, author:string, year:number){
        this.id = id;
        this.title = title
        this.author = author
        this.year = year
    }
    public getInfor(): string{
        return `${this.title} ${this.author} ${this.year}`
    }
}
class Library{
    private Books: Book[]=[]
    public addBook(b:Book): void{
        this.Books.push(b)
    }
    public printBooks(): void{
        this.Books.forEach((book, idx)=>{
            console.log(`${idx+1}. ${book.getInfor()}`)
        })
        console.log('\n')
    }
    public editBook(id: number, title: string, author: string, year: number): void{
        this.Books.forEach((b, idx) => {
            if (b.id === id) {
                b.title = title
                b.author = author
                b.year = year
            }
            return
        })
    }
    public deleteBook(id:number):void{
        const idx=this.Books.findIndex(b=>b.id === id)
        if(idx!=-1) this.Books.splice(idx,1)
        return
    }
}
const lib=new Library()
lib.addBook(new Book(1, '1001', 'Laydy', 1900))
lib.addBook(new Book(2, '1002', 'Laydy', 1900))
lib.addBook(new Book(3, '1003', 'Laydy', 1900))
lib.addBook(new Book(4, '1004', 'Laydy', 1900))
lib.addBook(new Book(5, '1005', 'Laydy', 1900))
lib.printBooks()

lib.editBook(1, '1111', 'Laydy', 1901)
lib.printBooks()

lib.deleteBook(3)
lib.printBooks()