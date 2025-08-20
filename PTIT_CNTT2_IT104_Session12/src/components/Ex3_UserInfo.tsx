export default function Ex3_UserInfo() {
    const person = {
        name: "Quynh",
        sex: "Female",
        dob: "18/12/2006",
        email: "q2682@icloud.com",

    }
    const address="Ntl, Hn"
    return (
        <div className="container">
            <h2>Personal information</h2>
            <ul>
                <li>Ho va ten: {person.name}</li>
                <li>Gioi tinh: {person.sex}</li>
                <li>Ngay sinh: {person.dob}</li>
                <li>Email: {person.email}</li>
                <li>Dia chi: {address}</li>
            </ul>
        </div>
    )
}