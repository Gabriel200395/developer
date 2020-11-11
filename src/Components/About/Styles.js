import styled, { css } from 'styled-components'


export const Title = styled.h1`  
margin-top:280px;
text-align:center; 
font-family: 'Montserrat', sans-serif;
font-weight: 600;
font-size:17px;
color:#242A35;
@media(max-width:320px){
margin-left: 273px;
}


`
/*Descricao about*/
export const Desc = styled.p`
text-align:center;  
color:#6c757d;
font-size: 16px;
@media(max-width:320px){
margin-left: 151px;
width: 100%;    
}
    

`
export const Grid = styled.section`
height:600px;
padding: 5px;
margin-top:-60px;

`
export const GrinDes = styled.div`
display:grid;
justify-content:center; 
grid-template-columns:200px 200px 200px; 
grid-gap:10px;
.grid{
background-color: #FF8C00;
border-radius: 10px;
margin-top: 20px;
height: 18px;
padding: 15px 70px;
} 
.grid:hover{
background-color:#242A35; 
cursor:pointer;
}
#about{
color:#ffffff; 
text-align:center;
font-family: 'Roboto', sans-serif;  
cursor:pointer;
margin-left:10px ;
} 
#skill{
color:#ffffff; 
text-align:center;
font-family: 'Roboto', sans-serif;  
cursor:pointer;
margin-left:15px ;
} 
#resumeone{
color:#ffffff; 
text-align:center;
font-family: 'Roboto', sans-serif;  
cursor:pointer;
margin-left:10px ;
}   

#Geral input[type="radio"]{
display:none;
}
#Geral input[type="radio"]:checked + div{
display:block; 
}
#Geral div{
height:100px;     
display:none;
}
@media(max-width:320px){
display:grid;
justify-content:center; 
grid-template-columns:100px 100px 100px !important;
grid-gap:60px;
margin-left:285px;       
};
 @media(max-width:360px){
display:grid;
justify-content:center; 
grid-template-columns:70px 70px 70px;            
}

`
export const GridText = styled.section`
display: grid;
margin-left: -40px;
text-align: center;
margin-top: -8px;
width: 700px;
line-height: 25px;
color: #6c757d;
strong{
text-align:center;
margin-top: 48px;
font-weight:bold; 
font-size:15px; 
text-indent:14px;
font-family: 'Roboto', sans-serif;  
color:#242A35;
}
img{
margin-top: 17px;
margin-left: 307px;
height: 70px;
}
p{
font-size: 13px;
line-height:20px;

}

@media(max-width:320px){
width:0px;
margin-top:-80px;
p{
font-size: 13px;
line-height:20px;
width: 356px !important;
margin-left: 85px;
}
strong{
margin-left: 98px;
}
img{
margin-left: 227px;
}
};
@media(max-width:360px){
width:0px;
p{
font-size: 13px;
line-height:20px;
width:50px;
}
}
`
export const Primary = styled.button`
${props => props.orange && css`
color: #FF8C00; 
border:solid 1px; 
outline:none; 
height:30px; 
background: #FFFFFF;
width:90px; 
font-size:12px;
cursor:pointer; 
border-radius:20px; 
margin-left:295px; 
margin-top:5px;
`}
&&:hover{
cursor:pointer; 
background:#FF8C00;
color:#fff;
}

@media(max-width:320px){
margin-left:223px;
}
`
export const GridRotating = styled.section`
display:grid;
grid-template-columns: 260px 260px; 
grid-gap:60px; 
justify-content: flex-start;
margin: 20px auto;
color: #000000; 
list-style: none;
padding: 0px;
li{
margin-top: 20px 0;
}
h3{
font-family: 'Montserrat',sans-serif;
font-weight: 600; 
font-size:12px;
}
.bar{
background: #242A35; 
display: block; 
border-radius 3px; 
overflow: hidden; 
box-shadow: 0 0 10px #2187e7b3;
}
.bar span{
height:8px;
float:left; 
background: #FF8C00;   
}
.figma{
width:90%;
animation: html 2s;
}
.html{
width:90%;
animation: html 2s;
}
.css{
width:40%;
animation:  css 2s;
}
.javascript{
width:50%;
animation: javascript 2s;
}
.react{
width:90%;
animation: react 2s;
}
.reactn{
width:65%;
animation: reactn 2s;
}
.node{
width:40%;
animation:  node 2s;
}
.phpm{
width:50%;
animation: phpm 2s;
}
@keyframes figma{
0%{
width:0%;  
}
100%{
width:90%;  
}
}
@keyframes html{
0%{
width:0%; 
}
100%{
width:90%;  
}
 } 
@keyframes css{
0%{
width:0%;  
}
100%{
width:40%;  
}
}
@keyframes javascript{
0%{
width:0%;  
}    
100%{
width:50%;  
}
}
@keyframes react{
0%{
width:0%;  
}
100%{
width:90%;  
}
} 
@keyframes reactn{
0%{
width:0%; 
}  
100%{
width:65%;  
}
}  
@keyframes node{
0%{
width:0%; 
} 
100%{
width:40%;  
}
}
@keyframes phpm{
0%{
width:0%;  
}    
100%{
width:50%;  
}
}
`
export const GridResume = styled.section`
display: grid;
grid-template-columns: 160px 167px;
grid-gap: 131px;
li{
list-style:none; 
border-bottom:1px solid #C4C4C4;
padding:20px 20px;
font-size:10px;
font-family: 'Montserrat',sans-serif;
width:200px; 
text-align:center;
}
h3{
font-family: 'Montserrat',sans-serif;
font-weight: 600; 
font-size:18px;
color:#FF8C00;
margin-left:53px;
}
.titulo{
margin-left: 73px;
}
.tituloOne{
margin-left: 80px;
}
`









