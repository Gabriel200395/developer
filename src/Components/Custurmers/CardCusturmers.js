import React from 'react'
import {GridCard} from './Style'
import Dados from './CardData.json'


const CardCusturmers = () => {


    return(
          <GridCard>
               {Dados.map(dado => (
                   <div className="card" key={`${dado.id}`}> 
                       <p>{dado.descricao}</p>
                       <h3>{dado.autor}</h3>
                   </div>
               ))}
          </GridCard>
  
    );

} 


export default CardCusturmers;