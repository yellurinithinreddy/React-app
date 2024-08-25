

import React from "react"
import "./greet.css"
import style from "./greet.module.css"

export const Greet=(props)=>{
    const {text,children}=props
    return(
        <div className={style.card}>
        <h2>My name is {children}</h2>
        <h3>{text}</h3>
        </div>
    )
}