import styled from 'styled-components' 

export const GridBlog =  styled.div`
background: #f2f2f2;
margin-top: 50px;
height: 650px;
margin-left: -9px;
width:102%;
.button{
display:flex; 
justify-content:center;
margin-top: -126px;
margin-left: 30px;
}


`
export const GridTitle =  styled.div`
margin-left: 128px;
h1{
text-align: center;
font-family: 'Montserrat',sans-serif;
font-weight: 600;
font-size: 17px;
color: #242A35;
margin-left: -120px;
padding: 60px;

}
p{
width: 80%;
margin-left: 160px;
text-align: center;
font-size: 15px;
line-height: 20px;
color: #6c757d;
margin-left: 51px;
margin-top: -50px;
}
`
export const GridCard =  styled.div`
display: grid; 
justify-content:center; 
grid-template-columns: 270px 270px 270px;
grid-gap: 30px;
padding: 155px;
margin-left: 25px;
}

.buttonCard{
    justify-content:center;
    display:flex;
}
img{
    width:270px;
    height:130px;
}

.card{

    background: #fff;
    height: 380px;
    margin-top: -140px;
    box-shadow: 0 0.125rem 0.25rem rgba(0,0,0,0.075);
    width: 270px;
}

h3{
    text-align:center;
    font-family: 'Montserrat',sans-serif;
    font-weight: 600;
    font-size: 15px;
}

p{
    margin-top: 30px;
    text-align: center;
    color: #6c757d;
    width: 244px;
    margin-left: 2px;
    font-size: 15px;
    line-height: 20px;
    margin-left: 11px
}

button{
    color: #FFFFFF;
    border: solid 1px;
    outline: none;
    height: 30px;
    background: #FF8C00;
    width: 150px;
    font-size: 12px;
    cursor: pointer;
    border-radius: 6px;
    margin-top: 0px;
}


button:hover{
    background: #242A35;
    color: #FFFFFF;
    cursor:pointer;  
     

}


@media(max-width:320px){
    display:block;
    
}
    @media(max-width:360px){
    display:block;
    
`

export const ElementB =  styled.button`
border: solid 1px #FF8C00;
outline: none;
height: 30px;
color: #FF8C00;
width: 150px;
font-size: 12px;
cursor: pointer;
border-radius: 6px;
margin-top: 5px;
`