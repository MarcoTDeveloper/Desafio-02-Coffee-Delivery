import styled from "styled-components";
import { TitleText } from "../../../../components/TextTypes";

export const IntroContainer = styled.section`
    width: 100%;
    height: 34rem;

    display: flex;
    align-items: center;
    justify-content: center;
`

export const IntroContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    gap: 3.5rem;
`

export const IntroTitle = styled(TitleText)`
    margin-bottom: 1rem;
`

export const IntroGoodPointsContainer = styled.div`
    width: 100%;

    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 1.25rem;

    margin-top: 4.125rem;
`