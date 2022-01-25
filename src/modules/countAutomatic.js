
import { useState , useEffect } from "react";

const CountAuto = () => {
const[count,setCount] = useState(0);

    const countSub = () => {
        let count = 0
    setInterval(() => {
           if(count < 5){
               setCount(count = count + 1)   
           }
           else if(count > 0){
               console.log(count)
            setCount(count = count - 1)  
            console.log(count)
           }
       },1000)
       
    }

    
    
useEffect(() => {
        countSub()     
},[])



return(
<>
<h1>CountAuto is here</h1>
<div>{count}</div>
</>
)
}

export default CountAuto;