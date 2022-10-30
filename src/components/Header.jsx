import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'


export const Header = () => {
  return (
    <header>
      <AppBar position="static">
        <div className="container container--header"><Toolbar variant="dense" sx={{justifyContent: 'space-between'}}>
          <Typography variant="h6" color="inherit" component="div">
            E-commerce app
          </Typography>
        </Toolbar></div>
      </AppBar>
    </header>
  )
}
