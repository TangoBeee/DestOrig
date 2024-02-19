import styled from "styled-components";

export const RouteCTAButtonContainer = styled.button`
    all: unset;
    padding: 20px 32px;
    background-color: #1B31A8;
    color: white;
    font-weight: 600;
    font-size: 18px;
    font-family: "IBM Plex Sans", sans-serif;
    border-radius: 32px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #2e51d0;
    }
`