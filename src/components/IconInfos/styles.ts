import styled from "styled-components";

export const IconInfosContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 0.75rem;
`
interface IconContainerProps {
    color: string
}

export const IconContainer = styled.div<IconContainerProps>`
    width: 2rem;
    height: 2rem;

    border-radius: 50%;

    background-color: ${({ color}) => color};
    color: ${({ theme}) => theme.color["base-white"]};

    display: flex;
    align-items: center;
    justify-content: center;
`