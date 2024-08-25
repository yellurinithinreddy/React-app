// import React from 'react';
import { toast, ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { Successtoasts } from "../../data/toasts";




export const Customtoast=({message,position})=>{
    const notify=()=>{
        Successtoasts(message,position)
    }
    return(
        <div>
            <button onClick={notify}>Click me</button>
            <ToastContainer></ToastContainer>
        </div>
    )
}
