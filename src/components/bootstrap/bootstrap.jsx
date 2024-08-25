import { Card } from "react-bootstrap"
import Cards from "./customCard"
import { Dnaloader } from "../loaders/dna"
import 'react-loading-skeleton/dist/skeleton.css'
import Skeleton from "react-loading-skeleton"
import Addcard from "../classcomponents/addcard"


export const FirstComponent=(props)=>{
  const {title1="My first Bootstrap page",title2="Resize it if you want"}=props
    return(
        <>
  <div className="container-fluid p-5 bg-primary text-white text-center">
    <h1>{title1}</h1>
    <p>{title2}</p>
  </div>
  <div className="container mt-5">
    <div className="row">
      <div className="col-sm-4">
        <Cards text={"Software Developer"} title={"Nithin"}>
        </Cards>
      </div>
      <div className="col-sm-4">
      <Cards text={"Software Developer"} title={"Nithin"}></Cards>
      </div>
      <div className="col-sm-4">
      <Cards text={"Software Developer"} title={"Nithin"}></Cards>
      </div>
    </div>
  </div>
</>

    )
}