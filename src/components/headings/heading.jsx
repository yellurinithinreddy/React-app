



export const Head=(props)=>{
    const {heading,color}=props
    return(
        <h1 style={{color:color}}>{heading}</h1>
    )
}
export const Shead=(props)=>{
    const {heading,color}=props
    return(
        <h2 style={{color:color}}>{heading}</h2>
    )
}