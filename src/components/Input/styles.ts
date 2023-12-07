import styled from "styled-components";

export const InputStyleContainer = styled.input`
    height: 2.625rem;
    border-radius: 4px;
    border: 1px solid ${({theme}) => theme.color["base-button"]};
    background: ${({theme}) => theme.color["base-input"]};
    transition: 0.2s;

    &:focus {
        border-color: ${({theme}) => theme.color["brand-yellow-dark"]};
    }

    color: ${({theme}) => theme.color["base-text"]};
    font-size: 0.75rem;
    padding: 0 0.75rem;

    &::placeholder {
        color: ${({theme}) => theme.color["base-label"]};
    }
`