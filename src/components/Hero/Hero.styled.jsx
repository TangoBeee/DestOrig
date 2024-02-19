import styled from "styled-components";

export const HeroContainer = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .main-heading {
        color: #1B31A8;
        font-family: "Work Sans", sans-serif;
        font-size: 20px;
        font-weight: 400;
        line-height: 24px;
        text-align: center;
        margin: 33px;

        span {
            font-weight: 600;
        }
    }
`

export const RouteMapPlannerContainer = styled.div`
    display: flex;
    gap: 130px;
    align-items: center;

    .route-planner-wrapper {
        display: flex;
        flex-direction: column;
        gap: 45px;

        .route-planner-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .route-plan-container {
            display: flex;
            flex-direction: column;
            border: 1px solid #E9EEF2;
            border-radius: 8px;
            overflow: hidden;

            .route-distance-wrapper {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 26px 23px;
                background-color: white;

                h2 {
                    color: #1E2A32;
                    font-size: 20px;
                    font-family: 'IBM Plex Sans', sans-serif;
                    font-weight: 700;
                    line-height: 24px;
                }

                .distance {
                    color: #0079FF;
                    font-size: 30px;
                    font-family: 'IBM Plex Sans', sans-serif;
                    font-weight: 700;
                    line-height: 36px;
                    text-align: end;
                }
            }

            .route-info p {
                color: #1E2A32;
                font-size: 13px;
                font-weight: 400;
                padding: 32px 26px;
                font-family: "Work Sans", sans-serif;

                span {
                    font-weight: 600;
                }
            }
        }
    }

    .separator {
        display: none;
    }

    @media (max-width: 1250px) {
        width: 100%;
        justify-content: space-around;
        gap: 0;
        margin: 30px 0px;
    }

    @media (max-width: 1130px) {
        flex-direction: column-reverse;

        width: 80%;
        margin: 0px;

        .route-map-wrapper {
            width: 100%;

            iframe {
                width: 100%;
                height: 400px;
            }
        }

        .separator {
            display: block;
            margin: 25px 0px;
            width: 100%;
            height: 0px;
            border: 0.5px solid black;
        }

        .route-planner-wrapper {
            width: 100%;
            .route-planner-container {
                flex-direction: column;
                gap: 30px;
            }

            .route-plan-container {
                .route-distance-wrapper {
                    .distance {
                       font-size: 25px;
                    }
                }

                .route-info p {
                    font-size: 16px;
                }
            }
            margin-bottom: 20px;
        }
   
    }
`