import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Login from './buttons/Login';
import CartBtn from './buttons/CartBtn';
import Signup from './buttons/Signup';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';
const Header = () => {
  
  
  return (
 <Navbar bg="light" expand="lg">
      <Container fluid>
        
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll ">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <NavLink style={{textDecoration:"none",fontWeight:'bold', fontSize:'19px', color:"black", margin:'10px'}}  to="/">Home</NavLink>
            <NavLink style={{textDecoration:"none",fontWeight:'bold',  fontSize:'19px',color:"black", margin:'10px'}} to="/about">About</NavLink>
            <NavLink style={{textDecoration:"none",fontWeight:'bold',  fontSize:'19px' ,color:"black", margin:'10px'}} to="/product">Product</NavLink>
            <NavLink style={{textDecoration:"none",fontWeight:'bold', fontSize:'19px' , color:"black", margin:'10px'}} to="/contact">Contact</NavLink>
          </Nav>
          <Navbar.Brand style={{letterSpacing:"5px", marginRight:'350px'}} className='navmx-auto fw-bold text-center' to="/">APPLE MART</Navbar.Brand>
      <Signup/>
      <Login />
      {/* bgfff */}
        <CartBtn/>
        </Navbar.Collapse>
       
      </Container>
    
      
    </Navbar>
  );
}


export default Header