import styled from "styled-components";

export const NavbarContainer = styled.nav`
    width: 100%;
    background-color: white;
    
    img {
        width: 160px;
        margin-top: 6px;
        margin-left: 67px;
    }

    @media (max-width: 1130px) {
        display: flex;
        justify-content: center;

        img {
            margin-left: 0px;
        }
    }
`