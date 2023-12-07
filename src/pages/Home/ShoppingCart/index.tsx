import { SelectedCoffees } from "./components/SelectedCoffees";
import { ShoppingCartForm } from "./components/ShoppingCartOrderForm";
import { ShoppingCartContainer } from "./styles";

export function ShoppingCart() {
    return(
        <ShoppingCartContainer className="container">
            <ShoppingCartForm />
            <SelectedCoffees />
        </ShoppingCartContainer>
    )
}