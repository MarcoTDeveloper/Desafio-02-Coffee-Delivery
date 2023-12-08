import { RegularText, TitleText } from "../../components/TextTypes";
import { OrderConfirmedContainer, OrderDetailsContainer } from "./styles";

import confirmedOrderIllustration from "../../assets/confirmed-image.svg";
import { IconInfos } from "../../components/IconInfos";

import { MapPin, Clock, CurrencyDollar } from "phosphor-react";
import { useTheme } from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import { OrderData } from "../ShoppingCart";
import { paymentMethods } from "../ShoppingCart/components/ShoppingCartOrderForm/PaymentMethods";
import { useEffect } from "react";

interface LocationType {
    state: OrderData
}

export function OrderConfirmed() {
    const { color } = useTheme();

    const { state } = useLocation() as unknown as LocationType;

    const navigate = useNavigate();

    useEffect(() => {
        if(!state) {
            return navigate("/")
        }
        } ,[])

    if(!state) return <></>

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
                        color={color["brand-purple"]}
                        text={
                        <RegularText>
                            Entrega em <strong>{state.street}, {state.number}</strong>
                            <br />
                            {state.district} - {state.city}, {state.uf}
                        </RegularText>}
                    />

                    <IconInfos
                        icon={<Clock weight="fill"/>}
                        color={color["brand-yellow"]}
                        text={
                        <RegularText>
                            Previsão de entrega
                            <br />
                            <strong>20 min - 30 min</strong>
                        </RegularText>}
                    />

                        <IconInfos
                        icon={<CurrencyDollar weight="fill"/>}
                        color={color["brand-yellow-dark"]}
                        text={
                        <RegularText>
                            Pagamento na entrega
                            <br />
                            <strong>{paymentMethods[state.paymentMethod].label}</strong>
                        </RegularText>}
                    />
                </OrderDetailsContainer>     


                <img src={confirmedOrderIllustration} />
            </section>
        </OrderConfirmedContainer>
    )
}