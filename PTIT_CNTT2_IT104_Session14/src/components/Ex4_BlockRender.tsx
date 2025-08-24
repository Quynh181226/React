import { Component } from "react";

interface State {
    contents: string;
}

export class Ex4_blockRender extends Component<{}, State> {
    constructor(props: {}) {
        super(props);

        this.state = {
            contents: "keep it up",
        };
    }

    shouldComponentUpdate({}, nextState: State) {
        if (nextState.contents === this.state.contents) {
            return false;
        }
        return true;
    }

    handleChange = () => {
        this.setState({
            contents: "keep it up girl",
        });
    };

    render() {
        return (
            <>
                <p>Content: {this.state.contents}</p>
                <button onClick={this.handleChange}>Change state</button>
            </>
        );
    }
}
