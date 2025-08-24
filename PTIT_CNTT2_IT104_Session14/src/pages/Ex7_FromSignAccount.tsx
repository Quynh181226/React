import { type ChangeEvent, Component } from "react"
import "../style/Ex7_FromSignAccount.css"

interface Account {
    name: string
    email: string
    passWorld: string
    phoneNumber: string
}

export class Ex7_FromSignAccount extends Component<{}, Account> {
    constructor(props: {}) {
        super(props);
        this.state = {
            name: "",
            email: "",
            passWorld: "",
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
        localStorage.setItem("data", JSON.stringify(this.state))
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
                <input className="signUp-input" onChange={this.handleChange} name="passWorld" type="password" value={this.state.passWorld}/>

                <label className="signUp-label">Phone Number:</label>
                <input className="signUp-input" onChange={this.handleChange} name="phoneNumber" value={this.state.phoneNumber}/>

                <button type="button" className="signUp-button" onClick={this.submitAction}>Submit</button>
            </div>
        )
    }
}
