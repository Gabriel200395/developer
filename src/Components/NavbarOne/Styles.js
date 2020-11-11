import styled from 'styled-components' 


export const Navbar =  styled.nav `



header{
    position:fixed; 
    top:0;
    left:0; 
    width:100%; 
    display:flex; 
    justify-content: space-between; 
    align-items:center; 
    transition:0.6s;
    padding: 40px 100px;
    z-index: 100000;
    }
    header.sticky{
       padding: 5px 100px;
       background-color:#fff;
    }
    .list{
        list-style:none;
        padding:2px 134px;
        display:flex; 
        color:#ffffff;
    }    
    header.sticky .logo{

        color: #000000;
    }
    header.sticky ul li {
        color: #000000;
    }
    header .logo{
      padding:15px;
      margin-left:-65px;
      font-size:20px;
      color:#FF8C00;
      font-family: 'Montserrat', sans-serif;          
      transition: 0.6s;
    }
li{
  
    padding:0px 20px; 
    font-size:10px; 
    font-family: 'Montserrat', sans-serif;
    font-weight:600;
    transition: 0.6s;
}

li:hover{

    color:#FF8C00;
    cursor:pointer;
}


@media (max-width: ${({ theme }) => theme.mobile}) {
    .list{
        list-style:none;
        padding:2px 134px;
        display: block;        
        color:#000000;
    }  
    
    
    header .logo{
        padding:15px;
        margin-left: -98px;
        margin-top: -309px;        
        font-size:20px;
        color:#FF8C00;
        font-family: 'Montserrat', sans-serif;          
        transition: 0.6s;
      }
       

      li {
        padding: 18px 10px;
        margin-left: -290px;
    }


}



`