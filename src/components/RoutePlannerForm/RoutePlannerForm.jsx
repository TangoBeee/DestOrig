import React from 'react'
import { RoutePlannerFormContainer } from './RoutePlannerForm.styled'
import RoutePlannerInput from '../RoutePlannerInput/RoutePlannerInput'
import OriginMark from '../../assets/map-markers/origin-mark.svg';
import StopMark from '../../assets/map-markers/stop-mark.svg';
import DestinationMark from '../../assets/map-markers/destination-mark.svg';
import AddIcon from '../../assets/add-icon.svg'
import RouteCTAButton from '../RouteCTAButton/RouteCTAButton';

const RoutePlannerForm = () => {

  const formSubmissionHandler = (event) => {
    event.preventDefault()
  }

  return (
    <RoutePlannerFormContainer onSubmit={formSubmissionHandler}>
        <div className='form-input-container'>
          <RoutePlannerInput labelName={"Origin"} inputimg={OriginMark} placeholder={"Enter your origin location"} />
          
          <div className='stop-input-wrapper'>
              <RoutePlannerInput labelName={"Stop"} inputimg={StopMark} placeholder={"Add a stop"} />
              
              <button>
                  <img src={AddIcon} alt="add-stop-icon" />
                  <p>Add another stop</p>
              </button>
          </div>

          <RoutePlannerInput labelName={"Destination"} inputimg={DestinationMark} placeholder={"Enter your destination location"} />
        </div>

        <div className='route-cta-wrapper'>
          <RouteCTAButton btnText={"Calculate"}/>
        </div>
    </RoutePlannerFormContainer>
  )
}

export default RoutePlannerForm