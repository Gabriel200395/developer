import React from 'react' 
import { GridTitle } from './Style'


const Titulo = props =>{
   
    return(
       <GridTitle id="custurmers">
            <h1>{props.titulo}</h1>
            <p>{props.descricao}</p>
       </GridTitle>

    );

} 


export default Titulo;