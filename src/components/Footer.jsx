import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { Link } from '@mui/material'

export const Footer = () => {
  return (
    <footer>
      <AppBar position="static">
        <div className="container"><Toolbar variant="dense" sx={{display: 'flex', gap: '10px'}}>

          <Typography variant="h6" sx={{color: 'white'}} component="div">
            © {new Date().getFullYear()}
          </Typography>
          <Link href="https://github.com/StarkovSergey/e-commerce-app" sx={{color: 'white'}}>Project repo</Link>
        </Toolbar></div>
      </AppBar>
    </footer>
  )
}
