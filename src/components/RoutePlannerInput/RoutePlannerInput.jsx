import React from 'react'
import { RoutePlannerInputContainer } from './RoutePlannerInput.styled'

const RoutePlannerInput = ({ labelName, inputImg, placeholder }) => {
  return (
    <RoutePlannerInputContainer  inputImg={inputImg} >
      <label htmlFor="input">{labelName}</label>
      <input type="text" placeholder={placeholder} id={`${labelName}-input`} />
    </RoutePlannerInputContainer>
  )
}

export default RoutePlannerInput