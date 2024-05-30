import { createContext, useReducer, useContext } from 'react'

const CartContext = createContext()

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return [...state, action.payload]
    case 'REMOVE_ITEM':
      return state.filter((item) => item._id !== action.payload)
    default:
      return state
  }
}

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, [])

  const addItem = (item) => {
    dispatch({ type: 'ADD_ITEM', payload: item })
  }

  const removeItem = (id) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id })
  }

  return <CartContext.Provider value={{ cart: state, addItem, removeItem }}>{children}</CartContext.Provider>
}

export const useCart = () => useContext(CartContext)
