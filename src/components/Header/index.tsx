import { ButtonsContainer, HeaderButton, HeaderContainer } from "./styles";

import coffeeDeliveryLogo from "../../assets/coffee-delivery-logo.svg"

import { MapPin, ShoppingCart } from "phosphor-react"
import { NavLink } from "react-router-dom";

export function Header() {
    return(
        <HeaderContainer>
            <div className="container">
                <NavLink to={"/"}>
                    <img src={coffeeDeliveryLogo} />
                    </NavLink>
                <ButtonsContainer>

                    <HeaderButton buttonColor="purple">
                        <MapPin size={20} weight="fill" />
                        Arcos, MG
                    </HeaderButton>

                    <NavLink to={"/shopping-cart"}>
                        <HeaderButton buttonColor="yellow">
                            <ShoppingCart size={20} weight="fill" />
                        </HeaderButton>
                    </NavLink>

                </ButtonsContainer>

            </div>
        </HeaderContainer>
    )
}