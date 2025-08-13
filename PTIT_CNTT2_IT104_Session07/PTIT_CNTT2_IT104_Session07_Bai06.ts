type status1='active'|'banned'
class Account{
    id: string
    userName: string
    password: string
    isLogin: boolean
    role: string
    constructor(id: string, userName: string, password: string, isLogin: boolean, role: string) {
        this.id=id
        this.userName=userName
        this.password=password
        this.isLogin=isLogin
        this.role=role
    }
    login(){
        if(!this.isLogin) this.isLogin=true
    }
    logout(){
        if(this.isLogin) this.isLogin=false
    }
}
class userAcc extends Account{
    status: status1
    constructor(id: string, userName: string, password: string, isLogin: boolean, role: string, status: status1) {
        super(id, userName, password, isLogin, role)
        this.status=status
    }
    login(): void{
        if(this.status==='active') this.isLogin=true
        else console.log('Account locked')
    }
}
class adminAcc extends userAcc{
    constructor(id: string, userName: string, password: string, isLogin: boolean, role: string, status: status1){
        super(id, userName, password, isLogin, role, status)
    }
    banuser(id: string, user: userAcc[]){
        const User=user.find(e=>e.id===id)
        if(User) User.status='banned'
        else console.log('not found')
    }
}
const user: userAcc[]=[new userAcc('J001', 'Minh', '08914174', false, "admin", 'active'), new userAcc('J002', 'Tuan', '014174', false, "user", 'active')]
const admin=new adminAcc('J001', 'Minh', '08914174', false, "admin", 'banned')
// user.login()
// console.log(user.isLogin)
console.log(user[0].status)
admin.banuser('J001', user)
console.log(user[0].status)
user[0].login()
console.log(user[0].isLogin)