import { Button } from "../../../../components/Button";
import { RegularText } from "../../../../components/TextTypes";
import { useCart } from "../../../../hooks/useCart";
import { FormatMoney } from "../../../../utils/Money";
import { ConfirmationSectionContainer } from "./styles";

const DELIVERY_TAX = 3.5;

export function ConfirmationSection() {
    const { constItemsTotal, cartQuantity } = useCart();
    const cartTotal = DELIVERY_TAX + constItemsTotal;

    const formattedItemsTotal = FormatMoney(constItemsTotal);
    const formattedCartTotal = FormatMoney(cartTotal);
    const formattedDeliveryTax = FormatMoney(DELIVERY_TAX);

    return(
        <ConfirmationSectionContainer>
            <div>
                <RegularText size="s">Total de itens</RegularText>
                <RegularText size="s">R$ {formattedItemsTotal}</RegularText>
            </div>
            <div>
                <RegularText size="s">Entrega</RegularText>
                <RegularText size="s">R$ {formattedDeliveryTax}</RegularText>
            </div>
            <div>
                <RegularText weight={700} color="subtitle" size="l">Total</RegularText>
                <RegularText weight={700} color="subtitle" size="l">R$ {formattedCartTotal}</RegularText>
            </div>

            <Button disabled={cartQuantity <= 0} text="Confirmar pedido" type="submit"/>
        </ConfirmationSectionContainer>
    )
}