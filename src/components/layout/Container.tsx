import { ReactNode } from 'react'
import styled from 'styled-components'

// Create a Title component that'll render an <h1> tag with some styles
const StlyedContainer = styled.main`
  display: flex;
  flex-direction: column;
`

export default function Container({ children }: { children: ReactNode }) {
  return <StlyedContainer>{children}</StlyedContainer>
}
