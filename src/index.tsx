import App from 'App'
import React from 'react'
import 'reset.css'
import 'common.css'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import rootReducer from './reducers'
import { createStore } from 'redux'

const store = createStore(rootReducer)

const container = document.getElementById('root') as HTMLElement
const root = createRoot(container) // createRoot(container!) if you use TypeScript
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
)
