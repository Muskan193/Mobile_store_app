import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState } from 'react';

const Login = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
     <Button  variant="outline-primary m-4" style={{width:'150px'}} onClick={handleShow}>
      <span className='fa fa-sign-in '></span> Login
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Button className="btn-btn-primary w-100 mb-4">
                <span className="fa fa-google me-4"></span>Sign in with google
            </Button>
            <Button className="btn-btn-primary w-100 mb-4">
                <span className="fa fa-facebook me-2"></span>Sign in with Facebook
            </Button>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="outline-primary w-100 mb-5" type="submit">
        Submit
      </Button>
    </Form>
        </Modal.Body>
        
      </Modal>
    </>
  )
}

export default Login