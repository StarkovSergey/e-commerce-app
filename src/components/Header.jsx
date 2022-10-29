import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { Cart } from './Cart'


export const Header = () => {
  return (
    <header>
      <AppBar position="static">
        <Toolbar variant="dense" sx={{justifyContent: "space-between"}}>
          <Typography variant="h6" color="inherit" component="div">
            E-commerce app
          </Typography>
        </Toolbar>
      </AppBar>
    </header>
  )
}
