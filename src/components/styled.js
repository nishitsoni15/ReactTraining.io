import styled, { css, StyledComponent } from "styled-components";

export const Header = styled.header`
height:270px;
background-color:#636F84;
display:flex;
justify-content:space-between;
` 

export const ImageBackground = styled.div`
width:267px;
height:350px;
border: 1px solid #8B95A1;
margin-top: 30px;
margin-left:250px;
`
export const Img = styled.img`
width:230px;
margin-top:30px;
`

export const ParaBackground = styled.div`
 display:flex;
 flex-direction:column;
 margin-right:400px;
 margin-top:40px;
`
export const H1 = styled.h1`
color:white;
font-weight:bold;
line-height:40px;
`
export const HeaderPara = styled.p`
font-size:10px;
margin-top:0;
`

export const HeaderParaWhite = styled.p`
font-size:10px;
color:white;
`

export const H2 = styled.h2`
color:#C35781;
padding-top:10px;
`
export const IconDiv = styled.div`
display:flex;
justify-content:space-between;
`
export const IconDivPara = styled.p`
font-size:10px;
color:#C35781;
padding-top:10px;
margin-right:200px;
`
export const MainDiv = styled.div`
display:flex;
justify-content:space-between;
padding-top:130px;
background-color:#E3E3E3;
`

export const ImgArrow = styled.img`
width:40px;
height:40px;
margin-top:30px;
margin-right:10px;
`
export const Ul = styled.ul`
width:350px;
padding-top:50px;
`

export const Li = styled.li`
width:200px;
list-style:none;
padding-bottom:10px;
padding-top:10px;
margin-left:40px;
border-bottom:1px solid #CFCFCF;
`

export const A = styled.a`
width:350px;
text-decoration:none;
color:#686868;
font-weight:bold;
`
export const RightMain = styled.div`
width:1200px;
text-align:left;
`

export const ImgIconDiv = styled.img`
background-color:white;
`
export const HeadingMainDiv = styled.h1`
color:#C35781;
`
export const ParaRightMain = styled.p`
font-size: 15px;
color:#777777;
`
export const FirstA = styled.a`
color:#C35781;
font-weight:bold;
text-decoration:none;
`
export const FirstLi = styled.li`
border-bottom:1px solid #C35781;
list-style:none;
width:200px;
padding-bottom:10px;
padding-top:10px;
margin-left:40px;
`

export const Navigation = styled.nav`
height:100px;
background-color:blue;
`
export const UlHeader = styled.ul`
display:flex;
padding-top:40px;
`

export const LiHeader = styled.li`
list-style:none;
padding-right:40px;

`

export const AHeader = styled.a`
text-decoration:none;
color:white;
font-weight:bold;
&:hover{
    color:cyan;
}
`

export const ButtonComp1 = styled.button`
  background-color:${props => props.color};
  color:${props => props.theme};

`





export const Div1 = styled.div`
position:absolute;
z-index:1;
display: flex;
flex-direction: column;
margin-top:20px;
margin-left:430px;
width:300px;
text-align:left;
height:640px;
background-color:white;
padding:0 20px;
border:1px solid black;
`
export const Header1 = styled.h1`
color:#367A9D;
padding-top:70px;
`
export const Para = styled.p`
font-size:25px;
margin-top:-10px;
color:#fffffff;
`
export const Label = styled.label`
margin-top:10px;
`

export const Input1 = styled.input`
padding:5px;
margin-top:10px;
border:1px solid #E7EAEC;
`
export const Button = styled.button`
background: transparent;
border-radius: 3px;
border: 1px solid #E7EAEC;
padding: 1em 1em;
margin-top:25px;
color: #464C7D;
`
