import styled from "styled-components";

export const QuantityInputContainer = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem;

    background-color: ${({theme}) => theme.color["base-button"]};
    gap: 0.25rem;

    border-radius: 6px;

    input {
        width: 100%;
        text-align: center;

        border: none;

        background: none;
        color: ${({theme}) => theme.color["base-title"]};

        &:focus {
            outline: none;
        }
    }
`

export const IconWrapper = styled.button.attrs({
    type: "button"
})`
    width: 0.875rem;
    height: 0.875rem;

    border: none;
    background: none;

    color: ${({theme}) => theme.color["brand-purple"]};

    transition: 0.2s;

    &:disabled {
        opacity: 0.4;
    }

    &:not(:disabled):hover {
        color: ${({theme}) => theme.color["brand-purple-dark"]};
    }
`