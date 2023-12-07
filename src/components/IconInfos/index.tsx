import { ReactNode } from "react";
import { IconContainer, IconInfosContainer } from "./styles";

interface IconInfosProps {
    icon: ReactNode;
    text: string | ReactNode;
    iconcolor: string;
}

export function IconInfos({ icon, text, iconcolor}: IconInfosProps) {
    return(
        <IconInfosContainer>
            <IconContainer iconcolor={iconcolor}>{icon}</IconContainer>
            {typeof text === "string" ? <p>{text}</p> : text}
        </IconInfosContainer>
    )
}