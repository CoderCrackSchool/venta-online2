import { createContext, useState } from "react"

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

    const [currentCart, setCurrentCart] = useState([])

    const existProductCart = (product) => {
        const result = currentCart.find((cartProduct) => {
            return cartProduct.id === product.id
        })
        return result
    }

    const addItemToCart = (product) => {

        let newCurrentCart = []

        if (existProductCart(product)) {
            newCurrentCart = [...currentCart, { ...product, quantity: 10 }]
        }

        // else {
        //     newCurrentCart = [...currentCart, product]
        // }



        setCurrentCart(newCurrentCart)
    }

    const values = {
        currentCart,
        setCurrentCart,
        addItemToCart
    }

    return (
        <CartContext.Provider value={values}> {children} </CartContext.Provider>
    )

}