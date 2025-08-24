import {Component} from "react";

interface State{
    contents: string;
}
export class Ex4_blockRender extends Component<{}, State> {
    constructor(props: {}) {
        super(props);

        this.state = {
            contents: "keep it up"
        }
    };

    handleChange = () =>{
        this.setState({
            contents: "keep it up girl"
        })
    }

    //TS6133: '...' is declared but its value is never read.
    //=> Because declare a variable/ parameter but don't it in the code
    //TS + ESLint -> notice bugg
    //"_vari" convention to tell ... that this vari not used
    //or me just need to leave it as {} -> props not errors
    render(){
        return(
            <>
                <p>Content: {this.state.contents}</p>
                <button onClick={this.handleChange}>Change state</button>
            </>
        )
    }
}