import { useState, createContext } from 'react'

export const CartItemContext = createContext()
export default function CartContext({ children }) {
    const [cartItems, setCartItems] = useState([])
    const addToCart = (item) => {
        const itemIdx = cartItems.find((i) => {
            return i.id === item.id
        })
        if (!itemIdx) {
            setCartItems([...cartItems, item])
        }
        else {
            const newItemArray = cartItems.map((i) => {
                return i.id === item.id ? { ...i, qty: i.qty + Number(item.qty) } : { ...i }
            })
            setCartItems(newItemArray)
        }
    }
    const removeFromCart = (item) => {
        const filteredArray = cartItems.filter(i => {
            return i.id !== item.id
        })
        setCartItems(filteredArray)
    }
    const clearCart = () => {
        setCartItems([])
    }
    const value = { cartItems, addToCart ,removeFromCart, clearCart}

    return (
        <CartItemContext.Provider value={value}>{children}</CartItemContext.Provider>
    )
}
