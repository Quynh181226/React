import { Component } from "react"

type State = {
    name: string
}

export class Ex3_ChangeState extends Component<{}, State> {
    constructor(props: any) {
        super(props)
        this.state = {
            name: "Ra"
        }
    }

    changeName = () => {
        this.setState({ name: "Rs" })
    }

    render() {
        return (
            <div style={{ display: "flex", flexDirection: "column" }}>
                <p>Company name: {this.state.name}</p>
                <button onClick={this.changeName} style={{ width: "10%" }}>
                    Change
                </button>
            </div>
        )
    }
}
