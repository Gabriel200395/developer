import React from 'react' 
import { GridTitle } from "./Styles";


const Titulo = props =>{

  return(
    <GridTitle id="project">
        <h1>{props.name}</h1> 
        {props.children}
     </GridTitle>

  );


} 


export default Titulo;