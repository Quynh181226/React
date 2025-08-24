import {Component} from "react";

export class Ex2_Notification extends Component{
    render(){
        return(
            <>
                <p>Component has been mount</p>
            </>
        )
    }
    print(){
        console.log("Component has been mount")
    }
}