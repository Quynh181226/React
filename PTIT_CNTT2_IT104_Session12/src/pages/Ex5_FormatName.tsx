export const Ex5_FormatName=()=>{
    interface User {
        firstName: string
        lastName: string
    }
    const user: User = {
        firstName: "Nguyễn Văn",
        lastName: "Nam"
    }
    const formatName=(u: User): string => {
        return `Full name: ${u.firstName} ${u.lastName}`
    }
    return <div>{formatName(user)}</div>
}