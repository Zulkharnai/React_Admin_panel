import React from 'react'
import Button from 'react-bootstrap/Button';
import { Card, Form, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Login = ({onLogin}) => {

  let navigate = useNavigate()

  const handle = ( ) => {
    onLogin();
    // navigate('/Home')
  }
  
  return (
    <>
    <Container fluid style={{ height: '100vh', backgroundColor: '#f8f9fa' }}>
      <Row className="justify-content-center align-items-center" style={{ height: '100%' }}>
        <Col xs={12} md={6} lg={4}>
          <Card style={{ width: '25rem', padding: '1rem' }}>
          <Card.Body>
            <Card.Title className='font-serif'><h2>Login</h2></Card.Title>
           
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Username or Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Keep me logged in" />
              </Form.Group>

              <Button variant="secondary" type="submit" onClick={handle}>
                Log in
              </Button>
              
                
            </Form>
                
          </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default Login