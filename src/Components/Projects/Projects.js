import React, { useEffect } from 'react'
import Titulo from './Titulo'
import Card from './Card'
import { GridS, GridP } from './Styles'
import AOS from 'aos';





export default function Projects() {

    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])

    return (
        <GridP>
            <section data-aos="fade-right">
                <GridS>
                    <Titulo name="PROJECTS" >
                        <p>Conheçam os projetos e as tecnologias que foram usadas neles.</p>
                    </Titulo>
                    <Card />
                </GridS>
            </section>
        </GridP>
    );


}


