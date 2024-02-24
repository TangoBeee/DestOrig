import React from 'react'
import { RoutePlannerInputContainer } from './RoutePlannerInput.styled'
// import { Autocomplete } from '@react-google-maps/api' // It is working but whenever we start fresh we have to reload the page

const RoutePlannerInput = ({ labelName, inputimg, placeholder, value, onChange }) => {
  return (
    <RoutePlannerInputContainer  inputimg={inputimg} >
      <label htmlFor="input">{labelName}</label>
      <div className='input-wrapper'>
        <input
          type="text"
          placeholder={placeholder}
          id={`${labelName}-input`}
          value={value}
          onChange={onChange}
        />
      </div>
    </RoutePlannerInputContainer>
  )
}

export default RoutePlannerInput