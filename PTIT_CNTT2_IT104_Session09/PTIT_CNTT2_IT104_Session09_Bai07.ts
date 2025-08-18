interface User{
    id: number
    name: string
    email: string
    age?: number
}

type UserUpdates = Partial<Pick<User, "name" | "email" | "age">>;

function updateUser(user: User, updateUser: UserUpdates) {
    if ("id" in updateUser) {
        return "Cannot update ID"
    }
    return {...user, ...updateUser}
}

const user1: User = {
    id: 1,
    name: "quynh",
    email: "quynh2682@icloud.com",
}

const updates1 = { name: "Quynh ne^ ^" }
console.log(updateUser(user1, updates1))

const user2: User = {
    id: 1,
    name: "quynh",
    email: "quynh2682@icloud.com",
}

const updates2 = { id: 2, name: "Quynh ne^ ^" }
console.log(updateUser(user2, updates2))