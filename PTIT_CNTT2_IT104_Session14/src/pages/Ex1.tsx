import {Component} from "react";

interface State{
    userName: string
}
export class Ex1 extends  Component<{}, State>{
    //{} because props class or interface = empty//
    constructor(props: {}) {
        //because must call to inherit cons//
        super(props)
        this.state={
            //init state//
            userName: "Quynh"
        }
    }
    render() {
        return (
            <>
                <h1>{this.state.userName}</h1>
            </>
        )
    }
}