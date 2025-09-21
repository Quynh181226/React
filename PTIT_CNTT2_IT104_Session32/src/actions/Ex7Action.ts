export type AccountType = {
    email: string,
    password:string
}
export type Ex7Action =
    | {type: "REGISTER", payload: AccountType }
    | {type: "LOGIN", payload: AccountType }