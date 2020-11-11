import React from 'react'
import { GridForm, Formulario } from './Styles'

export default function ContactForm() {
  return (

    <GridForm>
      <Formulario> 
        <form>
            <div className="element">
                  <input 
                    name="nome"
                    placeholder="Digite seu nome"
                  />
                  <input 
                    name="email"
                    placeholder="Digite seu email"      
                  />
                </div>
                <div className="elementone">
                  <input
                    name="sugestao"
                    placeholder="Digite sua sugestão"
      
                  />
                </div>
                <div className="elementtwo">
                  <input
                    name="message"
                    placeholder="Digite sua message"
                  />
                </div>
                <div id="button">
                      <button type="submit">Enviar Mensagem</button>
                </div>
              </form>          

               )

     </Formulario>
    </GridForm>

  );




}

























