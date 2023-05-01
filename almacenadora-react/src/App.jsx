import { useState } from 'react'
import {Outlet} from 'react-router-dom'


export const  App = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <Outlet />
    </>
  )
}


