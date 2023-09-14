import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import error from '../images/errorgif.gif'

const Error404 = () => {
  return (
    <Container className='my-5 text-center'>
      <img src={error} alt="" className='img-fluid w-100'/>
      <hr />
      <h2>Oops! página no encontrada</h2>
      <Button as={Link} to="/" className='my-3 bg-dark w-100'><h5>Volver a la página de inicio</h5></Button>
    </Container>
  );
};

export default Error404;