import React from 'react'
import Router from '@router/index'
import Bar from '@layouts/Bar'
import { BrowserRouter } from 'react-router-dom'
import Nav from '@layouts/Nav'

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Router />
      <Bar />
    </BrowserRouter>
  )
}

export default App
