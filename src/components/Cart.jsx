import React from 'react';
import { addItem } from '../redux/action/index';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { delItem } from '../redux/action/index';
import { NavLink } from 'react-router-dom';

const Cart = (addItem) => {
    const state = useSelector((state) => state.addItem)
    //console.log("State in Cart jsx : ", state)
    const disPatch = useDispatch();

    const handleClose = (item) => {
        disPatch(delItem(item))

    }
    console.log(state)

    const CartItems = (cartItem) => {
        //    alert("card item")
        console.log("cartItem : ",cartItem)

        return (
            <div className='px-4 my-5 bg-light rounded-3' key={cartItem.id}>
                <div className="container py-4">
                    <button onClick={() => handleClose(cartItem)} className='btn-close float-end' arial-label="close"></button>
                    <div className="row justify-content-center">
                        <div className="col-md-4">
                            <img src={cartItem.img} alt={cartItem.title} height="200px" width="180px" />
                        </div>
                        <div className="col-md-4">
                            <h3>{cartItem.title}</h3>
                            <div className="lead fw-bold">${cartItem.price}</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    const emptyCart = () => {
        return(
        <div className='px-4 my-5 bg-light rounded-3 py-5' >
            <div className="container py-4">
                <div className="row">
                    <h3>Your Cart is Empty</h3>
                </div>
            </div>
        </div>
        );
    }

    const button = () => {
        return (
            <div className="container">
                <div className="row">
                    <NavLink to="/checkout" className="btn btn-outline-primary w-25 mb-5 mx-auto">Proceed to Checkout
                    </NavLink>
                </div>
            </div>
        );
    }
    return (
        <>
            {state.length === 0 && emptyCart()}
            {state.length !== 0 && state.map(CartItems)}
            {state.length !== 0 && button()}
        </>
    )
}

export default Cart;

// import React from 'react';
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';
// import { delItem } from '../redux/action/index';


// const Cart=()=>{
//     const state = useSelector((state)=> state.addItem)
//     const dispatch = useDispatch()

//     const cartItems=(cartItem)=>{
//         console.log("cartItem : ", cartItem)
//         return(
//                  <div className="px-4 my-5 bg-light rounded-3" key={cartItem.id}>
//                     <div className="container py-4">
//                         <button className="btn-close float-end" aria-label='close'></button>
//                         <div className="row justify-content-center">
//                             <div className="col-md-4">
//                                 <img src={cartItem.img} alt={cartItem.title}/>
//                             </div>
//                             <div className="col-md-4">
//                                 <h3></h3>
//                                 <p></p>
//                             </div>
//                         </div>
//                     </div>
//                  </div>
//         );
//     }

//     return(
//         <>
//         {state.length !==0 && state.map(cartItems)}
//         </>
//     )
// }
// export default Cart;