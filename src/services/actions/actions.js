import { ADD_To_CART, REMOVE_TO_CART } from "../constants"

export const addToCart = (data) => {
    // console.warn("action", data)
    return {
        type: ADD_To_CART,
        data: data
    }
}

export const removeTOCart = () => {
    console.warn("action")
    return {
        type: REMOVE_TO_CART
    }
}