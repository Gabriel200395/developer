import styled from 'styled-components' 

export const GridCusturmers = styled.section` 
margin-top:25px;
`

export const GridTitle = styled.div`
padding:43px;
h1{
text-align: center;
font-family: 'Montserrat',sans-serif !IMPORTANT;
font-weight: 600;
font-size:17px;
color:#242A35 !IMPORTANT;
} 
p{
text-align: center;
font-size: 16px;
color: #6c757d 
}

`  


export const GridCard = styled.div`
display:grid; 
grid-template-columns: 400px 400px;
grid-gap:50px; 
justify-content:center;
.card{
background-color:#f2f2f2; 
height:100px;
padding:30px; 
border-top: 3px solid #FF8C00; 
box-shadow:0 0.125rem 0.25rem rgba(0,0,0,0.075);
border-radius:2px;
}  
h3{
font-family: 'Montserrat',sans-serif;
font-weight: 600;
font-size:13px;
}
p{   
text-align: left;
color: #6c757d;
width:100%; 
font-size:15px;
}
@media(max-width:320px){
    display:block;
    
}
@media(max-width:360px){
    display:block;
    
}

`




