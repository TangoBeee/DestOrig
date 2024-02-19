import React from 'react'
import { HeroContainer, RouteMapPlannerContainer } from './Hero.styled'
import RouteCTAButton from '../RouteCTAButton/RouteCTAButton'
import RoutePlannerForm from '../RoutePlannerForm/RoutePlannerForm'

const Hero = () => {
  return (
    <HeroContainer>
        <div className='main-heading'>
            Let's calculate <span>distance</span> from Google maps
        </div>

        <RouteMapPlannerContainer>
          <div className='route-planner-wrapper'>
            <div className="route-planner-container">
              <RoutePlannerForm />

              <div className='route-cta-wrapper'>
                <RouteCTAButton btnText={"Calculate"}/>
              </div>
            </div>

            <div className="route-plan-container">
              <div className="route-distance-wrapper">
                <h2>Distance</h2>

                <div className="distance">1,427 kms</div>
              </div>

              <div className="route-info">
                <p>The distance between <span>Mumbai</span> and <span>Delhi</span> via the seleted route is <span>1,427 kms</span>.</p>
              </div>
            </div>
          </div>

          <hr className='separator' />
          
          <div className='route-map-wrapper'>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158858.5851827611!2d-0.2664023117250886!3d51.52852620494017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2sin!4v1708351972056!5m2!1sen!2sin"
            width="560px"
            height="551px"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          </div>
        </RouteMapPlannerContainer>
        
    </HeroContainer>
  )
}

export default Hero