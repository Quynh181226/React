interface person{
    name: string
    age: number
}
interface employee{
    id: string
    departmant: string
}
type staffMember=person&employee;
const print=(staff: staffMember)=>{
    console.log(`Employ: ${staff.name} (${staff.age }), MNV: ${staff.id}-Department: ${staff.departmant}`)
}
const staff1: staffMember={
    name: 'lala',
    age: 10,
    id: "NV001",
    departmant: 'LA'
}
print(staff1)