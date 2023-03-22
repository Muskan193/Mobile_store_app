import React from 'react';
import DATA from '../DATA'
import Card from 'react-bootstrap/Card';

import { NavLink } from "react-router-dom";




const Product = () => {


  const cardItem = (item) => {
    return (
      <Card classame="card my-5 py-4" key={item.id} style={{ width: '18rem', margin: "15px" }}>
        <Card.Img variant="top" src={item.img} alt={item.title} style={{ height: "300px" }} />
        <Card.Body className="text-center">
          <Card.Title>{item.title}</Card.Title>
          <p className='lead'>
            ${item.price}
          </p>

          <NavLink to={`/product/${item.id}`} className="btn btn-outline-primary">Buy NoW</NavLink>
        </Card.Body>
      </Card>
    )
  }
  return (


    <div className="container py-5 ">
      <div className="row">
        <div className="col-12 text-center" >
          <h1 style={{ fontSize: "70px" }}>Products</h1>
          <hr />
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-around" >
          {DATA.map(cardItem)}
        </div>
      </div>
    </div>
  )
}

export default Product