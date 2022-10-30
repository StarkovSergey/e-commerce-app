import React, { useContext, useEffect } from 'react'
import { Container } from '@mui/material'
import { shopAPI } from '../api/api'
import { Preloader } from './Preloader'
import { GoodsList } from './GoodsList'
import { Cart } from './Cart/Cart'
import { CartList } from './Cart/CartList'
import { AlertsStack } from './AlertsStack'
import { ShopContext } from '../context'

export const Shop = () => {
  const { alertName, setGoods, loading } = useContext(ShopContext)

  // getGoods
  useEffect(() => {
    shopAPI.getGoods().then((data) => {
      data.featured && setGoods(data.featured)
    })
  }, [])

  return (
    <main>
      <CartList />
      <div className="container container--cart">
        <Cart  />
      </div>
      {loading ? (
        <Preloader />
      ) : (
        <Container sx={{ padding: '30px 0' }}>
          <GoodsList />
        </Container>
      )}
      {alertName && <AlertsStack />}
    </main>
  )
}
