import { Bank, CreditCard, Money } from "phosphor-react";
import { PaymentMethodInput } from "../PaymentMethodInput";
import { PaymentMethodsContainer } from "./styles";
import { useFormContext } from "react-hook-form";
import { RegularText } from "../../../../components/TextTypes";

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
    const {register, formState: {errors} } = useFormContext();

    const paymentMethodError = errors?.paymentMethod?.message as unknown as string;

    return(
        <PaymentMethodsContainer>
            {Object.entries(paymentMethods).map(([key, {label, icon}]) => (
                <PaymentMethodInput 
                    key={label} id={key} icon={icon} label={label} value={key} {...register("paymentMethods")}
                />
            ))}
            {paymentMethodError && <RegularText>{paymentMethodError}</RegularText>}
        </PaymentMethodsContainer>
    )
}