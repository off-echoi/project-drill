import { memo } from 'react'
import ReactDOM from 'react-dom'

type PortalType = {
  children?: JSX.Element | JSX.Element[] | null
}

function ModalPortal({ children }: PortalType) {
  const portal: HTMLDivElement = document.getElementById('modal') as HTMLDivElement
  return ReactDOM.createPortal(children, portal)
}

export default memo(ModalPortal)
