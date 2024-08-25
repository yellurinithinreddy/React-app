
import { Head, Shead } from "./components/headings/heading";
import { OrdList,UnOrdList } from "./components/list/lists";
import { Img } from "./components/image/img";
import { Table } from "./components/tables/table"; 
import { Card } from "./components/cards/card";
import { recipeData } from "./data/recipe.js";
import { Btn1} from "./components/buttons/button.jsx";
import { Greet } from "./components/greetings/greet.jsx";
import React from "react";
import {persons} from "./data/persons.js";
import Cards from "./components/bootstrap/customCard.jsx";
import { FirstComponent } from "./components/bootstrap/bootstrap.jsx";
import UncontrolledExample from "./components/bootstrap/carousel.jsx";
import Footer from "./components/footer/footer.jsx";
import { Dnaloader } from "./components/loaders/dna.jsx";
import { Customtoast } from "./components/toasts/toasts.jsx";
import { Customskeleton } from "./components/skeleton/loadingskeleton.jsx";
import Youtubebutton from "./components/classcomponents/subscribe.jsx";
import Counter from "./components/classcomponents/counter.jsx";
import Addcard from "./components/classcomponents/addcard.jsx";
import Fetchdata from "./components/classcomponents/fetchdata.jsx";


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
    {/* {
      [{name:"Nithin",role:"React developer"},{name:"Sohil",role:"backend developer"},{name:"Hemanth",role:"Data engineer"}].map((e)=>{
        const {name,role}=e
        
        return(
          <React.Fragment key={name}>
          <Greet text={`I am ${role}`}>{name}</Greet>
          <Btn1 onPress={()=>clickedMe(name)} text={`Click ${name}`}></Btn1>
          </React.Fragment>
        )
      })
    } */}
    {/* <Btn1 text={"click me"} bgColor={"green"}></Btn1>
    <Greet text={"I am software Developer"} children={"Nithin"}></Greet> */}
    {/* {
      persons.map((e)=>{
        return(
          <>
            <Cards text={e.name} title={e.role}></Cards>
          </>
          )
      })
    }



    <Cards text={"Software Developer"} title={"John"}></Cards> */}

    {/* <FirstComponent></FirstComponent> */}

    {/* <UncontrolledExample></UncontrolledExample> */}

    {/* <Head heading={"Heading for my page"} color={"green"}></Head>
    <Cards text={"Software developer"} title={"Nithin"}></Cards>
    <Cards text={"React developer"} title={"Sohil"}></Cards>
    <Cards text={"Angular developer"} title={"Hemanth"}></Cards>
    <Cards text={"Backend developer"} title={"Vijay"}></Cards>
    <Footer text={"I am the footer"} color={"red"}></Footer> */}
   
   {/* <FirstComponent></FirstComponent> */}
   {/* <FirstComponent title2={"Resize this responsive page to see the effect!"} title1={"My First Bootstrap Page"}></FirstComponent> */}
   
    {/* <Youtubebutton/> */}
    {/* <Customtoast message={"I am clicked"} position={"top-right"}></Customtoast> */}
    {/* <Addcard></Addcard> */}
    <Fetchdata></Fetchdata>

 
    </>
  )
}
export default App;
