import React, { useContext } from 'react'
import { GoodItem } from './GoodItem'
import { ShopContext } from '../context'

export const GoodsList = () => {
  const { goods } = useContext(ShopContext)

  if (!goods.length) {
    return <h3>Nothing here</h3>
  }

  return (
    <ul className="grid">
      {
        goods.map((good) => {
          return <GoodItem key={good.id} id={good.id} name={good.name} description={good.description} price={good.price} image={good.full_background}/>
        })
      }
    </ul>
  )
}
