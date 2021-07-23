import React, { Component } from "react";

class Message extends Component {

    constructor(){
        super()
        // state is varaible 
        this.state = {
            message : 'Welcome visitor'
        }
    }

    changeMessage(){
        // setstate is function 
        this.setState({
            message : "Thank you for subscribing"
        }
        )
    }

    render() {
        return (
            <div>
                <h1> {this.state.message}  </h1>
                <button onClick={()=> this.changeMessage()}>Subscribe</button>
            </div>
        )
    }
}

export default Message;