import { RegularText, TitleText } from "../../components/TextTypes";
import { OrderConfirmedContainer, OrderDetailsContainer } from "./styles";

import confirmedOrderIllustration from "../../assets/confirmed-image.svg";
import { IconInfos } from "../../components/IconInfos";

import { MapPin, Clock, CurrencyDollar } from "phosphor-react";
import { useTheme } from "styled-components";

export function OrderConfirmed() {
    const { color } = useTheme();

    return(
        <OrderConfirmedContainer className="container">
            <div>
                <TitleText size="l">Uhu! Pedido confirmado</TitleText>
                <RegularText size="l" color="subtitle">Agora é só aguardar que logo o café chegará até você</RegularText>
            </div>

            <section>
                <OrderDetailsContainer>
                    <IconInfos
                        icon={<MapPin weight="fill"/>}
                        iconcolor={color["brand-purple"]}
                        text={
                        <RegularText>
                            Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
                            <br />
                            Farrapos Porto Alegre
                        </RegularText>}
                    />

                    <IconInfos
                        icon={<Clock weight="fill"/>}
                        iconcolor={color["brand-yellow"]}
                        text={
                        <RegularText>
                            Previsão de entrega
                            <br />
                            <strong>20 min - 30 min</strong>
                        </RegularText>}
                    />

                        <IconInfos
                        icon={<CurrencyDollar weight="fill"/>}
                        iconcolor={color["brand-yellow-dark"]}
                        text={
                        <RegularText>
                            Pagamento na entrega
                            <br />
                            <strong>Cartão de Crédito</strong>
                        </RegularText>}
                    />
                </OrderDetailsContainer>     


                <img src={confirmedOrderIllustration} />
            </section>
        </OrderConfirmedContainer>
    )
}