import { Alert } from '@mui/material'
import { useEffect } from 'react'

export const AlertsStack = ({name = '', closeAlert = Function.prototype}) => {
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
