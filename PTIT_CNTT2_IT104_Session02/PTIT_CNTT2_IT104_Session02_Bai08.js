let user=[
    {
        name: "John",
        age: 25,
        location: {
            city: "Ha Noi",
            country: "VN",
        },
        contact: {
            email: "John@icloud.com",
            phone: "0338774402"
        },
        job: {
            title: "dev",
            company: "Viettel"
        }
    }
]x
let displayUserInfo=(user)=>{
    console.log(`${user.name} ${user.age} ${user.location.city} ${user.location.country} ${user.contact.email} ${user.contact.phone}`);
}
displayUserInfo(user[0])