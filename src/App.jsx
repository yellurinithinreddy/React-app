
import { Head, Shead } from "./components/headings/heading";
import { OrdList,UnOrdList } from "./components/list/lists";
import { Img } from "./components/image/img";
import { Table } from "./components/tables/table"; 
import { Card } from "./components/cards/card";
import { recipeData } from "./data/recipe.js";
import { Btn1} from "./components/buttons/button.jsx";
import { Greet } from "./components/greetings/greet.jsx";
import React from "react";
import './App.css';
const App=()=>{
  async function clickedMe(){
    const data=fetch("https://fakestoreapi.com/products");
    const res=await data;
    const ans=await res.json();
    console.log(ans)

  }
  return (
    <>
    {/* <Head></Head>
    <OrdList></OrdList>
    <Img></Img>
    <UnOrdList></UnOrdList> */}
    {/* <Table></Table>
    <Card></Card> */}

    {/* <Img source="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" height={100} width={100}></Img>
    <Img source="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" height={200} width={200}></Img>
    <Img source="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" height={300} width={300}></Img> */}
     
    {/* <OrdList list={["Mango","Banana","Papaya"]}></OrdList>
    <UnOrdList list={["Mango","Banana","Papaya"]}></UnOrdList> */}

    {/* {
      recipeData.map((e)=>{
        return(
        <div key={e.id}>
          <Head heading={e.name} color={"blue"}></Head>
          <Shead heading={"Ingredients used"} color={"red"}></Shead>
          <OrdList list={e.ingredients} bgColor={"beige"}></OrdList>
          <Shead heading={"Instructions to prepare recupe"}></Shead>
          <OrdList list={e.instructions} bgColor={"orange"}></OrdList>
        </div>
        )
        
      })
    } */}
    {
      [{name:"Nithin",role:"React developer"},{name:"Sohil",role:"backend developer"},{name:"Hemanth",role:"Data engineer"}].map((e)=>{
        const {name,role}=e
        
        return(
          <React.Fragment key={name}>
          <Greet text={`I am ${role}`}>{name}</Greet>
          <Btn1 onPress={()=>clickedMe(name)} text={`Click ${name}`}></Btn1>
          </React.Fragment>
        )
      })
    }



    </>
  )
}
export default App;
