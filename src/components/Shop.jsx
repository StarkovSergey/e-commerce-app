import React, { useEffect, useState } from 'react'
import { Container } from '@mui/material'
import { shopAPI } from '../api/api'
import { Preloader } from './Preloader'
import { GoodsList } from './GoodsList'
import { Cart } from './Cart/Cart'
import { CartList } from './Cart/CartList'
import { AlertsStack } from './AlertsStack'

export const Shop = () => {
  const [goods, setGoods] = useState([])
  const [loading, setLoading] = useState(true)
  const [order, setOrder] = useState([])
  const [isCartShow, setCartShow] = useState(false)
  const [alertName, setAlertName] = useState('')

  const addToCart = (id) => {
    const itemIndex = order.findIndex((item) => item.id === id)

    if (itemIndex < 0) {
      const currItem = goods.find((item) => item.id === id)

      setOrder([...order, { ...currItem, quantity: 1 }])
    } else {
      setOrder(order.map((item) => (item.id === id ? { ...item, quantity: item.quantity + 1 } : item)))
    }

    setAlertName(goods.find(item => item.id === id).name)
  }

  const removeItem = (id) => {
    setOrder(order.filter((item) => item.id !== id))
  }

  const handleCartShow = () => {
    setCartShow(true)
  }
  const handleCartClose = () => {
    setCartShow(false)
  }
  const changeQuantity = (id, number) => {
    setOrder(
      order
        .map((item) => (item.id === id ? { ...item, quantity: item.quantity + number } : item))
        .filter((item) => item.quantity > 0)
    )
  }

  const closeAlert = () => {
    setAlertName('')
  }

  // getGoods
  useEffect(() => {
    shopAPI.getGoods().then((data) => {
      data.featured && setGoods(data.featured)
      setLoading(false)
    })
  }, [])

  return (
    <main>
      <CartList
        open={isCartShow}
        onClose={handleCartClose}
        order={order}
        removeItem={removeItem}
        changeQuantity={changeQuantity}
      />
      <div className="container container--cart">
        <Cart quantity={order.length} handleCartShow={handleCartShow} onClick={handleCartShow} />
      </div>
      {loading ? (
        <Preloader />
      ) : (
        <Container sx={{ padding: '30px 0' }}>
          <GoodsList goods={goods} addGood={addToCart} />
        </Container>
      )}
      {alertName && <AlertsStack name={alertName} closeAlert={closeAlert} />}
    </main>
  )
}
