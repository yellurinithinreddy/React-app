



const arr=["Toyota","Tata","Hyundai","Audi","Mercedes"]
export const OrdList=()=>{
    return(
        <ol>
            {
                arr.map((e)=>{
                    return <li>{e}</li>
                })
            }
        </ol>
    )
}

export const UnOrdList=()=>{
    return(
        <ul>
            {
                arr.map((e)=>{
                    return <li>{e}</li>
                })
            }
        </ul>
    )
}