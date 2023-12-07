import { ButtonsContainer, HeaderButton, HeaderContainer } from "./styles";

import coffeeDeliveryLogo from "../../assets/coffee-delivery-logo.svg"

import { MapPin, ShoppingCart } from "phosphor-react"

export function Header() {
    return(
        <HeaderContainer>
            <div className="container">
                <img src={coffeeDeliveryLogo} />

                <ButtonsContainer>

                    <HeaderButton buttonColor="purple">
                        <MapPin size={20} weight="fill" />
                        Arcos, MG
                    </HeaderButton>

                    <HeaderButton buttonColor="yellow">
                        <ShoppingCart size={20} weight="fill" />
                    </HeaderButton>

                </ButtonsContainer>

            </div>
        </HeaderContainer>
    )
}