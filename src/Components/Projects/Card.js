import React from 'react'
import { GridCard } from './Styles'
import Movies from './cardDados'


export default function Card() {

     return (
          <GridCard>
               {Movies.map(movie => (
                    <div className="cardcontainer" key={`${movie.id}`}>
                         <div className="card">
                              <img src={movie.url} alt={movie.alt} />
                              <div>
                                   <h3>{movie.title}</h3>
                                   <p>{movie.descricao}</p>
                              </div>
                              <button className="video">{movie.video}</button>
                         </div>
                    </div>

               ))}

          </GridCard>
     );

}