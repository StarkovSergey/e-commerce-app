import React from 'react'
import { GoodItem } from './GoodItem'

export const GoodsList = ({goods = [], addGood}) => {

  if (!goods.length) {
    return <h3>Nothing here</h3>
  }

  return (
    <ul className="grid">
      {
        goods.map((good) => {
          return <GoodItem key={good.id} id={good.id} name={good.name} description={good.description} price={good.price} image={good.full_background} addGood={addGood}/>
        })
      }
    </ul>
  )
}
