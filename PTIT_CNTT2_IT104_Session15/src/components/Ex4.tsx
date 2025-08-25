import { Component, type ChangeEvent, type FormEvent } from "react"

interface State {
    progress: number
    submitted: number | null
}

export class Ex4 extends Component<{}, State> {
    state = {
        progress: 0,
        submitted: null
    }

    handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({ progress: +e.target.value })
    }

    handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        this.setState({ submitted: this.state.progress })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Comple progress: {this.state.submitted !== null ? `${this.state.submitted} %` : '%'}
                </label>
                <br />
                <input type="range" min={0} max={100} value={this.state.progress} onChange={this.handleChange} />
                <br />
                <button type="submit">Submit</button>
            </form>
        )
    }
}
