import { useTheme } from "styled-components";
import { TitleText } from "../../../../../components/TextTypes";
import { SectionTitle } from "../SectionTitle";
import { FormSectionContainer, ShoppingCartFormContainer } from "./styles";
import { MapPinLine, CurrencyDollar } from "phosphor-react"
import { AddressForm } from "./AddressForm";
import { PaymentMethods } from "./PaymentMethods";

export function ShoppingCartForm() {
    const { color } = useTheme();

    return (
        <ShoppingCartFormContainer>
            <TitleText size="xs" color="subtitle">
                Complete seu pedido.
            </TitleText>
            
            <FormSectionContainer>
                <SectionTitle
                    title="Endereço de Entrega"
                    subtitle="Informe o endereço onde deseja receber seu pedido"
                    icon={<MapPinLine color={color["brand-yellow-dark"]} size={22} />}
                />

                <AddressForm />
            </FormSectionContainer>

            <FormSectionContainer>
                <SectionTitle
                    title="Pagamento"
                    subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
                    icon={<CurrencyDollar color={color["brand-purple"]} size={22} />}
                />

                <PaymentMethods/>
            </FormSectionContainer>

        </ShoppingCartFormContainer>
    )
}