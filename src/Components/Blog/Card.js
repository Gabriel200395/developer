import React from 'react'
import Movies from './cardBlog.json' 
import{GridCard} from './Styles'


export default function Card() {

    return (
        <GridCard>
            {Movies.map(movie => (
                 <section className="containerone row" key={`${movie.id}`}>
                <div className="card col s12 l12 m12" > 
                     <img src={movie.url} alt={movie.alt} />
                    <h3>{movie.title}</h3>
                    <p>{movie.descricao}</p>
                    <div className="buttonCard">
                    <button>{movie.button}</button>
                    </div>
                </div>
                </section>
            ))}
        </GridCard>
    );

}