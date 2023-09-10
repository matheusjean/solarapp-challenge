import React from "react"
import { Container } from './styles'

interface Props {
  title: string
}

const Heading = ({ title }: Props) => {
  return (
    <>
      <Container>
        <h6>
          <div />
          {title}
        </h6>
      </Container>
    </>
  )
}

export default Heading
