

import { InfinitySpin } from "react-loader-spinner"

export  const Infinityloader=(props)=>{
    const {color,width}=props
    return(
        <InfinitySpin
        visible={true}
        ariaLabel="infinity-spin-loading"
        {...props}
        />
    )
}