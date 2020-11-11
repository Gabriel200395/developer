import styled from 'styled-components' 


export const GridContact = styled.section`
background: #242A35;
height:480px; 
margin-left:-8px; 
width:93%; 
padding:60px;
` 
export const GridTitulo = styled.div`
padding:45px; 
margin-top:-50px;
margin-left: 19px;
h3{
text-align: center;
font-family: 'Montserrat',sans-serif;
font-weight: 600;
font-size:22px;
color:#ffffff;
}
p{
text-align:center; 
color:#ffffff;  
font-size:17px;
}

`
export const GridForm = styled.div`
margin-top: -50px;
margin-left: 15px;
}
`
export const Formulario = styled.div`
#button{
justify-content:center;
display:grid;
}
.element{
display: grid;
grid-template-columns: 237px 237px;
justify-content: center;
grid-gap: 20px; 
margin-top: 28px; 
height:40px;     
}
.elementone{   
display: grid;
grid-template-columns: 500px;
grid-gap: 17px; 
justify-content: center; 
margin-top: 23px;
height:40px;    
}
.elementtwo{   
display: grid;
grid-template-columns: 500px;
grid-gap: 17px; 
justify-content: center; 
margin-top: 23px;
height:140px;    
}
input{
background: #242A35;
border: 1px solid #CACACA;
box-sizing: border-box;
border-radius: 9px; 
outline:none; 
color:#ffffff; 
padding:0px 15px;
}  
button{
border-radius: 4px;
color: #ffffff;
border: solid 1px #FF8C00;
height: 30px;
width: 150px;
ont-size: 12px;
margin-top: 50px;
outline: none;
text-align:center;
cursor: pointer;
background: #FF8C00;
}


@media(max-width:320px){
    
    .element{
        display: grid;
        grid-template-columns: 80px 80px;
        
        }
        .elementone{   
        display: grid;
        grid-template-columns: 100px;
        grid-gap: 17px; 
       
        }
        .elementtwo{   
        display: grid;
        grid-template-columns: 100px;
        }
        
    
}
 @media(max-width:360px){
        .element{
            display: grid;
            grid-template-columns: 80px 80px;
            
            }
            .elementone{   
            display: grid;
            grid-template-columns: 100px;
            grid-gap: 17px; 
           
            }
            .elementtwo{   
            display: grid;
            grid-template-columns: 100px;
            }
                      
}
`