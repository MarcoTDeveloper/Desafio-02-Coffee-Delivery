import styled from "styled-components";

export const PaymentMethodsInputContainer = styled.div`
    padding: 0 1rem;
    background: ${({theme}) => theme.color["base-button"]};
    color: ${({theme}) => theme.color["base-text"]};
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 0.75rem;
    font-size: 0.75rem;
    text-transform: uppercase;
    border-radius: 6px;
    height: 3rem;
    border: 1px solid ${({theme}) => theme.color["base-button"]};
    transition: 0.4s;

    svg {
        color: ${({theme}) => theme.color["brand-purple"]};
    }

    &:hover {
        background: ${({theme}) => theme.color["base-hover"]};
    }

    user-select: none;
`