import styled from "styled-components";

export const ShoppingCartContainer = styled.form`
    margin-top: 2.5rem;
    display: flex;
    justify-content: space-between;
    gap: 2rem;
`

export const SectionBaseStyle = styled.div`
    width: 100%;
    background: ${({theme}) => theme.color["base-card"]};
    border-radius: 6px;
    padding: 2.5rem;
`