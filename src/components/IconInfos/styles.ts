import styled from "styled-components";

export const IconInfosContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 0.75rem;
`
interface IconContainerProps {
    iconcolor: string
}

export const IconContainer = styled.div<IconContainerProps>`
    width: 2rem;
    height: 2rem;

    border-radius: 50%;

    background-color: ${({ iconcolor}) => iconcolor};
    color: ${({ theme}) => theme.color["base-white"]};

    display: flex;
    align-items: center;
    justify-content: center;
`