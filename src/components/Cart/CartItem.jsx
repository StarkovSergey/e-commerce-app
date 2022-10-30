import React, { useContext } from 'react'
import { Avatar, ListItem, ListItemAvatar, ListItemText } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'
import RemoveIcon from '@mui/icons-material/Remove'
import AddIcon from '@mui/icons-material/Add'
import { ShopContext } from '../../context'

export const CartItem = ({ id, name, price, quantity, image, description }) => {

  const { removeItem, changeQuantity } = useContext(ShopContext)

  return (
    <ListItem
      secondaryAction={
        <IconButton size="small" edge="end" aria-label="delete" onClick={() => removeItem(id)}>
          <DeleteIcon size="small" />
        </IconButton>
      }
    >
      <ListItemAvatar>
        <Avatar>
          <img src={image} alt={name} />
        </Avatar>
      </ListItemAvatar>

      <ListItemText primary={`${name} x ${quantity} (${quantity * price} ₽)`} secondary={description} />

      <div style={{width: "68px", flexShrink: "0"}}>
        <IconButton size="small" onClick={() => changeQuantity(id, -1)}>
          <RemoveIcon />
        </IconButton>
        <IconButton size="small" onClick={() => changeQuantity(id, +1)}>
          <AddIcon />
        </IconButton>
      </div>
    </ListItem>
  )
}
