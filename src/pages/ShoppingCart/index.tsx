import { SelectedCoffees } from "./components/SelectedCoffees";
import { ShoppingCartForm } from "./components/ShoppingCartOrderForm";
import { ShoppingCartContainer } from "./styles";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider } from "react-hook-form";

enum PaymentMethods {
    credit = "credit",
    debit = "debit",
    money = "money",
}

const confirmOrderValidationSchema = zod.object({
    cep: zod.string().min(1, "Informe seu CEP"),
    street: zod.string().min(1, "Informe sua Rua"),
    number: zod.string().min(1, "Informe seu Número"),
    complement: zod.string(),
    district: zod.string().min(1, "Informe seu Bairro"),
    city: zod.string().min(1, "Informe sua Cidade"),
    uf: zod.string().min(1, "Informe a UF"),
    paymentMethod: zod.nativeEnum(PaymentMethods, {
        errorMap:() => {
            return { message: "Informe o método de pagamento" }
        }
    })
})

export type OrderData = zod.infer<typeof confirmOrderValidationSchema>

type ConfirmOrderFormData = OrderData;

export function ShoppingCart() {
    const confirmOrderForm = useForm<ConfirmOrderFormData>({
        resolver: zodResolver(confirmOrderValidationSchema)
    })

    const { handleSubmit } = confirmOrderForm;

    function handleConfirmOrder(data: ConfirmOrderFormData) {
        console.log(data); 
    }

    return(
        <FormProvider { ...confirmOrderForm }>
            <ShoppingCartContainer className="container" onSubmit={handleSubmit(handleConfirmOrder)}>
                <ShoppingCartForm />
                <SelectedCoffees />
            </ShoppingCartContainer>
        </FormProvider>
    )
}