import React from "react";
import {  Container ,Row ,Col} from 'react-bootstrap';
import car from '../car.jpg'
import Header from './Header';
import Head2 from "./Head2";

 
const Const = () =>{
    return(
       
       <div>
      <Header/>
      <Container>
      <Row>
          <Col>
          <img src={car}/>
          <Head2/>
          </Col>
      </Row>
      </Container>
     
      
       </div>
    );
   
}

export default Const;