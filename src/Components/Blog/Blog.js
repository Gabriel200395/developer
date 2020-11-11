import React, { useEffect } from 'react'
import { GridBlog } from './Styles'
import Titulo from './Titulo'
import Card from './Card'
import Button from './Button'
import AOS from 'aos';


export default function Blog() {
    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])

    const Element = {
        button: "Ver Mais"
    }
    return (
        <GridBlog>
            <div data-aos="fade-right">
                <Titulo name="BLOG">
                    <p>Criei um blog no meu portfólio para transmitir informações sobre as tecnologias que eu
                    uso em meus projetos, e também outras que podem ser usadas.</p>
                </Titulo>
                <Card />
                <div className="button" >
                    <Button Element={Element} />
                </div>
            </div>
        </GridBlog>
    );



}