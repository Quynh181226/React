import { PureComponent } from 'react'

interface State {
    isLoggedIn:boolean
}

export class Ex2_LoginStatus extends PureComponent<{}, State> {
    constructor(props: {}) {
        super(props)

        this.state = {
            isLoggedIn:false
        }
    }
    toggleLogin=():void=>{
        this.setState((prevState)=>({
            isLoggedIn:!prevState.isLoggedIn
        }))
    }

    render(){
        return (
            <div style={{ textAlign: "center", marginTop: "50px" }}>
                <h2>{this.state.isLoggedIn ? "Xin chào, User!" : "Vui lòng đăng nhập để tiếp tục."}</h2>
                <button onClick={this.toggleLogin}>
                    {this.state.isLoggedIn ? "Đăng xuất" : "Đăng nhập"}
                </button>
            </div>
        )
    }
}