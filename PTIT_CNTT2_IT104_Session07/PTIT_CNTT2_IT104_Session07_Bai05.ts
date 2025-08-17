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
const user=new userAcc('J001', 'Minh', '08914174', false, "admin", 'banned')
user.login()
console.log(user.isLogin)