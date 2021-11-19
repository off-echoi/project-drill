import Router from '@router/index'
import Bar from '@layouts/Bar'
import { BrowserRouter } from 'react-router-dom'
import Nav from '@layouts/Nav'
import ModalPortal from './ModalPortal'

function App() {
  return (
    <BrowserRouter>
      <Router />
      <Bar />
      <ModalPortal>
        <Nav />
      </ModalPortal>
    </BrowserRouter>
  )
}

export default App
