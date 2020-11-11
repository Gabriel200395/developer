import React from 'react'
import {GridTitulo} from './Styles'


const Titulo = props =>{

  return(
     <GridTitulo id="contact">
          <h3>{props.TituloElements.contact}</h3> 
          <p>{props.TituloElements.descricao}</p>
     </GridTitulo>
  );


}

export default Titulo;