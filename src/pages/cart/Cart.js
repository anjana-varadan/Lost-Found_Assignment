import React, { useContext, useState } from 'react'
import CheckOut from '../../components/checkOut/CheckOut'
import { CartItemContext } from '../../context/CartContext'
import './cart.css'
export default function Cart() {

    const { cartItems, removeFromCart } = useContext(CartItemContext)
    const [showCheckOut, setShowCheckOut] = useState(false)
    const handleCheckOut = () => {
        setShowCheckOut(true)
    }
    const handleRemove = (item) => {
        removeFromCart(item)
    }
    return (
        <>
            {showCheckOut && <CheckOut />}
            {cartItems.length>0 ? 
            <div className='cart__checkout'>
            <button onClick={handleCheckOut}>CheckOut</button>
             </div> : <div></div>
            }
            <div className='cartPageItems'>
                {cartItems.length>0 ?cartItems.map((item) => (

                    <div className='cart__container'>
                        <img src={item.imageURL}></img>
                        <div className='cart__text'>
                            <h5>{item.name}</h5>
                            <p>Quantity: {item.qty}</p>
                            <p>Total: $ {item.price * item.qty}</p>
                            <button onClick={() => handleRemove(item)}>REMOVE FROM CART</button>
                        </div>
                    </div>
                ) 
                ): <center><h1>Cart is empty</h1></center>}
            </div>
        </>
    )
}
