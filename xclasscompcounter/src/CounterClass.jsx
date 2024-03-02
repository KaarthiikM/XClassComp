import React, { Component } from 'react'

class CounterClass extends Component{
    constructor(props){
        super(props);
        this.state = {
            counter:0,
        }
    }

    increment = ()=>{
        this.setState({count: this.state.count+1})
    }

    decrement = ()=>{
        this.setState({count: this.state.count-1})
    }

    render(){
        return(
            <div>
                <p>Count: {this.state.count}</p>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>
            </div>
        )
    }
}

export default CounterClass;