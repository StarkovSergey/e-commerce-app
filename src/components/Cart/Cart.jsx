import React from 'react'
import IconButton from '@mui/material/IconButton'
import ShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Badge, styled } from '@mui/material'


export const Cart = ({quantity = 0, handleCartShow}) => {

  return (
    <div className="cart" onClick={handleCartShow}>
      <IconButton aria-label="cart">
        <StyledBadge badgeContent={quantity} color="warning" >
          <ShoppingCartIcon />
        </StyledBadge>
      </IconButton>
    </div>
  )
}

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));
