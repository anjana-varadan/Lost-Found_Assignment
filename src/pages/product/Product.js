import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { UserContext } from '../../context/AuthContext'
import { CartItemContext } from '../../context/CartContext'
import { RatingContext } from '../../context/RatingContext'
import { toast } from 'react-toastify';
import ReactStars from "react-rating-stars-component";
import './product.css'
export default function Product() {
  const location = useLocation()
  const { state: { product } } = location
  const { addToCart } = useContext(CartItemContext)
  const { comments } = useContext(RatingContext)
  const [prodComments, setprodComments] = useState([])
  const { authUser } = useContext(UserContext)
  const navigate = useNavigate()

  useEffect(() => {
    let filteredComments = comments.filter(i => i.pid === product.id)
    setprodComments(filteredComments)
  }, [comments])
  let optionArray = [1, 2, 3, 4, 5]
  const [itemQty, setItemQty] = useState(1)
  const handleClick = () => {
    if (authUser) {
      let cartObj = { ...product, qty: Number(itemQty) }
      addToCart(cartObj)
      toast("Item added to cart")
      console.log(cartObj)
    }
    else {
      navigate("/login")
    }

  }
  const handleQtySelection = (e) => {
    setItemQty(e.target.value)
  }
  return (
    <>
    <div className='productDataPage'>
      <div className='leftMostone'>
        <h2>${product.price}</h2>
        <h3>colors/red/green/yellow</h3>
        <h4>Reviews</h4>
        <div>
        {product.comments?.length > 0 && product.comments.map(i => (
          <div>
            <p>{i.user}</p>
              <ReactStars
                count={5}
                size={24}
                value={i.rating}
                activeColor="#ffd700"
                edit={false}
              />
            <p>{ }</p>
            <p>{i.text}</p>
            <hr />
          </div>
        ))}
        {prodComments.length > 0 && prodComments.map(i => (
          <div>
            <p>{i.user}</p>
            <ReactStars
                count={5}
                size={24}
                value={i.rating}
                activeColor="#ffd700"
                edit={false}
              />
            <p>{i.text}</p>
            <hr />
          </div>)
        )}
      </div> 
      </div>
      <div className='centerMost'>
          <img src={product.imageURL}/>
      </div>
      <div className='rightMost'>
        <h2>{product.name}</h2>
        <h6>{product.description}</h6>
        <div className='qty'>
        <select onChange={handleQtySelection}>
            {optionArray.map((i) => (
              <option key={i}>{i}</option>
            ))}
          </select> Quantity
        </div>

        <button onClick={handleClick}>ADD TO CART</button>
      </div>
    </div>

    </>
  )
}
