import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { Link } from '@mui/material'

export const Footer = () => {
  return (
    <footer>
      <AppBar position="static">
        <Toolbar variant="dense" sx={{display: "flex", gap: "10px"}}>

          <Typography variant="h6" color="inherit" component="div">
            © {new Date().getFullYear()}
          </Typography>
          <Link href="#" color="inherit">Project repo</Link>
        </Toolbar>
      </AppBar>
    </footer>
  )
}
