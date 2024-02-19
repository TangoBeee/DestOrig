import styled from "styled-components";

export const RoutePlannerInputContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 5px;

    label {
        color: black;
        font-size: 14px;
        font-weight: 400;
        font-family: 'IBM Plex Sans', sans-serif;
        line-height: 16.8px;
    }

    input {
        padding: 15px 40px;
        border: 1px solid #DCDDEC;
        border-radius: 6px;
        font-size: 16px;
        font-weight: 600;
        font-family: 'IBM Plex Sans', sans-serif;
        line-height: 19.2px;
        background: url(${p => p.inputImg}) no-repeat left;
        background-size: 16px;
        background-position-x: 15px;
        outline: 0;

        &::placeholder {
            font-size: 15px;
            font-weight: 400;
        }
    }

    @media (max-width: 1130px) {
        width: 100%;
        input {
            width: 100%;
        }

        label {
            display: none;
        }
    }
`