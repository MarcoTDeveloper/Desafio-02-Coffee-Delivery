import styled from "styled-components";

export const ButtonContainer = styled.button`
    padding: 0.75rem 2.8rem;
    color: ${({theme}) => theme.color["base-white"]};
    font-weight: 700;
    background: ${({theme}) => theme.color["brand-yellow"]};
    font-size: ${({theme}) => theme.textSize["components-button-g"]};
    border: none;
    border-radius: 6px;
    text-transform: uppercase;
    transition: 0.2s;
    line-height: 1.3rem;
    margin-top: 0.7rem;

    &:disabled {
        opacity: 0.7;
        cursor: not-allowed;
    }

    &:not(:disabled):hover {
        background: ${({theme}) => theme.color["brand-yellow-dark"]};
    }
`