import { Component } from "react";
import { Successtoasts } from "../../data/toasts";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';



class Counter extends Component{
    state={
        num:0
    }
    increment=()=>{
        this.setState({
            num:this.state.num+=1
        },()=>{
            Successtoasts(`num is incremented ${this.state.num}`,"top-right")
        })
    }
    decrement=()=>{
        this.setState({
            num:this.state.num-=1
        },()=>{
            Successtoasts(`num is decremented ${this.state.num}`,"top-right")
        })
    }
    reset=()=>{
        this.setState({
            num:0
        },()=>{
            Successtoasts(`num is reset to 0`,"top-right")
        })
    }
    render(){
        return(
        <>
        <h1>Counter {this.state.num}</h1>
        <button onClick={this.increment} >increment</button>
        <button onClick={this.decrement} >decrement</button>
        <button onClick={this.reset} >Reset</button>
        {/* <ToastContainer></ToastContainer> */}
        </>

        )
    }
}
export default Counter;