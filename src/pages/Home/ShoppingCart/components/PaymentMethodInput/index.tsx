import { CreditCard } from "phosphor-react";
import { PaymentMethodsInputContainer } from "./styles";

export function PaymentMethodInput () {
    return(
        <PaymentMethodsInputContainer>
            <CreditCard size={16} />
            Cartão de credito
        </PaymentMethodsInputContainer>
    )
}