import { Component } from "react";
import { Successtoasts } from "../../data/toasts";
import Cards from "../bootstrap/customCard";
import { toast, ToastContainer } from "react-toastify";




class Addcard extends Component{
    state={
        employee:[]
    }
    add=()=>{
        this.setState({
            employee:[...this.state.employee,{name:"Nithin",role:"Software developer"}]
        },()=>{
            // Successtoasts("Added a card","top-right")
            toast.success("Added a card",{position:"top-right"})
        })
    }
    delete=()=>{
        this.setState({
            employee:[]
        },()=>{
            toast.success("Deleted a card",{position:"top-right"})
        })
    }
    render(){
        return(
            <>
            <ToastContainer></ToastContainer>
            <button onClick={this.add} >Add Card</button>
            <button onClick={this.delete} >Delete Card</button>
            <div style={{display:"flex",gap:20,flexWrap:"wrap"}}>

            {
                this.state.employee.map((e)=>{
                    return <Cards text={e.role} title={e.name} key={e.name} ></Cards>
                })
            }
            </div>
            </>
        )
    }
}
export default Addcard;