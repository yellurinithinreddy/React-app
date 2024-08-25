



export const Btn1=(props)=>{
    const {onPress,text,bgColor}=props
    return(
        <button style={{backgroundColor:bgColor}} onClick={onPress}>{text}</button>
    )
}