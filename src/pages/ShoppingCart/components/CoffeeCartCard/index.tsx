import { Trash } from "phosphor-react";
import { QuantityInput } from "../../../../components/QuantityInput";
import { RegularText } from "../../../../components/TextTypes";
import { ActionsContainer, CoffeeCartCardContainer, RemoveButton } from "./styles";
import { CartItem } from "../../../../contexts/CartContext";
import { FormatMoney } from "../../../../utils/Money";
import { useCart } from "../../../../hooks/useCart";

interface CoffeeCardProps {
    coffee: CartItem
}

export function CoffeeCartCard({ coffee }: CoffeeCardProps) {

    const { changeCartItemQuantity, removeCartItem } = useCart()
        
        function handleIncrease() {
            changeCartItemQuantity(coffee.id, "increase")
        }

        function handleDecrease() {
            changeCartItemQuantity(coffee.id, "decrease")
        }

        function handleRemove() {
            removeCartItem(coffee.id)
        }

    const coffeeTotal = coffee.price * coffee.quantity;

    const formattedPrice = FormatMoney(coffeeTotal);

    return(
        <CoffeeCartCardContainer>
            <div>
                <img src={`public/coffees/${coffee.photo}`} />
                <div>
                    <RegularText color="subtitle">
                        {coffee.name}
                    </RegularText>

                    <ActionsContainer>
                        <QuantityInput onIncrease={handleIncrease} onDecrease={handleDecrease} quantity={coffee.quantity} size="small" />
                        <RemoveButton onClick={handleRemove}>
                            <Trash size={16} />
                            Remover
                        </RemoveButton>
                    </ActionsContainer>
                </div>
            </div>

            <p>{formattedPrice}</p>
        </CoffeeCartCardContainer>
    )
}