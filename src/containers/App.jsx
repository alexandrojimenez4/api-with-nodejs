import React, { useState } from 'react'
import Header from '../components/Header'
import Menu from '../components/Menu'
import Cart from '../components/Cart'

const App = () => {
  const [open, setOpen] = useState(false)

  return (
    <div>
      <button onClick={() => setOpen(true)}>
        Open cart
      </button>
      <Cart open={open} />
    </div>
  )
}

export default App
