import { ReactNode } from "react";
import { IconContainer, IconInfosContainer } from "./styles";

interface IconInfosProps {
    icon: ReactNode;
    text: string | ReactNode;
    color: string;
}

export function IconInfos({ icon, text, color}: IconInfosProps) {
    return(
        <IconInfosContainer>
            <IconContainer color={color}>{icon}</IconContainer>
            {typeof text === "string" ? <p>{text}</p> : text}
        </IconInfosContainer>
    )
}