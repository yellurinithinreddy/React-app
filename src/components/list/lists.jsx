



// const arr=["Toyota","Tata","Hyundai","Audi","Mercedes"]
export const OrdList=(props)=>{
    const {list,bgColor}=props
    return(
        <ol style={{backgroundColor:bgColor}}>
            {
                list.map((e,index)=>{
                    return <li key={index}>{e}</li>
                })
            }
        </ol>
    )
}

export const UnOrdList=(props)=>{
    const {list}=props
    return(
        <ul>
            {
                list.map((e,index)=>{
                    return <li key={index}>{e}</li>
                })
            }
        </ul>
    )
}