




export const Img=(props)=>{
    const {source,height,width}=props
    return(
        <img src={source} height={height} width={width}/>
    )
}