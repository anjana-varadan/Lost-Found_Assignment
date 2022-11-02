import React, { useContext, useState } from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
import { CartItemContext } from '../../context/CartContext';
import ReactStars from "react-rating-stars-component";
import { RatingContext } from '../../context/RatingContext';
import { UserContext } from '../../context/AuthContext';

export default function CheckOut() {
    const [show, setShow] = useState(true);
    const handleClose = () => setShow(false);
    const { authUser } = useContext(UserContext)
    const { cartItems, clearCart } = useContext(CartItemContext)
    const { addComment } = useContext(RatingContext)
    const [review, setReview] = useState({})
    let reviewKeys = Object.keys(review)

    const ratingChanged = (e, i) => {
        if (reviewKeys.includes(i.id)) {
            let currentObj = review[i.id]
            let newObj = { ...currentObj, rating: e }
            setReview({ ...review, [i.id]: newObj })
        }
        else {
            let itemId = i.id
            let reviewObj = { rating: e, user: authUser?.firstName, pid: itemId }
            setReview({ ...review, [itemId]: reviewObj })
        }
    };
    const handleChange = (e, item) => {
        if (reviewKeys.includes(item.id)) {
            let currentObj = review[item.id]
            let newObj = { ...currentObj, text: e.target.value }
            setReview({ ...review, [item.id]: newObj })
        }
        else {
            let itemId = item.id
            let reviewObj = { text: e.target.value, user: authUser?.firstName, pid: itemId }
            setReview({ ...review, [itemId]: reviewObj })
        }
    }

    const handleSave = () => {
        addComment(Object.values(review))
        clearCart()
        handleClose()
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Order Successfully Placed</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {cartItems.length > 0 && cartItems.map(i => (
                    <div>
                        <span>{i.name}</span>
                        <ReactStars
                            count={5}
                            onChange={(e) => ratingChanged(e, i)}
                            size={24}
                            activeColor="#ffd700"
                        />
                        <Form>
                            <Form.Group className="mt-2 mb-3">
                                <Form.Control onChange={(e) => handleChange(e, i)} type="text" placeholder="Enter comment" />
                            </Form.Group>
                        </Form>
                        <hr />
                    </div>
                ))}

            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={handleSave}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    )
}
