import { Component } from 'react'

interface State {
    date: Date
}

export class Ex7_Clock extends Component<{}, State> {
    private timerId?: number

    constructor(props: {}) {
        super(props);
        this.state = {
            date: new Date()
        }
    }

    componentDidMount() {
        this.timerId = window.setInterval(() => {
            this.setState({ date: new Date() })
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.timerId)
    }

    render() {
        const { date } = this.state
        return (
            <div>
                <p>
                    Current time: {date.getHours().toString().padStart(2, '0')} :{' '}
                    {date.getMinutes().toString().padStart(2, '0')} :{' '}
                    {date.getSeconds().toString().padStart(2, '0')}
                </p>
            </div>
        )
    }
}
