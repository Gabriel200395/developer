import React from 'react'
import { GridResume } from './Styles'


export default function Resume(){

    return(
         <GridResume>
            <section >
             <ul> 
                 <h3 className="titulo">Experience</h3>
                 <li>BRB -  2017 / 2019</li>
                 <li>LOTERICA CAIXA  -  2020</li>
                 <li>LOTERICA CAIXA  -  2020</li>
             </ul> 
            </section>
            <section>
             <ul > 
                <h3 className="tituloOne">Services</h3>
                 <li>ESTIAGIARIO</li>
                 <li>DEVELOPER (SITE WEB)</li>
                 <li>DEVELOPER (CHAT)</li>
             </ul>
             </section>
         </GridResume> 
    )

}