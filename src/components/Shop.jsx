import React, { useEffect, useState } from "react"
import { Container } from "@mui/material"
import { shopAPI } from "../api/api"
import { Preloader } from "./Preloader"
import { GoodsList } from "./GoodsList"
import { Cart } from "./Cart"

export const Shop = () => {
  const [goods, setGoods] = useState([])
  const [loading, setLoading] = useState(true)
  const [order, setOrder] = useState([])

  const addToCart = (id) => {
    const itemIndex = order.findIndex((item) => item.id === id)

    if (itemIndex < 0) {
      const currItem = goods.find((item) => item.id === id)

      setOrder([...order, { ...currItem, quantity: 1 }])
    } else {
      setOrder(order.map((item) => (item.id === id ? { ...item, quantity: item.quantity + 1 } : item)))
    }
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
      <Cart quantity={order.length} />
      {loading ? (
        <Preloader />
      ) : (
        <Container sx={{ padding: "30px 0" }}>
          <GoodsList goods={goods} addGood={addToCart} />
        </Container>
      )}
    </main>
  )
}
