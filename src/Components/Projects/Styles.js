
import styled from 'styled-components'


/* grid principal  projects*/
export const GridP = styled.section`
background: #f2f2f2;
height: 480px;
margin-top: 120px;
margin-left:-8px;
width:102%; 

@media(max-width:360px){
    width:209%; 
 
}

`

/* grid secundaria  projects*/
export const GridS = styled.section`
margin-top: -30px;
`

/* grid principal  title*/
export const GridTitle = styled.section`
padding:60px;
h1{
text-align:center; 
font-family: 'Montserrat', sans-serif;
font-weight: 600;
font-size:17px;
color:#242A35;
}
p{  
text-align:center;
font-size: 16px;
color:#6c757d;
}
`
/* grid principal  card*/
export const GridCard = styled.div`
display:grid; 
grid-template-columns: 300px 300px 300px; 
grid-gap:30px;
justify-content:center; 
margin-top:-30px;
.card{
width: 100%;
height: 60%;  
background-color:#FF8C00;
color:#ffff;
border-radius:10px; 
display:flex; 
justify-content:center;   
height:249px; 
}
h3{    
margin-top: 65px;
text-align: center;
font-family: 'Montserrat',sans-serif;
font-weight: 600;
font-size: 11px;
color:#242A35;    
}
img{
height: 38px;
width: 38px;
position: absolute;
background-color: #FF8C00;
margin-top: 20px;
margin-left: 0px;
}
p{
text-align: center;
font-size: 15px;
margin-top: 20px;
color: #ffffff;
line-height: 21px;
width: 225px;
margin-left: 0px;
}
.video{
margin-top: 200px;
position:absolute;
border-radius: 5px;
height: 27px;
font-family: 'Montserrat', sans-serif;
font-size:11px;
width: 76px;
border: none;
outline:none; 
cursor:pointer;
color:#FF8C00;
font-weight:600;
margin-left: 0px; 
}

@media(max-width:320px){
    display:block
    .card{
     width: 50%;
     margin-left: 150px;
    }

    .cardcontainer{
         
    padding: 0px 0px 80px;

    }
    
    }
    @media(max-width:360px){
    display:block;
    
    }
`