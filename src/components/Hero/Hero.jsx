import React, { useState } from 'react'
import { HeroContainer, RouteMapPlannerContainer } from './Hero.styled'
import RoutePlannerForm from '../RoutePlannerForm/RoutePlannerForm'
import {
  useJsApiLoader,
  GoogleMap,
  DirectionsRenderer,
} from "@react-google-maps/api";
import { Toaster } from 'react-hot-toast'

const Hero = () => {
  const [directions, setDirections] = useState(null)
  const [distance, setDistance] = useState('0 km')
  const [origin, setOrigin] = useState('Origin')
  const [destination, setDestination] = useState('Destination')

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    libraries: ["places"],
  });

  const onDirectionsLoad = (directionsResult) => {
    setDirections(directionsResult);
    setDistance(
      directionsResult.routes[0].legs[0].distance.text || "Distance Not Found"
    );
  };

  return (
    <HeroContainer>
      <Toaster
        position="top-center"
        reverseOrder={true}
      />
        <div className='main-heading'>
            Let's calculate <span>distance</span> from Google maps
        </div>

        <RouteMapPlannerContainer>
          <div className='route-planner-wrapper'>
            <RoutePlannerForm onDirectionsLoad={onDirectionsLoad} setOriginValue={setOrigin} setDestinationValue={setDestination} />

            <div className="route-plan-container">
              <div className="route-distance-wrapper">
                <h2>Distance</h2>

                <div className="distance">{distance}</div>
              </div>

              <div className="route-info">
                <p>The distance between <span>{origin}</span> and <span>{destination}</span> via the seleted route is <span>{distance}</span>.</p>
              </div>
            </div>
          </div>

          <hr className='separator' />
          
          <div className='route-map-wrapper'>
            {isLoaded && (
              <GoogleMap
                center={{ lat: 0.0, lng: 0.0 }}
                zoom={1.2}
                mapContainerStyle={{ width: "100%", height: "100%" }}
                options={{
                  zoomControl: false,
                  streetViewControl: false,
                  mapTypeControl: false,
                }}
              >
                {directions && <DirectionsRenderer directions={directions} />}
              </GoogleMap>
            )}
          </div>
        </RouteMapPlannerContainer>
        
    </HeroContainer>
  )
}

export default Hero