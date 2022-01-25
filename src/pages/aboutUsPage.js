import { Header, ImageBackground, Img, ParaBackground, H1 ,HeaderPara ,HeaderParaWhite , H2, IconDiv, IconDivPara, MainDiv, ImgArrow, Ul,Li,A,RightMain,ImgIconDiv,HeadingMainDiv,ParaRightMain,FirstA,FirstLi} from "../components/styled";
import { useContext  } from "react";
import { ContextText } from "../components/context-text";

const AboutUsPage = (props) => {
    const aboutTheme = useContext(ContextText);
        console.log(aboutTheme)
    return(
        <div>
        <Header style={aboutTheme}>
            <ImageBackground>
                <Img src={props.passingData.image}/>
            </ImageBackground>
            <ParaBackground>
            <H1>{props.passingData.headerOne}</H1>
            <HeaderPara>{props.passingData.paraDesignation}</HeaderPara>
            <HeaderParaWhite>{props.passingData.profession}</HeaderParaWhite>
            <HeaderPara>{props.passingData.year}</HeaderPara>

            <H2>
            {props.passingData.lang}
            </H2>
            <HeaderPara>{props.passingData.languages}</HeaderPara>

            <IconDiv>
            <ImgIconDiv src={props.passingData.icon} alt="download"/>
                <IconDivPara>
                {props.passingData.download}
                </IconDivPara>
            </IconDiv>
            </ParaBackground>
            {/* <ImgArrow src="./arrow.png" /> */}
        </Header>
        <MainDiv>
           <Ul>
               <FirstLi><FirstA href="#">{props.passingData.li1}</FirstA></FirstLi>
               <Li><A href="#">{props.passingData.li2}</A></Li>
               <Li><A href="#">{props.passingData.li3}</A></Li>
               <Li><A href="#">{props.passingData.li4}</A></Li>
           </Ul>
            <RightMain>
                <HeadingMainDiv>{props.passingData.mainHeading}</HeadingMainDiv>
                <ParaRightMain>{props.passingData.para1}
                </ParaRightMain>
                <ParaRightMain>{props.passingData.para2}

</ParaRightMain>
            </RightMain>
        </MainDiv>
        </div>
    )
}

export default AboutUsPage;