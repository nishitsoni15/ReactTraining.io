import { CountAuto } from "../modules/index";
import { ButtonComponent,Counter } from "../components/index";

const Contact = () => {
    return(
        <>
         <Counter Text="Hello I am Nishit Soni"/>
        <br /><br />
        <ButtonComponent  buttonText = "My Button" buttonClass = "green" textColor = "white"/>
        <ButtonComponent  buttonText = "My Primary" buttonClass = "blue" textColor = "white"/>
        <ButtonComponent  buttonText = "My Secondary" buttonClass = "red" textColor = "white"/>
        <ButtonComponent  buttonText = "My Ternary" buttonClass = "black" textColor = "white"/>
            <br /><br />
        <CountAuto />
    
        </>
    )
}

export default Contact;