import React , {Component} from "react";

// function Welcome (){

// return <h1>Welcome</h1>;
// }
class Welcome extends Component {
    render () {
        return <h1>welcome {this.props.name} class props</h1>
    }
}

export default Welcome ;