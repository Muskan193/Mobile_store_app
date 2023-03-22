import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';

const Signup = () => {
  const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
     <Button  variant="outline-primary" style={{width:'150px'}} onClick={handleShow}>
      <span className='fa fa-user-plus '></span> Register
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Register</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Button className="btn-btn-primary w-100 mb-4">
                <span className="fa fa-google me-4"></span>Sign up with google
            </Button>
            <Button className="btn-btn-primary w-100 mb-4">
                <span className="fa fa-facebook me-2"></span>Sign up with Facebook
            </Button>
        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Username:</Form.Label>
        <Form.Control type="text" placeholder="Enter userName" />
      </Form.Group>
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
        Register
      </Button>
    </Form>
        </Modal.Body>
        
      </Modal>
    </>
  )
}

export default Signup