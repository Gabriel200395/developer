import React, { useEffect } from 'react'
import { Desc } from './Styles'
import Titulo from './Titulo'
import GridElement from './GridElement'
import AOS from 'aos';


export default function About() {

    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])

    return (
        <Titulo titulo="ABOUT">
            <div data-aos="fade-up">
                <Desc>Aqui está o meu conhecimento e treinamento.</Desc>
                <GridElement />
            </div>
        </Titulo>
    );

}


