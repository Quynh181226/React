import { Component, type ChangeEvent } from "react"

interface State {
    color: string
}

export class Ex2 extends Component<{}, State> {
    state = { color: "black" }

    handleInput = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({ color: e.target.value })
    }

    handleSubmit = () => {
        console.log("Color: ", this.state.color)
    }

    render() {
        return (
            <>
                <h3>Color: {this.state.color}</h3>
                <input onChange={this.handleInput} name="color" />
                <button onClick={this.handleSubmit}>Submit</button>
            </>
        )
    }
}
