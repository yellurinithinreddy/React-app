



export const Greet=(props)=>{
    const {text,children}=props
    return(
        <>
        <h2>My name is {children}</h2>
        <h3>{text}</h3>
        </>
    )
}