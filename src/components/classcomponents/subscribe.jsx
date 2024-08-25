import { Component } from "react";
import { FirstComponent } from "../bootstrap/bootstrap";
import  Counter  from "./counter";
import { Successtoasts } from "../../data/toasts";
import { toast, ToastContainer } from "react-toastify"



class Youtubebutton extends Component{
    state={
        isSubscribe:false,
        text1:"Subscribe",
        text2:"Subscribed"
    }
    show=()=>{
        this.setState({isSubscribe: !this.state.isSubscribe},()=>{
            toast.success("Thanks for subscribing",{position:"top-right"})
        })
    }
    render(){
        return(
            <>
            <button onClick={this.show}>{this.state.isSubscribe?this.state.text2:this.state.text1}</button>
            <ToastContainer></ToastContainer>
            {
                this.state.isSubscribe?<div> <Counter/> <FirstComponent/></div>:<h1>Please Subscribe</h1>
            }
            </>
        )
    }
}
export default Youtubebutton;