import React from 'react'
import { Title, Grid } from './Styles'



const Titulo = ({ titulo, children }) => {
    return (
        <Grid id="about">
            <Title>{titulo}</Title>
            {children}
        </Grid>
    );
} 

export default Titulo;
