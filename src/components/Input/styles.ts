import styled, { css } from "styled-components";

export const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
    position: relative;

    > p {
        color: ${({theme}) => theme.color["base-error"]};
    }
`

interface InputStyleContainerProps {
    hasError: boolean
}

export const InputStyleContainer = styled.div<InputStyleContainerProps>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 2.625rem;
    border-radius: 4px;
    border: 1px solid ${({theme}) => theme.color["base-button"]};
    background: ${({theme}) => theme.color["base-input"]};
    transition: 0.2s;
    overflow: hidden;

    &:focus-within {
        border-color: ${({theme}) => theme.color["brand-yellow-dark"]};
    }

    ${({theme, hasError}) => hasError && css`
        border-color: ${theme.color["base-error"]};
    `}
`

export const InputStyled = styled.input`
    flex: 1;
    height: 100%;
    background: none;
    border: none;

    color: ${({theme}) => theme.color["base-text"]};
    font-size: 0.75rem;
    padding: 0 0.75rem;

    &::placeholder {
        color: ${({theme}) => theme.color["base-label"]};
    }
`

export const RightText = styled.p`
    font-size: 0.75rem;
    margin-right: 0.75rem;
    font-style: italic;
    color: ${({theme}) => theme.color["base-label"]};
`