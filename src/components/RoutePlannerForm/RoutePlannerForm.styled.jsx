import styled from "styled-components";

export const RoutePlannerFormContainer = styled.form`
    display: flex;
    flex-direction: column;
    gap: 26px;

    .stop-input-wrapper {
        display: flex;
        flex-direction: column;
        align-items: end;
        gap: 5px;

        button {
            all: unset;
            display: flex;
            align-items: center;
            gap: 2px;
            cursor: pointer;
            color: #2E2E2E;
            font-size: 15px;
            font-weight: 400;
            line-height: 18px;
            font-family: 'Rubik';

            p {
                margin-right: 7px;
            }
        }
    }

    @media (max-width: 1130px) {
        width: 100%;
    }
`