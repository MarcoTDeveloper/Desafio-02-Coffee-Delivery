import styled from "styled-components";

interface TitleTextProps {
  size?: "xl" | "l" | "m" | "s" | "xs";
  color?: "title" | "subtitle" | "text";
  weight?: string | number;
}

interface RegularTextProps {
  size?: "l" | "m" | "s";
  color?: "text" | "subtitle" | "label";
  weight?: string | number;
}

export const TitleText = styled.h1<TitleTextProps>`
  color: ${({ theme, color }) => theme.color[`base-${color ?? "title"}`]};

  font-size: ${({ theme, size }) =>
    theme.textSize[`title-title-${size ?? "m"}`]};

  font-family: ${({ theme }) => theme.font.title};
  line-height: 1.3;
  font-weight: ${({ weight }) => weight ?? 800};
`;

export const RegularText = styled.p<RegularTextProps>`
  color: ${({ theme, color }) => theme.color[`base-${color ?? "text"}`]};

  font-size: ${({ theme, size }) =>
    theme.textSize[`text-regular-${size ?? "m"}`]};
    
  line-height: 1.3;
  font-weight: ${({ weight }) => weight ?? 400};
`;