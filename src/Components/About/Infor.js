import React from 'react'
import {GridText } from './Styles' 
import Imagem from './Imagem'
import Button from './Button'

const Infor = props => {
    
    return ( 
        <GridText>
            <strong>{props.text}</strong> 
            <Imagem DevUrl={'/images/developer.png'}  title={'developer'}/>
            {props.children} 
            <Button  />
        </GridText>
);

} 


export default Infor;


