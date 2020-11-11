import React from 'react'
import ContactForm from './ContactForm'
import Titulo from './Titulo'
import TituloElements from './TituloElements'
import { GridContact } from './Styles'
import {ThemeProvider} from 'styled-components'

export default function Contact() {

   return (
      <GridContact>
         <Titulo TituloElements={TituloElements} />
         <ContactForm />
      </GridContact>
   );





}