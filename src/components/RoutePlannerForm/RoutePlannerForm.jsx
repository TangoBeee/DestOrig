import React from 'react'
import { RoutePlannerFormContainer } from './RoutePlannerForm.styled'
import RoutePlannerInput from '../RoutePlannerInput/RoutePlannerInput'
import OriginMark from '../../assets/map-markers/origin-mark.svg';
import StopMark from '../../assets/map-markers/stop-mark.svg';
import DestinationMark from '../../assets/map-markers/destination-mark.svg';
import AddIcon from '../../assets/add-icon.svg'
import RouteCTAButton from '../RouteCTAButton/RouteCTAButton';

const RoutePlannerForm = () => {
  return (
    <RoutePlannerFormContainer>
        <div className='form-input-container'>
          <RoutePlannerInput labelName={"Origin"} inputImg={OriginMark} placeholder={"Enter your origin location"} />
          
          <div className='stop-input-wrapper'>
              <RoutePlannerInput labelName={"Stop"} inputImg={StopMark} placeholder={"Add a stop"} />
              
              <button>
                  <img src={AddIcon} alt="add-stop-icon" />
                  <p>Add another stop</p>
              </button>
          </div>

          <RoutePlannerInput labelName={"Destination"} inputImg={DestinationMark} placeholder={"Enter your destination location"} />
        </div>
        
        <div className='route-cta-wrapper'>
          <RouteCTAButton btnText={"Calculate"}/>
        </div>
    </RoutePlannerFormContainer>
  )
}

export default RoutePlannerForm