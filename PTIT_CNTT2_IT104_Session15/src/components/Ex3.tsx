import { Component, type ChangeEvent } from "react"

interface State {
    date: string
}

export class Ex3 extends Component<{}, State> {
    state = { date: "" }

    handleInput = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({ date: e.target.value })
    }

    handleSub = () => {
        console.log("Dob: ", this.state.date)
    }

    render() {
        return (
            <>
                <h4>Dob: {this.state.date}</h4>
                <input onChange={this.handleInput} type="date" />
                <button onClick={this.handleSub}>Submit</button>
            </>
        )
    }
}
