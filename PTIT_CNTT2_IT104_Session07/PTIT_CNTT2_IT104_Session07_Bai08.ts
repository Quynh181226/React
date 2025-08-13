class Acc{
    public accNumber: number
    protected balance: number
    protected history: string[]
    protected status: string
    constructor(accNumber: number, balance: number, history: string[], status: string) {
        this.accNumber=accNumber
        this.balance=balance
        this.history=history
        this.status=status
    }
    deposit(val: number){
        this.balance+=val
        this.history.push(`+${val}`)
    }
    withdraw(val: number){
        if(val>this.balance){
            console.log('Insufficient fund')
        }else {
            this.balance-=val
            this.history.push(`-${val}`)
        }
    }
    showHistory(){
        console.log(this.history)
    }
}
class SavingAcc extends Acc{
    interestRate: number
    constructor(accNumber: number, balance: number, history: string[], status: string, interestRate: number){
        super(accNumber, balance, history, status)
        this.interestRate=interestRate
    }
    withdraw(val: number) {
        if(val>this.balance){
            console.log('Insufficient fund')
        }else {
            this.balance-= val
            this.history.push(`-${val}`)
        }
    }
}
class checkAcc extends Acc{
    overdrafLimit: number
    constructor(accNumber: number, balance: number, history: string[], status: string, overdrafLimit: number) {
        super(accNumber, balance, history, status)
        this.overdrafLimit=overdrafLimit
    }
    withdraw(val: number) {
        if((this.balance-val)*(-1) > this.overdrafLimit){
            console.log('Insufficient fund')
        }else {
            this.balance-=val
            this.history.push(`-${val}`)
        }
    }
}
const savingAcc=new SavingAcc(1,100000,[],"1",1)
savingAcc.withdraw(5)
savingAcc.showHistory()