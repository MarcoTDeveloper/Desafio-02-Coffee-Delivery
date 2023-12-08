import styled, { css } from "styled-components";

export const HeaderContainer = styled.header`
    width: 100%;
    height: 6.5rem;
    
    display: flex;
    align-items: center;
    justify-content: center;
    position: sticky;
    top: 0;
    left: 0;
    z-index: 5;

    background-color: ${({theme}) => theme.color["base-background"]};

    > div {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`

export const ButtonsContainer = styled.div`
    display: flex;
    align-items: center;

    gap: 0.75rem;
`

interface ButtonProps {
    color: "purple" | "yellow";
}

export const HeaderButton = styled.button<ButtonProps>`
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 0.25rem;

    height: 2.3rem;
    min-width: 2.3rem;
    padding: 0 0.5rem;

    border: none;
    border-radius: 6px;

    position: relative;

    font-size: ${({theme}) => theme.textSize["text-regular-s"]};

    cursor: inherit;

    span {
        display: flex;
        align-items: center;
        justify-content: center;

        font-size: 0.75rem;
        font-weight: 700;

        position: absolute;
        width: 1.25rem;
        height: 1.25rem;
        border-radius: 50%;
        top: calc(-1.25rem / 2);
        right: calc(-1.25rem / 2);
        color: ${({theme}) => theme.color["base-white"]};
    }

    ${({ color ,theme}) => css`
        background-color: ${theme.color[`brand-${color}-light`]};
        color: ${theme.color[`brand-${color}-dark`]};
    
        span {
            background: ${theme.color[`brand-${color}-dark`]};
        }
    ` }

    ${({ color ,theme}) => 
    color === "purple" && 
    css`
        svg {
            color: ${theme.color[`brand-purple`]};
        }
    ` }
`

