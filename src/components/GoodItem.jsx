import React, { useContext } from 'react'
import { Button, Card, CardContent, CardMedia } from '@mui/material'
import Typography from '@mui/material/Typography'
import { ShopContext } from '../context'

export const GoodItem = (props) => {
  const {
    id,
    name,
    description,
    price,
    image,
  } = props

  const { addItem } = useContext(ShopContext)

  return (
    <li sx={{maxWidth: 345}}>
      <Card className="item" sx={{display: 'flex', flexDirection: 'column'}}>
        <div className="card-box">
          <CardMedia
          className="card-image"
          component="img"
          alt={name}
          height="140"
          image={image}
        />
        </div>
        <CardContent sx={{display: 'flex', flexDirection: 'column', flexGrow: "1"}}>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
          <Typography gutterBottom variant="body1" component="div" sx={{flexGrow: '1'}}>
            {price} ₽
          </Typography>
          <Button onClick={() => {addItem(id)}} size="small" variant="contained">Buy</Button>
        </CardContent>
      </Card>
    </li>
  )
}
