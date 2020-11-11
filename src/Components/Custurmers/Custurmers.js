import React, {useEffect} from 'react' 
import Titulo from './Titulo'
import CardCusturmers from './CardCusturmers'
import {GridCusturmers} from './Style'
import AOS from 'aos';


export default function Custurmers(){


  useEffect(() => {
    AOS.init({ duration: 2000 })
}, [])

return( 
<section data-aos="fade-left" > 
        <GridCusturmers>
           <Titulo titulo="CUSTURMERS" descricao="Conheça os clientes com quem já trabalhei"/>
           <CardCusturmers />
         </GridCusturmers>
  </section>


);





}