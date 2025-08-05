class Contact{
    constructor(name, phone, email){
        this.name = name;
        this.phone = phone;
        this.email = email;
    }
    toString(){
        return `Name ${this.name} Phone: ${this.phone} Email: ${this.email}`;
    }
}
let phoneBooks=[]
addContact=(name, phone, email)=>{
    const contact = new Contact(name, phone, email)
    phoneBooks.push(contact)
}
displayContact=()=>{
    if(phoneBooks.length===0) return
    console.log('List: ')
    for(let i=0;i<phoneBooks.length;i++){
        console.log(`${i+1}. ${phoneBooks[i].toString()}`)
    }
}
addContact('Thuận', '0123457999', 'thuan@icloud.com')
addContact('Tú', '0792520027', 'tu@icloud.com')
displayContact()x