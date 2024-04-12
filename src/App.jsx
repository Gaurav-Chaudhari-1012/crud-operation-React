import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from './routing/Route'

import "./global.css"

const App = () => {
  return (
    <>
    <RouterProvider router={router}>
    </RouterProvider>
    </>
  )
}

export default App