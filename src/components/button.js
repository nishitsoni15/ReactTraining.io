import { ButtonComp1,ButtonComp2} from "./styled";

const ButtonComponent = (props) => {
    
    return(
        <div>
            <ButtonComp1  color={props.buttonClass}  theme={props.textColor}>{props.buttonText}</ButtonComp1>
        </div>
    )
}

export default ButtonComponent;