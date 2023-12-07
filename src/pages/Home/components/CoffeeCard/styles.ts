import styled from "styled-components";
import { RegularText, TitleText } from "../../../../components/TextTypes";

export const CoffeeCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;

    width: 100%;
    padding: 1.25rem;
    padding-top: 0;

    background-color: ${({theme}) => theme.color["base-card"]};

    border-radius: 6px 36px 6px 36px;


    img {
        width: 7.5rem;
        height: 7.5rem;
        margin-top: -1.25rem;
    }
`

export const Types = styled.div`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

    gap: 0.25rem;

    margin-top: 1rem;
    margin-bottom: 1.25rem;

    span {
        background-color: ${({theme}) => theme.color["brand-yellow-light"]};
        color: ${({theme}) => theme.color["brand-yellow-dark"]};
        
        font-size: ${({theme}) => theme.textSize["components-tag"]};
        font-weight: 700;
        text-transform: uppercase;

        padding: 0.25rem 0.5rem;
        border-radius: 1000px;
    }
`

export const Name = styled(TitleText).attrs({
    size: "s",
    color: "subtitle",
    weight: 700
})`
    margin-bottom: 0.5rem;
`

export const Description = styled(RegularText).attrs({
    size: "s",
    color: "label",
})`
    margin-bottom: 2rem;
`

export const CardFooter = styled.div`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    > div {
        display: flex;
        align-items: center;
        gap: 3px;

        p {
            line-height: 0.75rem;
        }
    }
`

export const AddCartWrapper = styled.div`
    width: 7.5rem;
    
    > button {
        width: 2.375rem;
        height: 2.375rem;
        border: none;
        border-radius: 6px;
        display: flex;
        align-items: center;
        justify-content: center;

        background-color: ${({theme}) => theme.color["brand-purple-dark"]};
        color: ${({theme}) => theme.color["base-card"]};

        margin-left: 0.3rem;

        transition: 0.2s;

        &:hover {
            background-color: ${({theme}) => theme.color["brand-purple"]};
        }
    }
`