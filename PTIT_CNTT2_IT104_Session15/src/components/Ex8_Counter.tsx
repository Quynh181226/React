import { Component } from 'react'

interface Count {
    count: number
}

export class Ex8_Counter extends Component<{}, Count> {
    private intervalId?: number

    constructor(props: {}) {
        super(props);
        this.state = { count: 0 }
    }

    componentDidMount(): void {
        this.intervalId = setInterval(() => {
            this.setState((prevState) => ({
                count: prevState.count + 1 === 10 ? 0 : prevState.count + 1,
            }));
        }, 1000)
    }

    componentWillUnmount(): void {
        clearInterval(this.intervalId)
    }

    render() {
        return (
            <>
                <p>Cnt: {this.state.count}</p>
            </>
        )
    }
}
