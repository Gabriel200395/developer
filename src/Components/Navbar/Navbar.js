import React from 'react'
import {Decription, GridList } from './Styles'
import Home from '../Home/Home'
import Drop from '../NavbarOne/Drop'

export default function Navbar() {
    return (
          <section >
            <GridList>
                 <Drop />
            </GridList>
            <Home titulo="Olá Meu Nome é Gabriel.">
                 <div>
                 <Decription>
                     Sou desenvolvedor full-stack especializado em
                     desenvolvimento de front-end e back-end para aplicativos
                     Web escaláveis ​​e complexos. Escrevo sobre desenvolvimento web
                     no meu blog . Quer saber como posso ajudar seu projeto?
                     Confira meus estudos de caso de projeto e currículo.
                 </Decription>
                 </div>
             </Home>
        </section>  
    );
}
