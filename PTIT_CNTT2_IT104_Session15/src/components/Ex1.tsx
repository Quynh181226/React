import { Component, type ChangeEvent } from "react"

interface State {
    email: string
}

export class Ex1 extends Component<{}, State> {
    state = { email: "" }

    handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({ email: e.target.value })
    }

    handleSub = () => {
        console.log({ email: this.state.email })
    }

    render() {
        return (
            <>
                <input onChange={this.handleChange} name="email" />
                <button onClick={this.handleSub}>Submit</button>
            </>
        )
    }
}
