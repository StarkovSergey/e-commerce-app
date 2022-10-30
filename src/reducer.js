export const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'CLOSE_ALERT':
      return {
        ...state,
        alertName: '',
      }
    case 'REMOVE_ITEM':
      return {
        ...state,
        order: state.order.filter((item) => item.id !== payload.id),
      }
    case 'ADD_ITEM':
      const itemIndex = state.order.findIndex((item) => item.id === payload.id)
      let newOrderState = []

      if (itemIndex < 0) {
        const currItem = state.goods.find((item) => item.id === payload.id)

        newOrderState = [...state.order, { ...currItem, quantity: 1 }]
      } else {
        newOrderState = state.order.map((item) => (item.id === payload.id ? { ...item, quantity: item.quantity + 1 }
          : item
        ))
      }
      return {
        ...state,
        order: newOrderState,
        alertName: state.goods.find(item => item.id === payload.id).name
      }
    case 'SHOW_CART':
      return {
        ...state,
        isCartShow: true
      }
    case 'CLOSE_CART':
      return {
        ...state,
        isCartShow: false
      }
    case 'CHANGE_QUANTITY':
      return {
        ...state,
        order: state.order
          .map((item) => (item.id === payload.id ? { ...item, quantity: item.quantity + payload.number } : item))
          .filter((item) => item.quantity > 0)
      }
    case 'SET_GOODS':
      return {
        ...state,
        goods: payload.goods || [],
        loading: false
      }
    default:
      return state
  }
}
