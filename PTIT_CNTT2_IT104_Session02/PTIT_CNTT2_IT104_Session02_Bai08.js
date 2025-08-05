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
]
let displayUserInfo=(user)=>{
    console.log(`${user.name} ${user.age} ${user.location.city} work as ${user.job.title} at ${user.job.company} ${user.location.country} ${user.contact.email} ${user.contact.phone}`);
}
displayUserInfo(user[0])