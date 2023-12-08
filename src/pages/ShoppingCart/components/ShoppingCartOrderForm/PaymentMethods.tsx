import { Bank, CreditCard, Money } from "phosphor-react";
import { PaymentMethodInput } from "../PaymentMethodInput";
import { PaymentMethodsContainer } from "./styles";

const paymentMethods = {
    credit: {
        label: "Cartão de credito",
        icon: <CreditCard size={16}/>
    },
    debit: {
        label: "Cartão de debit",
        icon: <Bank size={16}/>
    },
    money: {
        label: "Dinheiro",
        icon: <Money size={16}/>
    },
}

export function PaymentMethods () {
    return(
        <PaymentMethodsContainer>
            {Object.entries(paymentMethods).map(([key, {label, icon}]) => (
                <PaymentMethodInput 
                    key={label} id={key} icon={icon} label={label} value={key}
                />
            ))}
        </PaymentMethodsContainer>
    )
}