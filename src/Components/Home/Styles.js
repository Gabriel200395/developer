import styled, { css } from 'styled-components'



export const GridInfo = styled.div`
margin-top: -466px;
color: #ffffff; 
margin-left:40px;
p{
text-align:left; 
margin-left:0px;
margin-top:0px;
width:52%;
}
${`Button`}: hover{
background:#FF8C00;   
color:#ffffff;   
}

@media(max-width:320px){
    margin-top: -530px;
 
   p{
    width:130%;
   } 

}

@media(max-width:360px){
    margin-top: -530px;
 
   p{
    width:130%;
   } 

}
`
export const Titulo = styled.h3`
text-align:left;
font-family: 'Montserrat', sans-serif;
color:#FF8C00;
font-size:30px;
margin-top:116px;
`

export const Button = styled.button`
${props => props.primary && css`
color:#FF8C00;
background:#242A35; 
border-radius:5px; 
font-weight:bold;
height:45px;
width:130px;
outline:none;
cursor:pointer; 
border:solid 1px #FF8C00;


`
}

`