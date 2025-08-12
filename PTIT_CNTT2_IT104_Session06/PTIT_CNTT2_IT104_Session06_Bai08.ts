class Book{
    id: number
    title: string
    author: string
    stock: number
    status: number
    constructor(id: number, title: string, author: string, stock: number, status: number) {
        this.id = id
        this.title = title
        this.author = author
        this.stock = stock
        this.status = stock
    }
}
class Member{
    id: number
    name: string
    contact: string
    lendendBooks: LendedBook[]
    status: string
    constructor(id: number, name: string, contact: string, status: string) {
        this.id = id
        this.name = name
        this.contact = contact
        this.lendendBooks = []
        this.status = status
    }
}
class LendedBook{
    memberId: number
    bookId: number
    dueDate: string
    constructor(memberId: number, bookId: number, dueDate: string) {
        this.memberId = memberId
        this.bookId = bookId
        this.dueDate = dueDate
    }
}
class Library{
    books: Book[]
    members: Member[]
    constructor() {
        this.books = []
        this.members = []
    }
    addBook(b: Book){
        this.books.push(b)
    }
    showBook(){
        console.log(this.books)
    }
}

const library = new Library();

const book1 = new Book(1, "Oop", "TS. Nguyễn Hoàng Anh", 5, "available");
const book2 = new Book(2, "DSA", "TS. Nguyễn Mạnh Sơn", 3, "available");
const book3 = new Book(3, "C++", "TS. Quản Trọng Thế", 4, "available");


library.addBook(book1);
library.addBook(book2);
library.addBook(book3);


library.showBook();