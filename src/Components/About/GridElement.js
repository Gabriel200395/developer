import React from 'react'
import { GrinDes } from './Styles'
import Rating from './Rating'
import Resume from './Resume'
import Infor from './Infor'


const GridElement = () => {
    return (
        <GrinDes>
            <div className="grid">
                <label id="about"htmlFor="c1">About</label>
            </div>
            <div className="grid">
                <label id="skill"htmlFor="c2">Skill</label>
            </div>
            <div className="grid">
                <label id="resumeone" htmlFor="c3">Resume</label>
            </div>
            <div id="Geral">
                <input type="radio" id="c1" name="group" defaultChecked />
                <div id="about">
                    <Infor text="Developer  & Web Designer">
                        <p>conheço meu trabalho e as experiências que tive ao longo do tempo no mundo do desenvolvimento web e as tecnologias que conheço e uso em
                        todos os meus projetos e meu currículo com base nisso.</p>
                    </Infor>
                </div>
                <input type="radio" id="c2" name="group" />
                <div id="skill"><Rating /></div>

                <input type="radio" id="c3" name="group" />
                <div id="resume"><Resume /></div>
            </div>
        </GrinDes>
    );
}

export default GridElement;




