import { PaymentMethodsInputContainer, ContentContainer } from "./styles";
import { InputHTMLAttributes, ReactNode, forwardRef } from "react";

type PaymentMethodInputProps = InputHTMLAttributes<HTMLInputElement> & {
    icon: ReactNode;
    label: string;
}

export const PaymentMethodInput = forwardRef<HTMLInputElement, PaymentMethodInputProps>(({id, icon, label, ...props}, ref) => {
    return (
        <PaymentMethodsInputContainer>
            <input id={id} type="radio" {...props} name="paymentMethod" ref={ref} />
            <label htmlFor={id}>
                <ContentContainer>
                    {icon}
                    {label}
                </ContentContainer>
            </label>
        </PaymentMethodsInputContainer>
    )
})