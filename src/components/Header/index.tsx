import { ButtonsContainer, HeaderButton, HeaderContainer } from "./styles";

import coffeeDeliveryLogo from "../../assets/coffee-delivery-logo.svg"

import { MapPin, ShoppingCart } from "phosphor-react"
import { NavLink } from "react-router-dom";
import { useCart } from "../../hooks/useCart";

export function Header() {

    const { cartQuantity } = useCart();

    return(
        <HeaderContainer>
            <div className="container">
                <NavLink to={"/"}>
                    <img src={coffeeDeliveryLogo} />
                    </NavLink>
                <ButtonsContainer>

                    <HeaderButton color="purple">
                        <MapPin size={20} weight="fill" />
                        Arcos, MG
                    </HeaderButton>

                    <NavLink to={"/shopping-cart"}>
                        <HeaderButton color="yellow">
                            {cartQuantity >= 1 && <span>{cartQuantity}</span> }
                            <ShoppingCart size={20} weight="fill" />
                        </HeaderButton>
                    </NavLink>

                </ButtonsContainer>

            </div>
        </HeaderContainer>
    )
}