import React from 'react'

import CompanyLogo from '../../assets/company-logo.png'
import { NavbarContainer } from './Navbar.styled'

const Navbar = () => {
  return (
    <NavbarContainer>
        <div className="logo-wrapper">
            <a href="#">
                <img src={CompanyLogo} alt="company-logo" />
            </a>
        </div>
    </NavbarContainer>
  )
}

export default Navbar