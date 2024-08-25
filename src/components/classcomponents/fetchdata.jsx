import { Component } from "react";
import { Dnaloader } from "../loaders/dna";
import { Head, Shead } from "../headings/heading";
import { OrdList } from "../list/lists";
import axios from "axios";





class Fetchdata extends Component{
    state={
        recipes:[],
        loader:true
    }

    componentDidMount(){
        // console.log("I am executed")
        this.array()
    }


    array=async()=>{
        const {status,data}=await axios.get("https://dummyjson.com/recipes")
        if(status===200){
            this.setState({
                recipes:data.recipes,
                loader:false
            })
        }
        
    }

    // array=async()=>{
    //     const data=await fetch('https://dummyjson.com/recipes')
    //     const {recipes}=await data.json()
    //     this.setState({
    //         recipes:recipes,
    //         loader:false
    //     },()=>{})
    // }

    render(){
        return(
            <>
            <h1>Recipes list</h1>
            {
                this.state.loader?<Dnaloader/>:<div>
                    {
                        this.state.recipes.map((e)=>{
                            return(
                                <div key={e.id}>
                                <Head heading={e.name}></Head>
                                <img src={e.image} width={100} height={100}></img>
                                <Shead heading={"Ingredients required"}></Shead>
                                <OrdList list={e.ingredients}></OrdList>
                                <Shead heading={"Instructions to prepare"}></Shead>
                                <OrdList list={e.instructions}></OrdList>

                                </div>
                            )
                        })
                    }
                </div>
            }
            </>
        )
    }
}
export default Fetchdata;