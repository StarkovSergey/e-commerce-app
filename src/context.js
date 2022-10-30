import { createContext, useReducer } from 'react'
import { reducer } from './reducer'

export const ShopContext = createContext()

const initialState = {
  goods: [],
  loading: true,
  order: [],
  isCartShow: false,
  alertName: '',
}

export const ContextProvider = ({ children }) => {
  const [value, dispatch] = useReducer(reducer, initialState)

  value.closeAlert = () => {
    dispatch({ type: 'CLOSE_ALERT' })
  }
  value.removeItem = (id) => {
    dispatch({ type: 'REMOVE_ITEM', payload: { id } })
  }
  value.addItem = (id) => {
    dispatch({ type: 'ADD_ITEM', payload: { id } })
  }
  value.handleCartShow = () => {
    dispatch({ type: 'SHOW_CART' })
  }
  value.handleCartClose = () => {
    dispatch({ type: 'CLOSE_CART' })
  }
  value.changeQuantity = (id, number) => {
    dispatch({ type: 'CHANGE_QUANTITY', payload: {id, number}})
  }
  value.setGoods = (goods) => {
    dispatch({ type: 'SET_GOODS', payload: {goods}})
  }

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>
}
