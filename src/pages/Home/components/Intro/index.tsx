import { IntroContainer, IntroContent, IntroGoodPointsContainer, IntroTitle } from "./styles";

import introImg from "../../../../assets/intro-img.png"
import { RegularText } from "../../../../components/TextTypes";
import { IconInfos } from "../../../../components/IconInfos";

import { ShoppingCart, Package, Timer, Coffee } from "phosphor-react";
import { useTheme } from "styled-components";

export function Intro() {
    const { color } = useTheme();

    return(
        <IntroContainer>
            <IntroContent className="container">
            <div>
                <section>
                    <IntroTitle size="xl">
                        Encontre o café perfeito para qualquer hora do dia
                    </IntroTitle>

                    <RegularText size="l" color="subtitle" as="h3">
                        Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
                    </RegularText>
                </section>

                <IntroGoodPointsContainer>
                    <IconInfos
                        color={color["brand-yellow-dark"]}
                        icon={<ShoppingCart weight="fill" />}
                        text="Compra simples e segura"
                    />
                    
                    <IconInfos
                        color={color["base-text"]}
                        icon={<Package weight="fill" />}
                        text="Embalagem mantem o café intacto"
                    />
                    
                    <IconInfos
                        color={color["brand-yellow"]}
                        icon={<Timer weight="fill" />}
                        text="Entrega rápida e rastreada"
                    />

                    <IconInfos
                        color={color["brand-purple"]}
                        icon={<Coffee weight="fill" />}
                        text="O café chega fresquinho até voçê"
                    />
                </IntroGoodPointsContainer>
            </div>

            <img src={introImg} />
            </IntroContent>
        </IntroContainer>
    )
}