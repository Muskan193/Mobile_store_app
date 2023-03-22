import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Contact = () => {
  return (
    <>
      <div className="container mb-5">
        <div className="row">
          <div className="col-12 text-center py-4 my-4">
            <h1>Have Some Question</h1>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-md-5 justify-content-center ">
            <img src='/assets/images/home/Conatct.jpg' alt="Contact" height="400px" width="500px" />
          </div>
          <div className="col-md-6">
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Full Name:</Form.Label>
                <Form.Control type="text" placeholder="John Smith" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Example textarea</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>

              <Button variant="outline-primary" type="submit">
                Send Message
              </Button>
            </Form>
          </div>
        </div>
      </div>

    </>
  )
}

export default Contact