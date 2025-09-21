import type { ProfileType } from "./Ex1ProfileReducer"

const init:ProfileType[] = [
    {
        id: 1,
        fullName: "NVB",
        gender: "Male",
        birthDate: "12-12-2000",
        address: "NVT"
    },
    {
        id: 2,
        fullName: "NTB",
        gender: "Female",
        birthDate: "12-12-2001",
        address: "LVC"},
]

const Ex2ListUserReducer = (state: ProfileType[] = init)=>{
    return state
}

export default Ex2ListUserReducer