import { type ChangeEvent, Component } from "react";
import "../style/Ex8_signIn.css";

interface Account {
    name: string;
    email: string;
    password: string;
    phoneNumber: string;
}

interface LoginState {
    email: string;
    password: string;
    message: string;
}

let data: Account = JSON.parse(localStorage.getItem("accounts") || "{}");

export class Ex8_signIn extends Component<{}, LoginState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            email: "",
            password: "",
            message: "",
        }
    }

    handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        this.setState({
            ...this.state,
            [name]: value
        })
    }

    handleSubmit = () => {
        const { email, password } = this.state;

        if (!email || !password) {
            this.setState({ message: "Empty" });
            return;
        }

        if (data && email === data.email && password === data.password) {
            this.setState({ message: "Login success" });
        } else {
            this.setState({ message: "Email or password error" });
        }
    }

    render() {
        return (
            <div className="signIn-container">
                <h2 className="signIn-title">Login</h2>

                <label className="signIn-label">
                    Email:
                </label>
                <input className="signIn-input" type="text" name="email" value={this.state.email} onChange={this.handleChange}/>

                <label className="signIn-label">
                    Password:
                </label>

                <input className="signIn-input" type="password" name="password" value={this.state.password} onChange={this.handleChange}/>

                <button type="button" className="signIn-button" onClick={this.handleSubmit}>
                    Login
                </button>

                <p className="signIn-message">{this.state.message}</p>
            </div>
        )
    }
}
