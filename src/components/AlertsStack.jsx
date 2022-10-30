import { Alert } from '@mui/material'
import { useContext, useEffect } from 'react'
import { ShopContext } from '../context'

export const AlertsStack = () => {

  const { closeAlert, alertName: name } = useContext(ShopContext)

  useEffect(() => {
    const timerId = setTimeout(closeAlert, 3000)

    return () => {
      clearTimeout(timerId)
    }
  }, [name])

  return (
    <div className="stack">
      <Alert severity="success">{name} to cart</Alert>
    </div>
  )
}
