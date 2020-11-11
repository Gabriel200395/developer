import styled from 'styled-components' 



export const Rodape = styled.footer`
height:180px; 
margin-left:1px; 
width:102%;
h3{
text-align: center;
font-family: 'Montserrat',sans-serif;
font-weight: 600;
font-size: 1.20rem;
margin-top:30px;
color:#FF8C00; 
margin-left:10px;
}
p{
text-align:center; 
font-family: 'Montserrat',sans-serif;
font-weight: 600;
margin-top:30px;
font-size:13px;
margin-left:27px; 
width:100%;
}
`



export const Icons = styled.div`
display:grid; 
grid-template-columns: 30px 30px 30px 30px; 
justify-content:center; 
grid-gap:50px;
cursor:pointer;
img{
background:#242A35; 
height:40px; 
border-radius:30px; 
border:solid 1px #242A35;
}
img:hover{
 cursor:pointer;
 background-color:#FF8C00;
 transform: translateY( -20px);

}

`


