import { type ChangeEvent, Component } from "react"
import "../style/Ex7_FromSignAccount.css"

interface Account {
    name: string
    email: string
    password: string
    phoneNumber: string
}

export class Ex7_FromSignAccount extends Component<{}, Account> {
    constructor(props: {}) {
        super(props);
        this.state = {
            name: "",
            email: "",
            password: "",
            phoneNumber: "",
        }
    }

    handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        this.setState({
            ...this.state,
            [name]: value,
        } as unknown as Account)
    }

    submitAction = () => {
        const { name, email, password, phoneNumber } = this.state

        if (!name || !email || !password || !phoneNumber) {
            alert("Empty")
            return
        }

        let accounts: Account[] = JSON.parse(localStorage.getItem("accounts") || "[]")

        if (accounts.find(acc => acc.email === email)) {
            alert("Has exists")
            return
        }

        accounts.push({ name, email, password, phoneNumber })

        localStorage.setItem("accounts", JSON.stringify(accounts))
        alert("Register success!")
    }

    render() {
        return (
            <div className="signUp-container">
                <h2 className="signUp-title">Sign Up</h2>

                <label className="signUp-label">Name:</label>
                <input className="signUp-input" onChange={this.handleChange} name="name" value={this.state.name}/>

                <label className="signUp-label">Email:</label>
                <input className="signUp-input" onChange={this.handleChange} name="email" value={this.state.email}/>

                <label className="signUp-label">Password:</label>
                <input className="signUp-input" onChange={this.handleChange} name="password" type="password" value={this.state.password}/>

                <label className="signUp-label">Phone Number:</label>
                <input className="signUp-input" onChange={this.handleChange} name="phoneNumber" value={this.state.phoneNumber}/>

                <button type="button" className="signUp-button" onClick={this.submitAction}>Submit</button>
            </div>
        )
    }
}
