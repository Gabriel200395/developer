import React from 'react'
import ElementsFooter from './ElementsFooter'
import IconsElements from'./IconsFooter'

const Titulo = props => {

    return (
        <div>
            <h3>{props.Name}</h3> 
            <ElementsFooter  IconsElements={IconsElements} />
            <p>{props.descricao}</p>
        </div>

    );

}


export default Titulo;