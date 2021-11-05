import React from 'react'
import Router from '@router/index'
import Bar from '@layouts/Bar'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <header className="App-header">
        <h1>리액트 기본설정</h1>
      </header>
      <Router />
      <Bar />
    </BrowserRouter>
  )
}

export default App
