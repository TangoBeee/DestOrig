import React from 'react'
import { RoutePlannerInputContainer } from './RoutePlannerInput.styled'

const RoutePlannerInput = ({ labelName, inputimg, placeholder }) => {
  return (
    <RoutePlannerInputContainer  inputimg={inputimg} >
      <label htmlFor="input">{labelName}</label>
      <input type="text" placeholder={placeholder} id={`${labelName}-input`} />
    </RoutePlannerInputContainer>
  )
}

export default RoutePlannerInput