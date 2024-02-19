import React from 'react'
import { RouteCTAButtonContainer } from './RouteCTAButton.styled'

const RouteCTAButton = ({ btnText }) => {
  return (
    <RouteCTAButtonContainer>
        {btnText}
    </RouteCTAButtonContainer>
  )
}

export default RouteCTAButton