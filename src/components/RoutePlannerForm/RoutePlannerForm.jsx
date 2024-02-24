import React, { useRef, useState } from 'react'
import { RoutePlannerFormContainer } from './RoutePlannerForm.styled'
import RoutePlannerInput from '../RoutePlannerInput/RoutePlannerInput'
import OriginMark from '../../assets/map-markers/origin-mark.svg';
import StopMark from '../../assets/map-markers/stop-mark.svg';
import DestinationMark from '../../assets/map-markers/destination-mark.svg';
import AddIcon from '../../assets/add-icon.svg'
import RouteCTAButton from '../RouteCTAButton/RouteCTAButton';
import toast from 'react-hot-toast'

const RoutePlannerForm = ({ onDirectionsLoad, setOriginValue, setDestinationValue }) => {
  const [origin, setOrigin] = useState("")
  const [waypoint, setWaypoint] = useState('')
  const [waypoints, setWaypoints] = useState([])
  const [destination, setDestination] = useState("")

  const formSubmissionHandler = (event) => {
    event.preventDefault()
    console.log(origin);
    toast.loading("Search for a route.")
    const directionsService = new window.google.maps.DirectionsService()
    directionsService.route(
      {
        origin,
        waypoints: waypoints.map((waypoint) => ({
          location: waypoint,
          stopover: true,
        })),
        destination,
        travelMode: window.google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        toast.dismiss()
        if (status === window.google.maps.DirectionsStatus.OK) {
          setOriginValue(origin)
          setDestinationValue(destination)
          onDirectionsLoad(result)
        } else {
          toast.error(`Error fetching directions: ${status}`)
        }
      }
    );
  }

  const handleAddWaypoint = (event) => {
    if (waypoint !== "") {
      toast.success('Waypoint added!!')
      setWaypoints([...waypoints, waypoint]);
      setWaypoint('')
    } else {
      toast.error("Field cannot be empty.")
    }
  }

  return (
    <RoutePlannerFormContainer onSubmit={formSubmissionHandler}>
        <div className='form-input-container'>
          <RoutePlannerInput
            labelName={"Origin"}
            inputimg={OriginMark}
            placeholder={"Enter your origin location"}
            value={origin}
            onChange={(e) => setOrigin(e.target.value)}
          />
          
          <div className='stop-input-wrapper'>
              <RoutePlannerInput
                labelName={"Stop"}
                inputimg={StopMark}
                placeholder={"Add a stop"}
                value={waypoint}
                onChange={(e) => setWaypoint(e.target.value)}
              />
              
              <button type='button' onClick={handleAddWaypoint}>
                  <img src={AddIcon} alt="add-stop-icon" />
                  <p>Add another stop</p>
              </button>
          </div>

          <RoutePlannerInput
            labelName={"Destination"}
            inputimg={DestinationMark}
            placeholder={"Enter your destination location"}
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          />
        </div>

        <div className='route-cta-wrapper'>
          <RouteCTAButton btnText={"Calculate"}/>
        </div>
    </RoutePlannerFormContainer>
  )
}

export default RoutePlannerForm