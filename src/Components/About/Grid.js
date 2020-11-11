import React from 'react';
import { Container, Row, Col } from 'styled-bootstrap-grid';

export default function Grid(){
return(
  <div>
    <Container fluid>
      <Row>
        <Col col xl="1" lg="12" md="3" sm="12" style={{background:"red"}}>
            Hello Bootstrap Layout
        </Col>
      </Row>
    </Container>
  </div>
);
}