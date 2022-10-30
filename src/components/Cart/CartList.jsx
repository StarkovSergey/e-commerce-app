import React from 'react'
import { Button, List, Modal } from '@mui/material'
import { CartItem } from './CartItem'
import IconButton from '@mui/material/IconButton'
import { Close } from '@mui/icons-material'
import style from './Cart.module.css'

export const CartList = ({ order = [], open, onClose, removeItem, changeQuantity }) => {
  const totalPrice = order.reduce((acc, curr) => {
    return acc + curr.price * curr.quantity
  }, 0)

  return (
    <Modal open={open} onClose={onClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
      <div className="modal-box">
        <IconButton className="modal-close-button" onClick={onClose}>
          <Close />
        </IconButton>
        {order.length ? (
          <List>
            {order.map((item) => {
              return <CartItem key={item.id} {...item} removeItem={removeItem} changeQuantity={changeQuantity} />
            })}
          </List>
        ) : (
          'The cart is empty'
        )}
        <div className={style.footer}>
          <p>Total cost: ${totalPrice}</p>
          {order.length && <Button variant="contained">Buy</Button>}
        </div>
      </div>
    </Modal>
  )
}
