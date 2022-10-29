import React, { useEffect, useState } from 'react'
import { Container } from '@mui/material'
import { shopAPI } from '../api/api'
import { Preloader } from './Preloader'
import { GoodsList } from './GoodsList'

export const Shop = () => {
  const [goods, setGoods] = useState([])
  const [loading, setLoading] = useState(true)

  // getGoods
  useEffect(() => {
      shopAPI.getGoods()
        .then(data => {
          data.featured && setGoods(data.featured)
          setLoading(false)
        })
    }, []
  )

  return (
    <main>
      {loading
        ? <Preloader/>
        : <Container sx={{paddingTop: "30px"}}>
           <GoodsList goods={goods}/>
        </Container>
      }

    </main>
  )
}
