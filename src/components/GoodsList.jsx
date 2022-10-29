import React from 'react'
import { GoodItem } from './GoodItem'

export const GoodsList = (props) => {
  const {goods = []} = props

  if (!goods.length) {
    return <h3>Nothing here</h3>
  }

  return (
    <ul className="grid">
      {
        goods.map((good) => {
          return <GoodItem key={good.is} id={good.id} name={good.name} description={good.description} price={good.price} image={good.full_background}/>
        })
      }
    </ul>
  )
}
