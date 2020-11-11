import React from 'react'
import { Titulo, GridInfo, Button } from './Styles'


const Home = props => {
  return (
    <GridInfo>
      <Titulo>{props.titulo}</Titulo>
      {props.children}
      <div>
        <Button primary >Ver Curriculo</Button>
      </div>
    </GridInfo>
  );

}



export default Home;