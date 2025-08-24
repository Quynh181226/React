import {Component} from "react";

export class Ex2_Notification extends Component{
    render(){
        return(
            <>
                <p>Component has been mount</p>
            </>
        )
    }
    componentDidMount(){
        console.log("Component has been mount")
    }
}