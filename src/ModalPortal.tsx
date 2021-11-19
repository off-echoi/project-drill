import { ReactElement } from 'react'
import ReactDOM from 'react-dom'

type PortalType = {
  children?: ReactElement<HTMLElement> | ReactElement<HTMLElement>[]
}

const ModalPortal = ({ children }: PortalType) => {
  const portal: HTMLDivElement = document.getElementById('modal') as HTMLDivElement
  return ReactDOM.createPortal(children, portal)
}

export default ModalPortal
