
import { useState , useEffect } from "react";

const CountAuto = () => {
const[count,setCount] = useState(0);

    const countSub = () => {
        let count = 0
       const countTime = setInterval(() => {
           if(count < 20){
               setCount(count = count + 1)
           }else{
                setCount(count = 0)
               clearInterval(countTime)
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