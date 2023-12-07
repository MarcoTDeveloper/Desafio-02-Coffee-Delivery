import styled, { css } from "styled-components";

interface QuantityInputProps {
    size?: "medium" | "small";
}

export const QuantityInputContainer = styled.div<QuantityInputProps>`
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

    ${({size}) => size === 'medium' && css`
        padding: 0.5rem;
    `}

    ${({size}) => size === 'small' && css`
        padding: 0.3rem 0.5rem;
    `}
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